import DashboardLayout from '@/components/layout/dashboard-layout'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Users, Megaphone } from "lucide-react"



const announcements = [
  {
    id: 1,
    title: "Midterm Exam Results Posted",
    description:
      "The midterm examination results for all subjects have been published. Please check your grades in the Grades section.",
    date: "Dec 2, 2024",
    type: "academic",
    important: true,
  },
  {
    id: 2,
    title: "Winter Break Schedule",
    description:
      "School will be closed from December 20th to January 3rd for winter break. Classes will resume on January 4th.",
    date: "Dec 1, 2024",
    type: "event",
    important: true,
  },
  {
    id: 3,
    title: "Science Fair Registration Open",
    description:
      "Registration for the annual science fair is now open. Deadline for project proposals is December 15th.",
    date: "Nov 30, 2024",
    type: "event",
    important: false,
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    description:
      "Parent-teacher conferences will be held on December 8th from 2 PM to 6 PM. Please inform your parents.",
    date: "Nov 28, 2024",
    type: "meeting",
    important: false,
  },
  {
    id: 5,
    title: "Library Extended Hours",
    description:
      "The school library will have extended hours (8 AM - 8 PM) during exam week to support student study sessions.",
    date: "Nov 25, 2024",
    type: "general",
    important: false,
  },
]



const typeIcons = {
  academic: BookOpen,
  event: Calendar,
  meeting: Users,
  general: Megaphone,
}

const typeColors = {
  academic: "bg-primary",
  event: "bg-accent",
  meeting: "bg-chart-3",
  general: "bg-chart-5",
}
const StudentAnnouncementPage = () => {
  return (
    <DashboardLayout>
      <div className='space-y-6! px-6! mb-10!'>
          <div>
          <h1 className="text-3xl font-bold mt-6!">Announcements</h1>
          <p className="text-muted-foreground">Stay updated with school news and events</p>
        </div>
        
        <div className='space-y-4!'>
          {announcements.map((announcement)=>{
            const Icon =typeIcons[announcement.type as keyof typeof typeIcons]
            const colorClass=typeColors[announcement.type as keyof typeof typeColors]
            return(
              <Card key={announcement.id} className={`bg-card ${announcement.important ? "border-primary " :""} `}>
                <CardHeader className='pb-2!'>
                  <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-3!'>
                      <div className={`rounded-lg ${colorClass}/10 p-2!`}>
                       <Icon className={`h-6! w-6! ${colorClass.replace('bg-','text-')}`}/>
                      </div>
                          <div>
                            <CardTitle className='text-lg flex-items-center gap-2! py-4!  '>
                              {announcement.title}
                              {announcement.important && (<Badge variant='destructive' className='text-xs px-4! py-1!'>Important</Badge>)}

                            </CardTitle>
                            <p className='text-sm text-muted-foreground'>{announcement.date}</p>
                          </div>
                    </div>
                    <Badge variant='outline' className='h-8! w-16! m-5!'>{announcement.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground px-6! mb-6!'>{announcement.description}</p>
                </CardContent>

              </Card>
            )
          })}
          </div>     

      </div>
    </DashboardLayout>
  )
}

export default StudentAnnouncementPage