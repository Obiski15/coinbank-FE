import Image from "next/image"

import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"

interface Properties {
  variant: "rounded" | "plain"
  value: number
  direction: "up" | "down"
}

export default function MarketIndicator({
  value,
  variant,
  direction,
}: Properties) {
  return (
    <Badge
      className={cn(
        "text-xs tracking-[0.00375rem] shadow-none",
        direction === "up" && variant === "rounded"
          ? "border-[#DAFBEF] bg-[#ECFDF7] text-success hover:bg-[#ECFDF7]"
          : direction === "down" && variant === "rounded"
            ? "border-[#fed7e0] bg-[#ffebf0] text-error hover:bg-[#ffebf0]"
            : "bg-transparent font-medium text-black hover:bg-transparent",
        variant === "rounded"
          ? "rounded-[100px] border px-1.5 py-1"
          : "flex items-center justify-between gap-1 p-0"
      )}
    >
      <Image
        width={16}
        height={16}
        alt="success"
        src={`/icons/${direction === "up" ? "arrow-success" : "arrow-error"}.svg`}
        className="inline-block"
      />{" "}
      <span>{value / 100}%</span>
    </Badge>
  )
}
