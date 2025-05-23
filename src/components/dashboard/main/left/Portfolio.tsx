import Image from "next/image"

import MarketIndicator from "@/components/shared/market-indicator"
import { Progress } from "@/components/ui/progress"

import { formatCurrency } from "@/lib/utils"

function Portfolio() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium text-neutral-900">My Portfolio</p>
        <p className="cursor-pointer text-xs font-normal text-primary hover:underline">
          See all
        </p>
      </div>

      <div className="grid grid-cols-12 items-center justify-between border-b border-neutral-200 py-4">
        <div className="col-span-3 flex items-center justify-start gap-3">
          <Image width={40} height={40} alt="eth" src="/icons/crypto/ETH.svg" />
          <div className="space-y-[2px]">
            <p className="space-x-2 font-medium">
              <span className="text-sm text-neutral-800">Ethereum</span>{" "}
              <span className="text-xs tracking-[0.00375%] text-neutral-400">
                ETH
              </span>
            </p>
            <div className="flex items-center justify-between gap-2">
              <p>46%</p>
              <Progress value={46} />
            </div>
          </div>
        </div>

        <div className="col-span-6 space-y-3">
          <div className="mx-auto w-fit">
            <p className="text-xs tracking-[0.00375%] text-neutral-400">
              Change
            </p>
            <MarketIndicator variant="plain" value={77} direction="up" />
          </div>
        </div>

        <div className="col-span-3 space-y-[2px] text-right">
          <p className="text-sm font-medium text-neutral-800">0.124567 ETH</p>
          <p className="text-xs tracking-[0.00375%] text-neutral-400">
            {formatCurrency(1060.33)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 items-center justify-between border-b border-neutral-200 py-4">
        <div className="col-span-3 flex items-center justify-start gap-3">
          <Image width={40} height={40} alt="xrp" src="/icons/crypto/XRP.svg" />
          <div className="space-y-[2px]">
            <p className="space-x-2 font-medium">
              <span className="text-sm text-neutral-800">XRP</span>{" "}
              <span className="text-xs tracking-[0.00375%] text-neutral-400">
                XRP
              </span>
            </p>
            <div className="flex items-center justify-between gap-2">
              <p>24%</p>
              <Progress value={24} className="bg-black/20 [&>div]:bg-black" />
            </div>
          </div>
        </div>

        <div className="col-span-6 space-y-3">
          <div className="mx-auto w-fit">
            <p className="text-xs tracking-[0.00375%] text-neutral-400">
              Change
            </p>
            <MarketIndicator variant="plain" value={77} direction="up" />
          </div>
        </div>

        <div className="col-span-3 space-y-[2px] text-right">
          <p className="text-sm font-medium text-neutral-800">0.124567 XRP</p>
          <p className="text-xs tracking-[0.00375%] text-neutral-400">
            {formatCurrency(1060)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
