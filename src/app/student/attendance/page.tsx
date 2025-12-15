'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import StatCard from '@/components/layout/StatCard'
const attendanceStats = {
  totalDays: 120,
  present: 113,
  absent: 4,
  late: 3,
  rate: 94.2,
}


const monthlyAttendance = [
  { month: "September", present: 20, absent: 1, late: 1, total: 22 },
  { month: "October", present: 21, absent: 1, late: 0, total: 22 },
  { month: "November", present: 19, absent: 2, late: 1, total: 22 },
  { month: "December", present: 8, absent: 0, late: 1, total: 9 },
]

const recentAttendance = [
  { date: "Dec 3, 2024", day: "Tuesday", status: "present" },
  { date: "Dec 2, 2024", day: "Monday", status: "present" },
  { date: "Nov 29, 2024", day: "Friday", status: "late" },
  { date: "Nov 28, 2024", day: "Thursday", status: "present" },
  { date: "Nov 27, 2024", day: "Wednesday", status: "present" },
  { date: "Nov 26, 2024", day: "Tuesday", status: "absent" },
  { date: "Nov 25, 2024", day: "Monday", status: "present" },
]



const Attendance = () => {
  return (
    <DashboardLayout>
        <div className='space-y-6! px-6! mb-6!'>
            <div>
                 <h1 className='font-bold text-3xl mt-6!'> My Attendance</h1>
                <p className='text-muted-foreground'>View your attendance record and statistics</p>
            </div>
            {/* cards */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3 px-6">
  <StatCard
    title="School Days"
    value={attendanceStats.totalDays}
    icon={Calendar}
    iconBgClass="bg-primary/10"
    iconColorClass="text-primary"
  />

  <StatCard
    title="Present"
    value={attendanceStats.present}
    icon={CheckCircle}
    iconBgClass="bg-accent/10"
    iconColorClass="text-accent"
  />

  <StatCard
    title="Absent"
    value={attendanceStats.absent}
    icon={XCircle}
    iconBgClass="bg-destructive/10"
    iconColorClass="text-destructive"
  />

  <StatCard
    title="Late"
    value={attendanceStats.late}
    icon={Clock}
    iconBgClass="bg-chart-3/10"
    iconColorClass="text-chart-3"
  />

  <StatCard
    title="Attendance Rate"
    value={`${attendanceStats.rate}%`}
    icon={TrendingUp}
    iconBgClass="bg-primary/10"
    iconColorClass="text-primary"
  />
</div>
            <div className='grid gap-6 lg:grid-cols-2'>
              {/* monthly breakdown */}
              <Card className='bg-card'>
                <CardHeader>
                <CardTitle className='mt-3.5! px-6!'>Monthly Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  {monthlyAttendance.map((month)=>(
                    <div key={month.month} className='space-y-5! px-6!'>
                      <div className='flex items-center justify-between'>
                        <span className='font-medium'>{month.month}</span>
                        <Badge className='h-5 w-10 rounded-full'>{Math.round((month.present / month.total)*100)}%</Badge>
                      </div>
                      <div className='h-2 rounded-full  overflow-hidden flex'>
                          <div className='h-full bg-green-400' style={{width:`${(month.present / month.total)*100}%`}}></div>
                          <div className='h-fuull bg-chart-3' style={{width:`${(month.late / month.total)*100}%`}}></div>
                           <div
                        className="h-full bg-destructive"
                        style={{ width: `${(month.absent / month.total) * 100}%` }}
                      />
                      </div>
                      <div className='flex justify-between text-xs text-muted-foreground mb-2!'>
                        <span>Present:{month.present}</span>
                        <span>Late:{month.late}</span>
                        <span>Absent:{month.absent}</span>

                      </div>

                    </div>
                  ))}

                </CardContent>
                <div>

                </div>

              </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className='mt-4! px-6!'>Recent Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4! px-3!">
                {recentAttendance.map((record, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3!">
                    <div>
                      <p className="font-medium">{record.date}</p>
                      <p className="text-sm text-muted-foreground">{record.day}</p>
                    </div>
                    <Badge
                      variant={
                        record.status === "present" ? "secondary" : record.status === "late" ? "destructive" : "destructive"
                      }
                      className={record.status === "present" ? "bg-accent" : ""}
                    >
                      {record.status === "present" && <CheckCircle className="mr-1 h-3 w-3 " />}
                      {record.status === "absent" && <XCircle className="mr-1 h-3 w-3" />}
                      {record.status === "late" && <Clock className="mr-1 h-3 w-3" />}
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </Badge>
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

export default Attendance