"use client"

import { usePathname } from "next/navigation"

export default function Header() {
  const path = usePathname()

  return (
    <div className="border-b border-neutral-200 px-8 py-6">
      <h4 className="text-2xl font-medium capitalize tracking-[0.015rem] text-neutral-900">
        {path.split("/").at(-1)?.replace(/-/g, " ")}
      </h4>
    </div>
  )
}
