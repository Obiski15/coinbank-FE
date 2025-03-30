import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface Properties {
  children: ReactNode
  className?: string
}

export default function Feature({ children, className }: Properties) {
  return (
    <div className={cn(`px-40 pt-[100px] space-y-16`, className)}>
      {children}
    </div>
  )
}
