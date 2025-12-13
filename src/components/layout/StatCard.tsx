"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import React from 'react'

type StatCardProps = {
  title: string
  value: string | number
  icon: LucideIcon
  iconBgClass?: string
  iconColorClass?: string
  loading?: boolean
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBgClass = "bg-primary/10",
  iconColorClass = "text-primary",
  loading = false,
}: StatCardProps) => {
  return (
    <Card className='bg-card'>
        <CardContent className='p-6! px-6!'>
          <div className='flex items-center gap-2'>

         
            <div className={cn('rounded-lg p-2!',iconBgClass)}>
                <Icon className={cn("h-6! w-6!",iconColorClass)}></Icon>
            </div>
        <div>
            <p className='text-2xl font-bold'>
                {loading ? "-":value}
            </p>
            <p className='text-sm text-muted-foreground'>{title}</p>
        </div>
        </div>
        </CardContent>

    </Card>
  )
}

export default StatCard