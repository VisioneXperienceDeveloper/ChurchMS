
import { Button } from "@client/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui/card";
import { UserPlus, Users, Banknote, FolderPlus } from "lucide-react";

import { SimpleTooltip } from "@client/shared/ui/simple-tooltip";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex w-full justify-between gap-2">
        <SimpleTooltip content="Add Member" side="top">
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" type="button">
            <UserPlus className="h-5 w-5" />
          </Button>
        </SimpleTooltip>
        
        <SimpleTooltip content="New Family" side="top">
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" type="button">
            <Users className="h-5 w-5" />
          </Button>
        </SimpleTooltip>

        <SimpleTooltip content="Record Offering" side="top">
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" type="button">
            <Banknote className="h-5 w-5" />
          </Button>
        </SimpleTooltip>

        <SimpleTooltip content="Create Group" side="top">
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" type="button">
            <FolderPlus className="h-5 w-5" />
          </Button>
        </SimpleTooltip>
      </CardContent>
    </Card>
  );
}
