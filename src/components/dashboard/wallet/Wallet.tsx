// import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"

import Main from "../shared/Main"

export default function Wallet() {
  // const [asset, setAsset] = useState("")

  return (
    <Main className="flex items-start justify-between">
      <div className="flex-1 space-y-10 p-8 pb-14">
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-neutral-900">Top Movers</h4>
          <div className="flex items-center justify-between gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="flex flex-1 items-start justify-between rounded-lg border border-neutral-200 p-4"
              >
                <div className="flex items-center justify-between gap-3">
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
                <div className="space-y-[2px]">
                  <p className="text-medium font-sm text-black">0.000003 BTC</p>
                  <p className="text-xs font-medium tracking-[0.00375rem] text-neutral-500">
                    {formatCurrency(1000)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-medium text-[#000000]">Your Holdings</h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 items-center justify-between gap-3 rounded-lg border border-neutral-300 px-4">
                <Search className="size-6 flex-shrink-0 text-neutral-400" />
                <Input
                  placeholder="Search"
                  className="flex-1 border-none text-md font-normal tracking-[0.005rem] text-neutral-500 focus-visible:ring-0"
                />
              </div>

              <Select>
                <SelectTrigger className="w-[151px] border border-neutral-400 px-6 py-4">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Darkddddd</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader className="shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.06)] bg-white">
                <TableRow>
                  <TableHead className="rounded-l-lg bg-neutral-50 px-6 py-[14px]">
                    Asset
                  </TableHead>
                  <TableHead className="bg-neutral-50 px-6 py-[14px]">
                    Amount
                  </TableHead>
                  <TableHead className="bg-neutral-50 px-6 py-[14px]">
                    Price
                  </TableHead>
                  <TableHead className="bg-neutral-50 px-6 py-[14px]">
                    Change %
                  </TableHead>
                  <TableHead className="rounded-r-lg bg-neutral-50 px-6 py-[14px]">
                    Volume (24h)
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 5 }, (_, i) => (
                  <TableRow key={i}>
                    <TableCell className="px-6 py-[22px]">
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          width={40}
                          height={40}
                          alt="bitcoin"
                          src="/icons/crypto/BTC.svg"
                        />
                        <div className="space-y-[2px]">
                          <p className="text-medium font-sm text-black">
                            Bitcoin
                          </p>
                          <p className="text-xs font-medium tracking-[0.00375rem] text-neutral-500">
                            BTC
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-[22px]">
                      <p className="text-sm font-normal text-neutral-700">
                        0.00005 BTC
                      </p>
                    </TableCell>
                    <TableCell className="px-6 py-[22px]">
                      <p className="text-sm font-normal text-neutral-700">
                        {formatCurrency(111.44)}
                      </p>
                    </TableCell>
                    <TableCell className="px-6 py-[22px]">
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
                    </TableCell>
                    <TableCell className="px-6 py-[22px]">
                      <p className="text-sm font-normal text-neutral-700">
                        {formatCurrency(111.44)}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-normal text-neutral-500">
                Showing 1 to 8 of 32
              </p>
              {/* <Pagination className="w-fit">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination> */}
              <p>pagination</p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-neutral-500">Show</p>
                <Select defaultValue="5">
                  <SelectTrigger className="w-[151px] border border-neutral-400 px-6 py-4">
                    <SelectValue placeholder="Num rows" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20 Rows</SelectItem>
                    <SelectItem value="10">10 Rows</SelectItem>
                    <SelectItem value="5">5 Rows</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-2">
        <div className="border-2 p-8 pb-10">
          <h3>something</h3>
          <div>something</div>
        </div>
        <div></div>
      </div> */}
    </Main>
  )
}
