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
    <h1 className="text-3xl font-bold">Welcome, Emma!</h1>
   </DashboardLayout>
  )
}

export default StudentDashboard