import React from 'react'
import DashboardLayout  from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, TrendingUp, Award, Bell } from "lucide-react"
import { performanceData } from "@/lib/mock-data"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

const studentSchedule = [
  { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 101" },
  { time: "09:15 - 10:15", subject: "English", teacher: "Ms. Williams", room: "Room 105" },
  { time: "10:30 - 11:30", subject: "Physics", teacher: "Mr. Johnson", room: "Lab 2" },
  { time: "13:00 - 14:00", subject: "Chemistry", teacher: "Mr. Brown", room: "Lab 3" },
  { time: "14:15 - 15:15", subject: "Biology", teacher: "Mr. Brown", room: "Lab 1" },
]

const recentGrades = [
  { subject: "Mathematics", exam: "Midterm", grade: "A", marks: 92 },
  { subject: "English", exam: "Quiz 1", grade: "A-", marks: 18 },
  { subject: "Physics", exam: "Assignment", grade: "B+", marks: 45 },
]

const announcements = [
  { title: "Midterm Results Posted", date: "Dec 2", type: "academic" },
  { title: "Winter Break Schedule", date: "Dec 1", type: "event" },
  { title: "Science Fair Registration", date: "Nov 30", type: "event" },
]

const StudentDashboard = () => {
  return (
   <DashboardLayout>
    
    <div className='space-y-6! px-6!'>
      <div>
          <h1 className="text-3xl font-bold">Welcome, Emma!</h1>
          <p className="text-muted-foreground">Grade 9-A • Roll Number: STU001</p>
        </div>
        {/* Quick stats */}
        <div className='grid md:grid-cols-4 gap-3!'>
          <Card className='bg-card'>
            <CardContent className='p-4!'>
              <div className='flex items-center gap-3!'>
                <div className='rounded-lg bg-primary/10 p-2!'>
                    <TrendingUp className="h-5! w-5! text-primary" />
                </div>
                  <div>
                  <p className="text-2xl font-bold">3.8</p>
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-card'>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-accent/10 p-2!">
                  <Calendar className="h-5! w-5! text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                </div>
              </div>
            </CardContent>

          </Card>
          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-chart-3/10 p-2">
                  <BookOpen className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Subjects</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-chart-5/10 p-2">
                  <Award className="h-5 w-5 text-chart-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Rank in Class</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
        <div className='grid gap-6 lg:grid-cols-3'>
          {/* todays schedule */}
          <Card className='bg-card lg:col-span-2'>
              <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className='py-4! px-6!'>Today&apos;s Schedule</CardTitle>
              <Badge variant="outline" className='p-2!'>
                <Clock className="mr-1 h-4! w-4!" />
                {new Date().toLocaleDateString("en-US", { weekday: "long" })}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3!">
                {studentSchedule.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3!">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[60px]">
                        <p className="text-xs font-medium">{cls.time.split(" - ")[0]}</p>
                        <p className="text-xs text-muted-foreground">{cls.time.split(" - ")[1]}</p>
                      </div>
                      <div className="h-8! w-px bg-border" />
                      <div>
                        <p className="font-medium">{cls.subject}</p>
                        <p className="text-sm text-muted-foreground">{cls.teacher}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{cls.room}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Announcements */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5! w-5! py-4! " />
                    Announcement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4!">
                {announcements.map((item, index) => (
                  <div key={index} className="space-y-2! px-5!">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{item.title}</p>
                      <Badge variant="outline" className="text-xs h-6! w-15! px-5!">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
        <div className='grid gap-6! lg:grid-cols-2'>
          {/* Recent grades */}
           <Card className="bg-card mb-6!">
            <CardHeader>
              <CardTitle className='px-6! py-6!'>Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4! px-4! mb-5!">
                {recentGrades.map((item, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3!">
                    <div>
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">{item.exam}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          item.grade.startsWith("A")
                            ? "bg-green-500 w-6! h-5!"
                            : item.grade.startsWith("B")
                              ? "bg-primary  w-6! h-5!"
                              : "bg-chart-3"
                        }
                      >
                        {item.grade}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{item.marks} marks</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>


        </div>


    </div>
   </DashboardLayout>
  )
}

export default StudentDashboard