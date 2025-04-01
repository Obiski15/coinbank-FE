import Image from "next/image"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Watchlist from "../../shared/Watchlist"

export default function Stats() {
  return (
    <div className="grid grid-cols-7 items-start justify-start gap-6">
      <div className="col-span-4 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-neutral-900">
            Portfolio stats
          </p>

          <div className="flex items-center justify-between gap-4">
            <Select defaultValue="bitcoin">
              <SelectTrigger className="space-x-2 rounded-md border border-neutral-300">
                <Image
                  className="inline-block"
                  src="/icons/crypto/BTC.svg"
                  alt="btc"
                  width={16}
                  height={16}
                />
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bitcoin">Bitcoin</SelectItem>
                <SelectItem value="ethereum">Ethereum</SelectItem>
                <SelectItem value="dogecoin">Dogecoin</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="weekly">
              <SelectTrigger className="rounded-md border border-neutral-300">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-2">chart</div>
      </div>

      <Watchlist />
    </div>
  )
}
