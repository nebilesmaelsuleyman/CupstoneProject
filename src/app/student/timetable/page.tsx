import React from 'react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User } from "lucide-react"

const studentSchedule = {
  Monday: [
    { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
    { time: "09:15 - 10:15", subject: "English", teacher: "Ms. Williams", room: "Room 105" },
    { time: "10:30 - 11:30", subject: "Physics", teacher: "Mr. Johnson", room: "Lab 2" },
    { time: "13:00 - 14:00", subject: "Chemistry", teacher: "Mr. Brown", room: "Lab 3" },
    { time: "14:15 - 15:15", subject: "Biology", teacher: "Mr. Brown", room: "Lab 1" },
  ],
  Tuesday: [
    { time: "08:00 - 09:00", subject: "English", teacher: "Ms. Williams", room: "Room 105" },
    { time: "09:15 - 10:15", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
    { time: "10:30 - 11:30", subject: "Chemistry", teacher: "Mr. Brown", room: "Lab 3" },
    { time: "13:00 - 14:00", subject: "Physics", teacher: "Mr. Johnson", room: "Lab 2" },
    { time: "14:15 - 15:15", subject: "History", teacher: "Ms. Anderson", room: "Room 108" },
  ],
  Wednesday: [
    { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
    { time: "09:15 - 10:15", subject: "Biology", teacher: "Mr. Brown", room: "Lab 1" },
    { time: "10:30 - 11:30", subject: "English", teacher: "Ms. Williams", room: "Room 105" },
    { time: "13:00 - 14:00", subject: "Geography", teacher: "Ms. Anderson", room: "Room 108" },
    { time: "14:15 - 15:15", subject: "Physics", teacher: "Mr. Johnson", room: "Lab 2" },
  ],
  Thursday: [
    { time: "08:00 - 09:00", subject: "Chemistry", teacher: "Mr. Brown", room: "Lab 3" },
    { time: "09:15 - 10:15", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
    { time: "10:30 - 11:30", subject: "History", teacher: "Ms. Anderson", room: "Room 108" },
    { time: "13:00 - 14:00", subject: "English", teacher: "Ms. Williams", room: "Room 105" },
    { time: "14:15 - 15:15", subject: "Biology", teacher: "Mr. Brown", room: "Lab 1" },
  ],
  Friday: [
    { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
    { time: "09:15 - 10:15", subject: "Physics", teacher: "Mr. Johnson", room: "Lab 2" },
    { time: "10:30 - 11:30", subject: "Geography", teacher: "Ms. Anderson", room: "Room 108" },
    { time: "13:00 - 14:00", subject: "Chemistry", teacher: "Mr. Brown", room: "Lab 3" },
  ],
}
const subjectColors: Record<string, string> = {
  Mathematics: "border-l-primary",
  English: "border-l-accent",
  Physics: "border-l-chart-3",
  Chemistry: "border-l-chart-4",
  Biology: "border-l-chart-5",
  History: "border-l-chart-1",
  Geography: "border-l-chart-2",
}

const  StudentTimeTablePage= () => {
    const today= new Date().toLocaleDateString('en-US',{weekday:"long"})

  return (
    <DashboardLayout>
        <div className='space-y-6! px-6! mb-10!'>
            <div>
                <h1 className='text-3xl font-bold mt-6!'>MY TimeTable</h1>
                <p className='text-muted-foreground'> Grade 9-A Weekly Schedule</p>
            </div>

           <Card className='bg-card border-primary'>
            <CardHeader>
                <CardTitle className='flex items-center gap-2! mt-6! px-6!'>
                    <Clock className='h-5! w-5! text-primary'/>
                    Today&apos;s Schedule ({today})

                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='space-y-3! mb-6! px-6!'>
                    {studentSchedule[today as keyof typeof studentSchedule]?.map((cls,index)=>(
                        <div key={index} className={`flex items-center justify-between rounded-lg border-l-4 bg-secondary/30 p-4! ${subjectColors[cls.subject]}`}>
                          <div className='flex items-center justify-between gap-4!'>
                            <div>
                              <p>{cls.time.split("-")[0]}</p>
                              <p>{cls.time.split('-')[1]}</p>
                            </div>
                            <div className='h-10! w-px bg-border  '>
                              <p className='px-4! font-medium'>{cls.subject}</p>
                              <div className='flex items-center gap-1! text-sm text-muted-foreground px-4!'>
                                <User className="h-3 w-3" />
                                  {cls.teacher}
                              </div>

                            </div>
                            
                          </div>
                          <Badge variant='outline' className='flex items-center gap-1'>
                              <MapPin className='h-3! w-3!'/>
                              {cls.room}
                            </Badge>
                            

                        </div>
                    ))}          
                </div>
            </CardContent>
           </Card>
           <div className='grid lg:grid-col-3 md:grid-col-2 xl:grid-cols-5 gap-3!'>
            {Object.entries(studentSchedule).map(([day, classes])=>(
              <Card key={day} className={day === today ?"border-primary": ""}>
                  
                <CardHeader>
                  <CardTitle className='text-base flex items-center justify-between mt-6! px-3!'>
                      {day}
                      {day === today &&( <Badge variant='default' className='text-xs w-15!'>Today</Badge>)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2! px-3!'>
                    {classes.map((cls, index)=>(
                      <div key={index} className={`rounded border-l-3 bg-secondary/20 p-2!  ${subjectColors[cls.subject]}`}>
                        <p className='font-medium truncate'>{cls.subject}</p>
                        <p className='text-muted-foreground'>{cls.time.split("-")[0]}</p>
                      </div>
                    ))}

                  </div>
                </CardContent>
              </Card>
            ))}

           </div>

        </div>
    </DashboardLayout>
  )
}

export default StudentTimeTablePage