export type UserRole = "super_admin" | "admin" | "teacher" | "student" | "parent"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  schoolId?: string
}

export interface School {
  id: string
  name: string
  address: string
  phone: string
  email: string
  logo?: string
  subscriptionPlan: "basic" | "standard" | "premium"
  subscriptionStatus: "active" | "expired" | "trial"
  subscriptionEndDate: string
  studentCount: number
  teacherCount: number
  createdAt: string
}

export interface Teacher {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  department: string
  subjects: string[]
  classes: string[]
  joinDate: string
  status: "active" | "inactive" | "on_leave"
  avatar?: string
}

export interface Student {
  id: string
  userId: string
  name: string
  email: string
  rollNumber: string
  classId: string
  sectionId: string
  parentId: string
  status: "active" | "graduated" | "transferred" | "dropped"
  admissionDate: string
  avatar?: string
}

export interface Parent {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  studentIds: string[]
  avatar?: string
}

export interface Class {
  id: string
  name: string
  grade: number
  sections: Section[]
  subjects: string[]
  teacherId: string
}

export interface Section {
  id: string
  name: string
  classId: string
  capacity: number
  studentCount: number
}

export interface Subject {
  id: string
  name: string
  code: string
  description?: string
  classIds: string[]
  teacherId?: string
}

export interface Attendance {
  id: string
  studentId: string
  date: string
  status: "present" | "absent" | "late" | "excused"
  remarks?: string
}

export interface Exam {
  id: string
  name: string
  type: "midterm" | "final" | "quiz" | "assignment"
  subjectId: string
  classId: string
  date: string
  maxMarks: number
}

export interface Grade {
  id: string
  studentId: string
  examId: string
  subjectId: string
  marks: number
  grade: string
  remarks?: string
}

export interface Subscription {
  id: string
  schoolId: string
  plan: "basic" | "standard" | "premium"
  status: "active" | "expired" | "trial"
  startDate: string
  endDate: string
  amount: number
}

export interface TimetableEntry {
  id: string
  classId: string
  sectionId: string
  subjectId: string
  teacherId: string
  dayOfWeek: number
  startTime: string
  endTime: string
}
