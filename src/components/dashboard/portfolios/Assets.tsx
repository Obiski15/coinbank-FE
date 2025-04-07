import Image from "next/image"

import MarketIndicator from "@/components/shared/market-indicator"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"

export default function Assets() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-[#000000]">Your Assets</h4>

      <Table>
        <TableHeader className="shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.06)] bg-white">
          <TableRow>
            <TableHead className="rounded-l-lg bg-neutral-50 px-6 py-[14px]">
              #
            </TableHead>
            <TableHead className="rounded-l-lg bg-neutral-50 px-6 py-[14px]">
              Name
            </TableHead>
            <TableHead className="bg-neutral-50 px-6 py-[14px]">
              Price
            </TableHead>
            <TableHead className="bg-neutral-50 px-6 py-[14px]">
              Market Cap
            </TableHead>
            <TableHead className="bg-neutral-50 px-6 py-[14px]">
              Change %
            </TableHead>
            <TableHead className="rounded-r-lg bg-neutral-50 px-6 py-[14px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }, (_, i) => (
            <TableRow key={i + 1}>
              <TableCell className="px-6 text-sm font-medium text-neutral-400">
                {i + 1}
              </TableCell>
              <TableCell className="px-6 py-[22px]">
                <div className="flex items-center justify-start gap-3">
                  <Image
                    width={40}
                    height={40}
                    alt="bitcoin"
                    src="/icons/crypto/BTC.svg"
                  />
                  <div className="space-y-[2px]">
                    <p className="text-medium font-sm text-black">Bitcoin</p>
                    <p className="text-xs font-medium tracking-[0.00375rem] text-neutral-500">
                      BTC
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-6 py-[22px]">
                <p className="text-sm font-normal text-neutral-700">
                  {formatCurrency(44400)}
                </p>
              </TableCell>
              <TableCell className="px-6 py-[22px]">
                <p className="text-sm font-normal text-neutral-700">
                  {formatCurrency(111.44)}
                </p>
              </TableCell>
              <TableCell className="px-6 py-[22px]">
                <MarketIndicator variant="rounded" value={77} direction="up" />
              </TableCell>
              <TableCell className="px-6 py-[22px]">
                <Button
                  variant="outline-primary"
                  className="shadow-[0px_0px_30px_0px_rgba(161, 145, 243, 0.1)"
                >
                  Buy/Sell
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
