import React from 'react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const enrolledClasses = [
  {
    subject: "Mathematics",
    teacher: "Michael Johnson",
    teacherAvatar: "/placeholder.svg?key=q6jmy",
    schedule: "Mon, Wed, Fri - 08:00 AM",
    room: "Room 101",
    progress: 75,
  },
  {
    subject: "English",
    teacher: "Jennifer Williams",
    teacherAvatar: "/placeholder.svg?key=e5vhv",
    schedule: "Mon, Wed - 09:15 AM",
    room: "Room 105",
    progress: 68,
  },
  {
    subject: "Physics",
    teacher: "Michael Johnson",
    teacherAvatar: "/placeholder.svg?key=8c6yh",
    schedule: "Tue, Thu - 10:30 AM",
    room: "Lab 2",
    progress: 82,
  },
  {
    subject: "Chemistry",
    teacher: "David Brown",
    teacherAvatar: "/placeholder.svg?key=lj2pe",
    schedule: "Mon, Fri - 13:00 PM",
    room: "Lab 3",
    progress: 60,
  },
  {
    subject: "Biology",
    teacher: "David Brown",
    teacherAvatar: "/placeholder.svg?key=rj4ah",
    schedule: "Tue, Thu - 14:15 PM",
    room: "Lab 1",
    progress: 70,
  },
]

const MyClass = () => {
  return (<DashboardLayout >
    <div className='space-y-7! px-7! '>
      <div>
        <h1 className="text-3xl font-bold mt-6!  ">MY Classes</h1>
        <p className='text-muted-foreground mb-6! '>View your enrolled classes and subjects</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  '>
        {enrolledClasses.map((cls,index)=>(
           <Card key={index} className='bg-card px-6!'>
          <CardHeader className='pb-4'>
            <div className='flex items-center justify-between'>
            <div>
                <CardTitle className='text-lg mt-6!'>{cls.subject}</CardTitle>
                <Badge variant='secondary' className='mt-1'>{cls.room}</Badge>
            </div>
            <div className='rounded-lg bg-primary/10 p-2'>
                <BookOpen className='h-7! w-7! text-primary' />
            </div>
          </div>
          </CardHeader>
          <CardContent className='space-y-6! mt-4!'>
            <div className='flex items-center gap-3'>
              <Avatar>
                <AvatarImage src={cls.teacherAvatar}/>
                <AvatarFallback>{cls.teacher.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                    <p className="font-medium text-sm">{cls.teacher}</p>
                    <p className="text-xs text-muted-foreground">Instructor</p>
                  </div>

            </div>
            <div className='flex items-center  text-sm gap-2 text-muted-foreground mt-4'>
              <Clock className='h-4 w-4'/>
              {cls.schedule}
            </div>
            <div className='space-y-2!'>
              <div className='flex items-center justify-between text-sm'>
                <span>Course Progress</span>
                <span className='font-medium mb-4'>{cls.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary mb-6! ">
                <div className='h-2 rounded-full bg-primary ' style={{width:`${cls.progress}%`}}></div>
              </div>
            </div>
          </CardContent>
      </Card>

        ))}
     
      </div>
        
    </div>
  
   </DashboardLayout>
    
  )
}

export default MyClass