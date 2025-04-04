import Image from "next/image"
import { ChevronDown } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import ConnectWallet from "../wallet/connect-wallet"

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-neutral-200 bg-white px-8 py-5">
      <h3 className="text-2xl font-medium tracking-[0.015rem] text-neutral-900">
        Dashboard
      </h3>

      <div className="flex items-center justify-between gap-6">
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
          <ConnectWallet />
        </div>
        <Image
          src="/icons/dashboard/bell.svg"
          alt="bell"
          width={24}
          height={24}
        />

        <div className="flex items-center justify-between gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary-300 text-sm font-medium text-white">
            <p>AB</p>
          </div>
          <ChevronDown className="size-4 text-neutral-400" />
        </div>
      </div>
    </header>
  )
}

export default Header
