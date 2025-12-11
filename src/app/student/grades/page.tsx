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
          <h1 className="text-3xl font-bold mt-6!">My Grades</h1>
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
       <Tabs defaultValue="Mathematics" className="space-y-4! px-4!">
  <TabsList className="flex-wrap gap-3! bg-gray-100 p-2! rounded-xl">
    {Object.keys(gradesBySubject).map((subject) => (
      <TabsTrigger
        key={subject}
        value={subject}
        className="
          data-[state=active]:bg-white
          data-[state=active]:text-black
          data-[state=active]:border
          data-[state=active]:border-gray-300
          data-[state=active]:shadow-sm
          rounded-xl
          px-4!
          py-2!
          transition
        "
      >
        {subject}
      </TabsTrigger>
    ))}
  </TabsList>



          {Object.entries(gradesBySubject).map(([subject, grades]) => (
  <TabsContent key={subject} value={subject}>
    <Card className="bg-card border rounded-xl shadow-sm px-6! mb-6!">
      <CardHeader className="px-6! pt-6!">
        <CardTitle className="text-xl font-semibold">{subject} Grades</CardTitle>
      </CardHeader>

      <CardContent className="px-6! pb-6!">
        <div className="overflow-hidden rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100/60">
                <TableHead className="py-4! ">Assessment</TableHead>
                <TableHead className="text-center py-4!">Max Marks</TableHead>
                <TableHead className="text-center py-4!">Obtained</TableHead>
                <TableHead className="text-center py-4!">Percentage</TableHead>
                <TableHead className="text-center py-4!">Grade</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="px-4!">
              {grades.map((grade, index) => {
                const percent = Math.round((grade.obtained / grade.maxMarks) * 100);

                return (
                  <TableRow
                    key={index}
                    className="transition hover:bg-gray-50!"
                  >
                    <TableCell className="font-medium py-4!">
                      {grade.exam}
                    </TableCell>

                    <TableCell className="text-center">{grade.maxMarks}</TableCell>
                    <TableCell className="text-center">{grade.obtained}</TableCell>

                    <TableCell className="text-center font-medium">
                      {percent}%
                    </TableCell>

                    <TableCell className="text-center">
                      <Badge
                        className={`
                          text-white px-3 py-1! rounded-full
                          ${
                            grade.grade.startsWith("A")
                              ? "bg-green-500"
                              : grade.grade.startsWith("B")
                                ? "bg-blue-500"
                                : "bg-red-500"
                          }
                        `}
                      >
                        {grade.grade}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </TabsContent>
))}

        </Tabs>
      </div>
    </DashboardLayout>
  )
}
