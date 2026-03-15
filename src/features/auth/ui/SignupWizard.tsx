"use client";

import React, { useState } from "react";

import { SignupRequest, VisaType } from "@/entities/user/model/types";
// No Prisma client import on client side
import { useAuth } from "@/shared/providers/auth-provider";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import Link from "next/link";

export function SignupWizard() {
  const { signup } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<SignupRequest>({
    email: "",
    password: "",
    personData: {
      firstName: "",
      lastName: "",
      gender: true,
      phone: "",
      kakaoAccount: "",
      bod: null,
      address: "",
      occupation: "",
      visaType: "STUDENT" as VisaType,
      groupId: "default-group",
      note: "",
      profileImgUrl: null,
    },
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "email" || name === "password") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({
        ...prev,
        personData: { ...prev.personData, [name]: value },
      }));
    }
  };

  const handleGenderChange = (gender: boolean) => {
    setFormData((prev) => ({
      ...prev,
      personData: { ...prev.personData, gender },
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await signup(formData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const StepIndicator = () => (
    <div className="flex justify-between items-center mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            step === s ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20" : 
            step > s ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
          }`}>
            {s}
          </div>
          {s < 3 && <div className={`w-12 h-0.5 mx-2 ${step > s ? "bg-primary" : "bg-muted"}`} />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-lg w-full">
      <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-2xl backdrop-blur-sm transition-all duration-500">
        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-primary-foreground/50" />
        
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-foreground">Create Account</h1>
          <p className="text-muted-foreground">Join our community today</p>
        </div>

        <StepIndicator />

        <div className="space-y-6 transition-all duration-300 animate-in fade-in slide-in-from-right-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="h-12 bg-muted/50 focus:bg-background" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Security Password</Label>
                <Input name="password" type="password" value={formData.password} onChange={handleChange} className="h-12 bg-muted/50 focus:bg-background" required />
              </div>
              <Button className="w-full h-12 text-lg font-semibold mt-4 transition-transform active:scale-95" onClick={nextStep}>
                Next Step
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input name="firstName" value={formData.personData.firstName} onChange={handleChange} className="bg-muted/50 focus:bg-background" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input name="lastName" value={formData.personData.lastName} onChange={handleChange} className="bg-muted/50 focus:bg-background" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant={formData.personData.gender ? "default" : "outline"} onClick={() => handleGenderChange(true)} className="h-10">Male</Button>
                  <Button variant={!formData.personData.gender ? "default" : "outline"} onClick={() => handleGenderChange(false)} className="h-10">Female</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input name="phone" value={formData.personData.phone} onChange={handleChange} placeholder="010-0000-0000" className="bg-muted/50 focus:bg-background" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bod">Date of Birth</Label>
                <Input name="bod" type="date" value={formData.personData.bod || ""} onChange={handleChange} className="bg-muted/50 focus:bg-background" />
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="ghost" className="flex-1 h-12" onClick={prevStep}>Back</Button>
                <Button className="flex-2 h-12 text-lg font-semibold transition-transform active:scale-95" onClick={nextStep}>Continue</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Residential Address</Label>
                <Input name="address" value={formData.personData.address || ""} onChange={handleChange} className="bg-muted/50 focus:bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation / School</Label>
                <Input name="occupation" value={formData.personData.occupation || ""} onChange={handleChange} className="bg-muted/50 focus:bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kakaoAccount">Kakao ID (Optional)</Label>
                <Input name="kakaoAccount" value={formData.personData.kakaoAccount || ""} onChange={handleChange} className="bg-muted/50 focus:bg-background" />
              </div>
              
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg border border-red-100 animate-shake">
                  {error}
                </div>
              )}
              
              <div className="flex gap-3 mt-4">
                <Button variant="ghost" className="flex-1 h-12" onClick={prevStep}>Back</Button>
                <Button className="flex-2 h-12 text-lg font-semibold transition-transform active:scale-95" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Creating Account..." : "Finalize Registration"}
                </Button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="p-0 h-auto font-semibold text-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

