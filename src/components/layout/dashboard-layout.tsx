import React from 'react'
import { AppSidebar } from "./sidebar/app-sidebar"
import { AppHeader } from "./app.header"
import { SidebarProvider } from "@/components/ui/sidebar"
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <SidebarProvider>
        <div className='flex h-screen w-full'>
        <AppSidebar role='student'/>

        <div className='flex flex-col  w-full'>
            <AppHeader />
            <main className="">{children}</main>
        </div>
        </div>
   </SidebarProvider>
   
  )
}

export default DashboardLayout