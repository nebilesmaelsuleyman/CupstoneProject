'use client'

import React from 'react'
import DashboardLayout  from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, TrendingUp, Award, Bell } from "lucide-react"
import { performanceData } from "@/lib/mock-data"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import StatCard from '@/components/layout/StatCard'
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

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
  const {getToken}= useAuth();
  const [user, setUser]=useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchuser= async ()=>{
      try {
      const token = await getToken();
      console.log('token', token);

      if (!token) throw new Error('No token');

      const res = await fetch('http://localhost:3000/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('response', res);

      if (!res.ok) throw new Error('Request failed');

      const data = await res.json();
      console.log('data', data);

      setUser(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // 🔥 THIS WAS MISSING
    }
    }
        fetchuser()
  },[getToken])
  
  if(loading){
    return <div> Loading ...</div>
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
   <DashboardLayout>
    
    <div className='space-y-6! px-6!'>
      <div>
          <h1 className="text-3xl font-bold">Welcome, {user.firstName}</h1>
          <p className="text-muted-foreground">Grade 9-A • Roll Number: STU001</p>
        </div>
        {/* Quick stats */}
        <div className='grid md:grid-cols-4 gap-3!'>
          <StatCard
           title="Current GPA"
            value="3.8"
            icon={TrendingUp}/>


            <StatCard
              title="Subjects"
              value={5}
              icon={BookOpen}
              iconBgClass="bg-chart-3/10"
              iconColorClass="text-chart-3"
            />
            <StatCard
              title="Attendance"
              value={94}
              icon={Calendar}
              iconBgClass="bg-chart-3/10"
              iconColorClass="text-chart-3"
            />

            <StatCard
              title="Rank in Class"
              value={12}
              icon={Award}
              iconBgClass="bg-chart-5/10"
              iconColorClass="text-chart-5"
            />
            

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
        <div className='grid gap-6! lg:grid-cols-2 py-6!'>
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
                {/* Performance Chart */}
                <Card className='bg-card'>
                  <CardHeader>
                    <CardTitle className='px-6! py-6!'>
                      Subject Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='h-[250px]'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <RadarChart data={performanceData}>
                         <PolarGrid stroke='hsl(var(--border))'/>
                         <PolarAngleAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                         <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
                          <Radar name="Score" dataKey="average" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary)/0.3)" />
                        </RadarChart>
                      </ResponsiveContainer>

                    </div>
                  </CardContent>

                </Card>
        </div>
    </div>
   </DashboardLayout>
  )
}

export default StudentDashboard