
import { DashboardLayout } from "@/widgets/layout/ui/dashboard-layout";
import { auth } from "@/shared/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  // const session = await auth();
  // if (!session) {
  //   redirect("/login");
  // }

  return <DashboardLayout>{children}</DashboardLayout>;
}
