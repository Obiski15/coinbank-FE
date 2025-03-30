import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface Properties {
  children: ReactNode
  className?: string
}

export default function Feature({ children, className }: Properties) {
  return (
    <div className={cn(`space-y-16 px-40 pt-[100px]`, className)}>
      {children}
    </div>
  )
}
