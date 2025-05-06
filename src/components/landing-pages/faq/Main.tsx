"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Account from "./account"
import GettingStarted from "./getting-started"
import Payment from "./payment"
import Withdrawals from "./withdrawals"

function formatString(value: string) {
  return value.replace(/-/g, " ")
}

function Main() {
  const [value, setValue] = useState<string>("getting-started")

  return (
    <Tabs onValueChange={setValue} value={value}>
      <div className="grid grid-cols-12 gap-12 px-40 pb-20 pt-16">
        <div className="col-span-4 space-y-12">
          <h3 className="text-base font-medium capitalize tracking-[0.005rem] text-neutral-400">
            Support
            <span className="text-neutral-900">/{formatString(value)}</span>
          </h3>

          <div className="space-y-8">
            <Image
              src="/icons/landing-pages/faq/getting-started.svg"
              alt="getting-started"
              width={80}
              height={80}
            />
            <h2 className="text-display-md font-medium capitalize tracking-[-0.025rem] text-neutral-900">
              {formatString(value)}
            </h2>
          </div>

          <TabsList className="flex h-auto flex-col items-start justify-start rounded-none bg-white">
            <TabsTrigger
              className="rounded-none border-l-primary pl-5 text-base font-medium tracking-[0.005rem] data-[state=active]:border-0 data-[state=active]:border-l data-[state=active]:bg-transparent data-[state=active]:text-primary"
              value="getting-started"
            >
              Getting started
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-l-primary pl-5 text-base font-medium tracking-[0.005rem] data-[state=active]:border-0 data-[state=active]:border-l data-[state=active]:bg-transparent data-[state=active]:text-primary"
              value="withdrawals"
            >
              Withdrawals
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-l-primary pl-5 text-base font-medium tracking-[0.005rem] data-[state=active]:border-0 data-[state=active]:border-l data-[state=active]:bg-transparent data-[state=active]:text-primary"
              value="account"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-l-primary pl-5 text-base font-medium tracking-[0.005rem] data-[state=active]:border-0 data-[state=active]:border-l data-[state=active]:bg-transparent data-[state=active]:text-primary"
              value="payment"
            >
              Payment
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="col-span-8 space-y-20 pt-52">
          <div className="flex items-center justify-start gap-3 rounded-lg bg-white p-4 shadow-[0px_0px_20px_0px_#5235E81A]">
            <Search className="size-6 shrink-0 text-neutral-400" />
            <input
              placeholder="Search questions, keywords, articles"
              className="flex-1 text-base font-normal tracking-[0.005rem] text-neutral-500 focus:border-none focus:outline-none"
            />
          </div>

          <div>
            <p className="border-b border-b-neutral-200 pb-4 font-medium uppercase text-neutral-400">
              {formatString(value)}
            </p>
            <TabsContent value="getting-started">
              <GettingStarted />
            </TabsContent>
            <TabsContent value="withdrawals">
              <Withdrawals />
            </TabsContent>
            <TabsContent value="account">
              <Account />
            </TabsContent>
            <TabsContent value="payment">
              <Payment />
            </TabsContent>
          </div>
        </div>
      </div>
    </Tabs>
  )
}

export default Main
