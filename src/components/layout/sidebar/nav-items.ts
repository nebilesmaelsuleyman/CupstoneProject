import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  Settings,
  Building2,
  CreditCard,
  BarChart3,
  UserCog,
  Clock,
  Bell,
} from "lucide-react"

import type { UserRole } from "@/lib/type"

export interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const navItems: Record<UserRole, NavItem[]> = {
  super_admin: [
    { title: "Dashboard", href: "/super-admin", icon: LayoutDashboard },
    { title: "Schools", href: "/super-admin/schools", icon: Building2 },
    { title: "Subscriptions", href: "/super-admin/subscriptions", icon: CreditCard },
    { title: "Analytics", href: "/super-admin/analytics", icon: BarChart3 },
    { title: "Settings", href: "/super-admin/settings", icon: Settings },
  ],
  admin: [
    { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { title: "Teachers", href: "/admin/teachers", icon: UserCog },
    { title: "Students", href: "/admin/students", icon: GraduationCap },
    { title: "Classes", href: "/admin/classes", icon: BookOpen },
    { title: "Subjects", href: "/admin/subjects", icon: FileText },
    { title: "Attendance", href: "/admin/attendance", icon: ClipboardList },
    { title: "Exams", href: "/admin/exams", icon: Calendar },
    { title: "Timetable", href: "/admin/timetable", icon: Clock },
    { title: "Reports", href: "/admin/reports", icon: BarChart3 },
    { title: "Settings", href: "/admin/settings", icon: Settings },
  ],
  teacher: [
    { title: "Dashboard", href: "/teacher", icon: LayoutDashboard },
    { title: "My Classes", href: "/teacher/classes", icon: BookOpen },
    { title: "Students", href: "/teacher/students", icon: GraduationCap },
    { title: "Attendance", href: "/teacher/attendance", icon: ClipboardList },
    { title: "Grades", href: "/teacher/grades", icon: FileText },
    { title: "Timetable", href: "/teacher/timetable", icon: Clock },
    { title: "Settings", href: "/teacher/settings", icon: Settings },
  ],
  student: [
    { title: "Dashboard", href: "/student", icon: LayoutDashboard },
    { title: "My Classes", href: "/student/classes", icon: BookOpen },
    { title: "Attendance", href: "/student/attendance", icon: ClipboardList },
    { title: "Grades", href: "/student/grades", icon: FileText },
    { title: "Timetable", href: "/student/timetable", icon: Clock },
    { title: "Announcements", href: "/student/announcements", icon: Bell },
  ],
  parent: [
    { title: "Dashboard", href: "/parent", icon: LayoutDashboard },
    { title: "My Children", href: "/parent/children", icon: Users },
    { title: "Performance", href: "/parent/performance", icon: BarChart3 },
    { title: "Attendance", href: "/parent/attendance", icon: ClipboardList },
    { title: "Fees", href: "/parent/fees", icon: CreditCard },
    { title: "Settings", href: "/parent/settings", icon: Settings },
  ],
}
