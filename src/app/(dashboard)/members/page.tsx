"use client";

import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  User, 
  Briefcase, 
  Droplets, 
  CreditCard, 
  MapPin,
  Mail,
  Edit
} from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/ui/tooltip";

export default function MembersPage() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-full flex flex-col">
        <Card className="flex-1 border-none shadow-sm flex flex-col overflow-hidden">
          <CardContent className="p-8 space-y-10 overflow-y-auto">
            
            {/* Profile Header */}
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatars/chris-choi.png" />
                  <AvatarFallback className="text-xl bg-gray-200">CC</AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Chris Choi</h2>
                    <p className="text-sm text-gray-500">Assigned: 16 Feb 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4">Vice Leader</Badge>
                    <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4">HyunJu Cell</Badge>
                    <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4">Baptised</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="border-red-100 bg-red-50 text-gray-700 hover:bg-red-100 hover:text-gray-900 gap-2">
                      <Edit className="h-4 w-4 text-red-400" /> 
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
                    <p>Send an email to Chris</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

          <Separator />

          {/* Personal Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <User className="h-5 w-5 text-red-400" /> 
               <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
              <InfoItem icon={<Phone className="h-4 w-4 text-red-400" />} label="Phone Number" value="0431 000 000" subValue="010 0000 0000" />
              <InfoItem icon={<Calendar className="h-4 w-4 text-red-400" />} label="Date of Birth" value="16 May 2000" />
              <InfoItem icon={<MessageCircle className="h-4 w-4 text-red-400" />} label="Kakao ID" value="jwoo516" />
              <InfoItem icon={<User className="h-4 w-4 text-red-400" />} label="Gender" value="Male" />
              
              <InfoItem icon={<Briefcase className="h-4 w-4 text-red-400" />} label="Occupation" value="Home Protector" />
              <InfoItem 
                icon={<Droplets className="h-4 w-4 text-red-400" />} 
                label="Baptism Status" 
                value="Baptised"
                valueClassName="hidden"
                customValue={<Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-2 rounded-sm font-normal">Baptised</Badge>}
              />
              <InfoItem icon={<CreditCard className="h-4 w-4 text-red-400" />} label="Visa Type" value="Student Visa" />
              <InfoItem icon={<MapPin className="h-4 w-4 text-red-400" />} label="Address" value="9 Hilts Road, Strathfield, NSW" />
            </div>
          </div>

          <Separator />

          {/* Admin Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <Edit className="h-5 w-5 text-red-400" />
               <h3 className="text-lg font-semibold text-gray-900">Admin Notes</h3>
            </div>
            
            <div className="bg-gray-50/50 rounded-lg p-6 border border-gray-100 text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lorem gravida tempus non elementum aenean nisl erat blandit. Lorem ipsum dolor sit amet consectetur. Lorem gravida tempus non elementum aenean nisl erat blandit. Lorem ipsum dolor sit amet consectetur. Lorem gravida tempus non elementum aenean nisl erat blandit. Lorem ipsum dolor sit amet consectetur. Lorem gravida tempus non elementum aenean nisl erat blandit.
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
        <div className="bg-red-50 p-2 rounded-md">{icon}</div>
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