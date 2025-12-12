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
    
    <div className='space-y-6!'>
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

    </div>
   </DashboardLayout>
  )
}

export default StudentDashboard