import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { SidebarInset } from "@/components/ui/sidebar";
import { SideBar } from "@/components/admin/SideBar";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          </header>
          <main className="m-5">
            {/* <SidebarTrigger /> */}

            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
