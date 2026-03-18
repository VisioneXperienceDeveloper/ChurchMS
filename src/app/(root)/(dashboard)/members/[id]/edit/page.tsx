"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Input, Button, Label, Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui";
import { apiClient } from "@client/shared/api-client";
import { Role } from "@shared/types/enums";
import { PersonDTO, UpdateMemberRequest } from "@shared/types/member";

export default function EditMemberPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: response, isLoading: queryLoading } = useQuery({
    queryKey: ['member', id],
    queryFn: () => apiClient.get<PersonDTO>(`/api/v1/members/${id}`),
    enabled: !!id,
  });

  const member = response?.data;

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    try {
      const data: UpdateMemberRequest = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phone: formData.get("phone") as string,
        gender: formData.get("gender") === "male",
        role: formData.get("role") as Role,
      };
      
      const response = await apiClient.patch(`/api/v1/members/${id}`, data);
      if (response.success) {
        router.push(`/members/${id}`);
      } else {
        setError(response.error?.message || "Failed to update member");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  if (queryLoading) {
    return <div className="p-8 text-center text-muted-foreground">Loading member data...</div>;
  }

  if (!member) {
    return <div className="p-8 text-center text-red-500">Member not found</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-6 max-w-2xl mx-auto w-full">
      <h1 className="text-3xl font-bold tracking-tight">Edit Member</h1>
      <Card>
        <CardHeader>
          <CardTitle>Member Information</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form action={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" defaultValue={member.lastName} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" defaultValue={member.firstName} required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" placeholder="010-0000-0000" defaultValue={member.phone} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <select 
                  id="gender" 
                  name="gender" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  defaultValue={member.gender ? "male" : "female"}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select 
                  id="role" 
                  name="role" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  defaultValue={member.role}
                >
                  <option value="MEMBER">Member</option>
                  <option value="NEWCOMER">Newcomer</option>
                  <option value="LEADER">Leader</option>
                  <option value="PASTOR">Pastor</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
              <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
