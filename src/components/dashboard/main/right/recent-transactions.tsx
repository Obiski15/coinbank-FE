import Image from "next/image"
import { format } from "date-fns"

import { formatCurrency } from "@/lib/utils"

export default function RecentTransactions() {
  return (
    <div className="border-t border-neutral-200 pb-8 pt-6">
      <div className="flex items-center justify-between px-8">
        <p className="text-lg font-medium text-neutral-900">
          Recent Transactions
        </p>
        <p className="cursor-pointer text-xs font-normal text-primary hover:underline">
          See all
        </p>
      </div>
      <div className="px-8">
        <div className="flex items-center justify-start gap-3 border-b border-neutral-200 py-4">
          <Image width={40} height={40} src="/icons/crypto/BTC.svg" alt="btc" />
          <div className="space-y-[2px]">
            <p className="text-sm font-medium text-neutral-800">
              Received Bitcoin
            </p>
            <p className="text-xs font-normal text-neutral-500">
              <span className="text-primary">+0.00045734 BTC </span>on{" "}
              {format(new Date(), "PP")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 border-b border-neutral-200 py-4">
          <Image width={40} height={40} src="/icons/crypto/ETH.svg" alt="eth" />
          <div className="space-y-[2px]">
            <p className="text-sm font-medium text-neutral-800">
              Received Ethereum
            </p>
            <p className="text-xs font-normal text-neutral-500">
              <span className="text-primary">+0.00011734 ETH </span>on{" "}
              {format(new Date(), "PP")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 border-b border-neutral-200 py-4">
          <Image
            width={40}
            height={40}
            src="/icons/support/wallet.svg"
            alt="wallet"
          />
          <div className="space-y-[2px]">
            <p className="text-sm font-medium text-neutral-800">
              Deposited Funds
            </p>
            <p className="text-xs font-normal text-neutral-500">
              <span className="text-primary">{formatCurrency(200)}</span>on{" "}
              {format(new Date(), "PP")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
