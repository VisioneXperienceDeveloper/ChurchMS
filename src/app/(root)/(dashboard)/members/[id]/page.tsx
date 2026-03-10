"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  User, 
  Briefcase, 
  CreditCard, 
  MapPin,
  Mail,
  Edit,
  Trash
} from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/ui/tooltip";
import { getMemberById, deleteMember } from "@/features/member/actions/member.actions";

export default function MemberPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: member, isLoading, error } = useQuery({
    queryKey: ['member', id],
    queryFn: () => getMemberById(id),
    enabled: !!id,
  });

  if (isLoading) return <div className="p-8 text-center text-muted-foreground">Loading member...</div>;
  if (error || !member) return <div className="p-8 text-center text-red-500">Error: Member not found</div>;

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this member?")) {
      await deleteMember(id);
      router.push("/members");
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full p-6">
        <Card className="flex-1 border-none shadow-sm flex flex-col overflow-hidden">
          <CardContent className="p-8 space-y-10 overflow-y-auto">
            
            {/* Profile Header */}
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.profileImgUrl || undefined} />
                  <AvatarFallback className="text-xl bg-gray-200">
                    {member.lastName.charAt(0)}{member.firstName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{member.lastName} {member.firstName}</h2>
                    <p className="text-sm text-gray-500">Assigned: {new Date(member.assignedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4">{member.role}</Badge>
                    {member.hasBaptized && (
                      <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4">Baptised</Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="border-red-100 text-red-500 hover:bg-red-50 hover:text-red-700 gap-2" onClick={handleDelete}>
                      <Trash className="h-4 w-4" /> 
                      Delete
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete member</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 gap-2" onClick={() => router.push(`/members/${id}/edit`)}>
                      <Edit className="h-4 w-4" /> 
                      Edit Profile
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit member details</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send an email</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

          <Separator />

          {/* Personal Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" /> 
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
              <InfoItem icon={<Phone className="h-4 w-4 text-gray-500" />} label="Phone Number" value={member.phone || "-"} />
              <InfoItem icon={<Calendar className="h-4 w-4 text-gray-500" />} label="Date of Birth" value={member.bod ? new Date(member.bod).toLocaleDateString() : "-"} />
              <InfoItem icon={<MessageCircle className="h-4 w-4 text-gray-500" />} label="Kakao ID" value={member.kakaoAccount || "-"} />
              <InfoItem icon={<User className="h-4 w-4 text-gray-500" />} label="Gender" value={member.gender ? "Male" : "Female"} />
              
              <InfoItem icon={<Briefcase className="h-4 w-4 text-gray-500" />} label="Occupation" value={member.occupation || "-"} />
              <InfoItem icon={<CreditCard className="h-4 w-4 text-gray-500" />} label="Visa Type" value={member.visaType || "-"} />
              <InfoItem icon={<MapPin className="h-4 w-4 text-gray-500" />} label="Address" value={member.address || "-"} />
            </div>
          </div>

          <Separator />

          {/* Admin Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Edit className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">Admin Notes</h3>
            </div>
            
            <div className="bg-gray-50/50 rounded-lg p-6 border border-gray-100 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
              {member.note || "No administrative notes provided."}
            </div>
          </div>

        </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}

function InfoItem({ 
  icon, 
  label, 
  value, 
  subValue,
  valueClassName,
  customValue
}: { 
  icon: React.ReactNode, 
  label: string, 
  value: string, 
  subValue?: string,
  valueClassName?: string,
  customValue?: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-400 flex items-center gap-2">
        {label}
      </p>
      <div className="flex items-center gap-3">
        <div className="bg-gray-50 p-2 rounded-md border border-gray-100">{icon}</div>
        {customValue ? customValue : (
          <div className={valueClassName}>
            <p className="font-medium text-gray-900">{value}</p>
            {subValue && <p className="font-medium text-gray-900">{subValue}</p>}
          </div>
        )}
      </div>
    </div>
  );
}