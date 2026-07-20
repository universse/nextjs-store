import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <h2 className="text-2xl pl-4">Dashboard</h2>
      <Separator className="mt-2" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}

export default DashboardLayout;
