"use client"

import DashboardLayout  from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Award } from "lucide-react"

const gradesBySubject = {
  Mathematics: [
    { exam: "Midterm", maxMarks: 100, obtained: 92, grade: "A" },
    { exam: "Quiz 1", maxMarks: 20, obtained: 18, grade: "A" },
    { exam: "Assignment 1", maxMarks: 50, obtained: 45, grade: "A-" },
  ],
  English: [
    { exam: "Midterm", maxMarks: 100, obtained: 85, grade: "A-" },
    { exam: "Quiz 1", maxMarks: 20, obtained: 16, grade: "B+" },
    { exam: "Essay", maxMarks: 50, obtained: 42, grade: "A-" },
  ],
  Physics: [
    { exam: "Midterm", maxMarks: 100, obtained: 78, grade: "B+" },
    { exam: "Lab 1", maxMarks: 30, obtained: 26, grade: "A-" },
    { exam: "Assignment", maxMarks: 50, obtained: 40, grade: "B+" },
  ],
  Chemistry: [
    { exam: "Midterm", maxMarks: 100, obtained: 82, grade: "A-" },
    { exam: "Lab 1", maxMarks: 30, obtained: 28, grade: "A" },
  ],
  Biology: [
    { exam: "Midterm", maxMarks: 100, obtained: 88, grade: "A-" },
    { exam: "Lab 1", maxMarks: 30, obtained: 27, grade: "A" },
  ],
}

const overallStats = {
  gpa: 3.8,
  totalCredits: 15,
  rank: 12,
  totalStudents: 35,
}

export default function StudentGradesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6! px-6!">
        <div>
          <h1 className="text-3xl font-bold">My Grades</h1>
          <p className="text-muted-foreground">View your academic performance and grades</p>
        </div>

        {/* Overall Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card">
            <CardContent className="p-4!">
              <div className="flex items-center gap-3!">
                <div className="rounded-lg bg-primary/10 p-2!">
                  <TrendingUp className="h-5! w-5! text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{overallStats.gpa}</p>
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4!">
              <div className="flex items-center gap-3!">
                <div className="rounded-lg bg-accent/10 p-2!">
                  <Award className="h-5! w-5! text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">#{overallStats.rank}</p>
                  <p className="text-sm text-muted-foreground">Class Rank</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4!">
              <p className="text-2xl font-bold">{overallStats.totalCredits}</p>
              <p className="text-sm text-muted-foreground">Total Credits</p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4!">
              <p className="text-2xl font-bold">{overallStats.totalStudents}</p>
              <p className="text-sm text-muted-foreground">Students in Class</p>
            </CardContent>
          </Card>
        </div>

        {/* Grades by Subject */}
        <Tabs defaultValue="Mathematics" className="space-y-4">
          <TabsList className="flex-wrap">
            {Object.keys(gradesBySubject).map((subject) => (
              <TabsTrigger key={subject} value={subject}>
                {subject}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(gradesBySubject).map(([subject, grades]) => (
            <TabsContent key={subject} value={subject}>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>{subject} Grades</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-secondary/50!">
                        <TableHead>Assessment</TableHead>
                        <TableHead className="text-center">Max Marks</TableHead>
                        <TableHead className="text-center">Obtained</TableHead>
                        <TableHead className="text-center">Percentage</TableHead>
                        <TableHead className="text-center">Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {grades.map((grade, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{grade.exam}</TableCell>
                          <TableCell className="text-center">{grade.maxMarks}</TableCell>
                          <TableCell className="text-center">{grade.obtained}</TableCell>
                          <TableCell className="text-center">
                            {Math.round((grade.obtained / grade.maxMarks) * 100)}%
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              className={
                                grade.grade.startsWith("A")
                                  ? "bg-accent"
                                  : grade.grade.startsWith("B")
                                    ? "bg-primary"
                                    : "bg-chart-3"
                              }
                            >
                              {grade.grade}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
