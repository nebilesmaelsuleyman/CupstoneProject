"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import type { UserRole } from "@/lib/type"
import { navItems } from "./nav-items"

export function AppSidebar({ role }: { role: UserRole }) {
  const pathname = usePathname()
  const items = navItems[role]

  return (
    <>
      <Sidebar>
      <SidebarContent className="py-6 px-4 flex flex-col gap-6">

        <SidebarGroup>


          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col py-3 gap-1">

              {items.map((item) => {
                const active = pathname.startsWith(item.href)

                return (
                  <SidebarMenuItem key={item.title}>

                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          // OVERRIDE default padding and fonts
                          "px-5! py-5! text-[15px]! font-semibold!",
                          "flex items-center gap-3 rounded-lg",
                          "transition-all duration-200",
                          "hover:bg-gray-100 hover:text-black",

                          active &&
                          "bg-primary text-white! shadow-md  py-6!"
                        )}
                      >
                        <item.icon className="h-5! w-5!" />
                        <span className='text-gray-700!'>{item.title} </span>
                      </Link>
                    </SidebarMenuButton>

                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
    </>
  )
}
