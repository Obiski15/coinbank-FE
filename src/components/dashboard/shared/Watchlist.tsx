import Image from "next/image"

import MarketIndicator from "@/components/shared/market-indicator"

import { formatCurrency } from "@/lib/utils"

const watchlist: {
  name: string
  abbr: string
  icon: string
  price: number
  direction: "up" | "down"
  percentage: number
}[] = [
  {
    name: "ethereum",
    abbr: "ETH",
    icon: "/icons/crypto",
    price: 3500,
    direction: "up",
    percentage: 12,
  },
  {
    name: "origin protocol",
    abbr: "OGN",
    icon: "/icons/crypto",
    price: 3000,
    direction: "down",
    percentage: 18,
  },
  {
    name: "bitcoin",
    abbr: "BTC",
    icon: "/icons/crypto",
    price: 32500,
    direction: "down",
    percentage: 50,
  },
  {
    name: "dogecoin",
    abbr: "DOGE",
    icon: "/icons/crypto",
    price: 900,
    direction: "up",
    percentage: 5,
  },
  {
    name: "XRP",
    abbr: "XRP",
    icon: "/icons/crypto",
    price: 700,
    direction: "down",
    percentage: 2,
  },
  {
    name: "digibyte",
    abbr: "DGB",
    icon: "/icons/crypto",
    price: 1500,
    direction: "up",
    percentage: 25,
  },
]

function Watchlist() {
  return (
    <div className="col-span-3 space-y-2 rounded-lg border border-neutral-200 p-3 shadow-[0px_0px_30px_0px_#A191F31A]">
      <div className="space-y-4 px-3 py-6">
        <p className="text-md font-medium tracking-[0.005rem] text-neutral-900">
          My Watchlist
        </p>
      </div>

      <div className="max-h-[272px] overflow-y-scroll">
        {watchlist.map(
          ({ direction, abbr, name, percentage, price, icon }, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 border-b border-neutral-200 py-4"
            >
              <Image
                src={`${icon}/${abbr.toUpperCase()}.svg`}
                alt={abbr}
                width={32}
                height={32}
              />
              <div className="flex-1">
                <p className="space-x-2 text-ellipsis whitespace-nowrap font-medium">
                  <span className="text-sm capitalize text-neutral-800">
                    {name}
                  </span>{" "}
                  <span className="text-xs uppercase tracking-[0.00375%] text-neutral-400">
                    {abbr}
                  </span>
                </p>
                <div className="flex items-center justify-start gap-2 text-ellipsis whitespace-nowrap">
                  <p className="text-xs font-medium tracking-[0.00375rem] text-neutral-400">
                    {formatCurrency(price)}
                  </p>
                  <MarketIndicator
                    variant="plain"
                    value={percentage}
                    direction={direction}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Watchlist
