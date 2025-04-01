import Image from "next/image"
import { ArrowDownUp, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Transact() {
  return (
    <Tabs className="space-y-8 p-8" defaultValue="buy">
      <TabsList className="flex w-full items-center justify-between bg-transparent">
        <TabsTrigger
          className="text-sm font-medium data-[state=active]:text-primary"
          value="buy"
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          className="text-sm font-medium data-[state=active]:text-primary"
          value="sell"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          className="text-sm font-medium data-[state=active]:text-primary"
          value="convert"
        >
          Convert
        </TabsTrigger>
      </TabsList>

      <TabsContent value="buy">
        <div className="space-y-6">
          <div className="flex items-start justify-end gap-4 text-center">
            <div className="space-y-6">
              <p className="text-display-md font-medium tracking-tight text-neutral-300">
                0
              </p>
              <p className="text-sm font-normal text-neutral-500">
                You can buy up to $25,000
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex size-12 items-center justify-center rounded-full border border-neutral-100 bg-white shadow-[0px_0px_30px_0px_#A191F333]">
                <ArrowDownUp className="size-5 text-neutral-900" />
              </div>
              <p className="text-xs font-medium tracking-[0.00375rem] text-neutral-400">
                USD
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200">
            <div className="flex items-start justify-between p-4">
              <p className="w-[20%] text-sm font-normal text-neutral-500">
                Buy
              </p>
              <div className="flex-1 space-y-3 border-l border-neutral-200 pl-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="eth"
                      src="/icons/crypto/ETH.svg"
                    />
                    <p>Etherum</p>
                  </div>
                  <ChevronRight className="size-5" />
                </div>
                <div className="text-normal flex items-center justify-between text-sm tracking-[0.00375rem] text-neutral-400">
                  <p>Balance</p>
                  <p>000.22 ETH</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between border-t border-neutral-200 p-4">
              <p className="w-[20%] text-sm font-normal text-neutral-500">
                Pay with
              </p>
              <div className="flex flex-1 items-center justify-between border-l border-neutral-200">
                <div className="flex items-center justify-between gap-2 pl-4">
                  <Image
                    width={20}
                    height={20}
                    alt="eth"
                    src="/icons/crypto/ETH.svg"
                  />
                  <p>Etherum</p>
                </div>
                <ChevronRight className="size-5" />
              </div>
            </div>
          </div>

          <Button className="w-full">Buy</Button>
        </div>
      </TabsContent>
      <TabsContent value="sell">sell</TabsContent>
      <TabsContent value="convert">convert</TabsContent>
    </Tabs>
  )
}
