import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react"

const Attendance = () => {
  return (
    <DashboardLayout>
        <div className='space-y-6'>
            <div>
                 <h1 className='font-bold text-3xl'> My Attendance</h1>
                <p className='text-sm'>View your attendance record and statistics</p>
            </div>
            {/* cards */}
            <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-3 px-6!'>
                <Card className='bg-card'>
                    <CardContent className='px-4! py-6!'>
                        <div className='flex items-center gap-3'>
                                <div className='rounded-lg bg-primary/10 p-2'>
                                <Calendar className=' h-7! w-7! text-primary'/>
                                </div>
                            
                                <p className='text-3xl font-bold'>120</p>
                                <p className='text-muted-foreground'>school days</p>
                                 
                        </div>
                    </CardContent>

                </Card>
            </div>
       
        </div>
    </DashboardLayout>
  )
}

export default Attendance