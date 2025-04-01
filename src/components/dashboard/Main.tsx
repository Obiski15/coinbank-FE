import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export default function Main({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "no_scrollbar h-[calc(100vh-80.67px)] overflow-y-scroll",
        className
      )}
    >
      {children}
    </div>
  )
}
