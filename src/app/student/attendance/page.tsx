import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
            <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-3 px-6!'>
                <Card className='bg-card'>
                    <CardContent className='px-2! py-8!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-3!  '>
                                <Calendar className=' h-5! w-5! text-primary text-center'/>
                                </div>
                                <div className=''>
                                   <p className='text-2xl font-bold'>{attendanceStats.totalDays}</p>
                                <p className='text-muted-foreground text-sm'>school days</p>
                                </div>     
                        </div>
                    </CardContent>
                </Card>
                <Card className='bg-card'>
                    <CardContent className='px-2! py-8!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-3!  '>
                                <CheckCircle className=' h-5! w-5! text-accent text-center'/>
                                </div>
                                <div className=''>
                                   <p className='text-2xl font-bold'>{attendanceStats.present}</p>
                                <p className='text-muted-foreground text-sm'>Present</p>
                                </div>     
                        </div>
                    </CardContent>
                </Card>
                <Card className='bg-card'>
                    <CardContent className='px-2! py-8!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-3!  '>
                                <XCircle className=' h-5! w-5! text-destructive text-center'/>
                                </div>
                                <div className=''>
                                   <p className='text-2xl font-bold'>{attendanceStats.absent}</p>
                                <p className='text-muted-foreground text-sm'> absent</p>
                                </div>     
                        </div>
                    </CardContent>
                </Card>
                <Card className='bg-card'>
                    <CardContent className='px-2! py-8!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-3!  '>
                                <Clock className=' h-5! w-5! text-chart-3 text-center'/>
                                </div>
                                <div className=''>
                                   <p className='text-2xl font-bold'>{attendanceStats.late}</p>
                                <p className='text-muted-foreground text-sm'>late</p>
                                </div>     
                        </div>
                    </CardContent>
                </Card>
                <Card className='bg-card'>
                    <CardContent className='px-2! py-8!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-3!  '>
                                <TrendingUp className=' h-5! w-5! text-primary text-center'/>
                                </div>
                                <div className=''>
                                   <p className='text-2xl font-bold'>{attendanceStats.rate}</p>
                                <p className='text-muted-foreground text-sm'>Attendance RAte</p>
                                </div>     
                        </div>
                    </CardContent>
                </Card>
                
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