import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarInset,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  // SidebarTrigger,
  // Collapsible,
  // CollapsibleTrigger,
  // CollapsibleContent,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
// import { AppSidebar } from "@/components/admin/SideBar";

const items = [
  {
    title: "Home",
    url: "/admin/",
    icon: Home,
  },
  {
    title: "Category",
    url: "/admin/categories",
    icon: Inbox,
  },
  {
    title: "Product",
    url: "/admin/products",
    icon: Inbox,
  },
  {
    title: "Users",
    url: "#",
    icon: User,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
export function SideBar() {
  return (
    <Sidebar className="">
      <SidebarContent className="bg-white px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-10">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <>
                        <Home />
                        <span className="font-semibold">Collapsible</span>
                      </>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {items.map((item) => (
                      <SidebarMenuSub key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link to={item.url}>
                            {/* <item.icon /> */}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
