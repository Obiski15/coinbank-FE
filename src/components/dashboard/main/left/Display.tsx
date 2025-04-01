import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"

export default function Display() {
  return (
    <div className="flex items-center justify-between border-y border-neutral-200 py-6">
      <div className="flex flex-1 items-center justify-between border-r border-neutral-200 pr-6">
        <div className="space-y-[2px] font-medium">
          <div className="flex items-center justify-between gap-2">
            <Image
              width={20}
              height={20}
              alt="network"
              src="/icons/dashboard/network.svg"
            />
            <h3 className="text-sm uppercase text-neutral-400">
              portfolio value
            </h3>
          </div>
          <p className="text-display-md tracking-tight text-black">
            {formatCurrency(5260)}
          </p>
        </div>
        <Badge className="rounded-[100px] border border-[#DAFBEF] bg-[#ECFDF7] px-1.5 py-1 text-success shadow-none hover:bg-success hover:text-white">
          <Image
            width={16}
            height={16}
            alt="success"
            src="/icons/success.svg"
            className="inline-block"
          />{" "}
          <span>1.37%</span>
        </Badge>
      </div>
      <div className="flex flex-1 items-center justify-between px-6">
        <div className="space-y-[2px] font-medium">
          <div className="flex items-center justify-between gap-2">
            <Image
              width={20}
              height={20}
              alt="network"
              src="/icons/dashboard/bar.svg"
            />
            <h3 className="text-sm uppercase text-neutral-400">volume (24h)</h3>
          </div>
          <p className="text-display-md tracking-tight text-black">
            {formatCurrency(7472)}
          </p>
        </div>
        <Badge className="rounded-[100px] border border-[#DAFBEF] bg-[#ECFDF7] px-1.5 py-1 text-success shadow-none hover:bg-success hover:text-white">
          <Image
            width={16}
            height={16}
            alt="success"
            src="/icons/success.svg"
            className="inline-block"
          />{" "}
          <span>1.37%</span>
        </Badge>
      </div>
    </div>
  )
}
