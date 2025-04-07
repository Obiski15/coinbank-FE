import Image from "next/image"

import MarketIndicator from "@/components/shared/market-indicator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatCurrency } from "@/lib/utils"

export default function Chart() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-start justify-start gap-2">
            <Image
              src="/icons/dashboard/network.svg"
              alt="network"
              width={20}
              height={20}
            />
            <p className="text-sm font-medium uppercase text-black">
              PORTFOLIO VALUE
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[rgba(21, 25, 30, 1)] text-display-md font-medium tracking-tight">
              {formatCurrency(5630)}
            </h2>
            <MarketIndicator variant="rounded" value={77} direction="up" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Select defaultValue="usd">
            <SelectTrigger>
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="ngn">NGN</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="usd">
            <SelectTrigger>
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="ngn">NGN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="h-[300px] border-2">chart</div>
    </div>
  )
}
