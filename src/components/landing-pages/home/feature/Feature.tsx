import { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

interface Properties {
  children: ReactNode
  className?: string
}

export default function Feature({ children, className }: Properties) {
  return (
    <AnimatePresence>
      <div
        className={cn(
          `space-y-16 px-5 pt-[100px] md:px-10 lg:px-40`,
          className
        )}
      >
        {children}
      </div>
    </AnimatePresence>
  )
}
