"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

const data: {
  [key: string]: {
    title: string
    description: string
  }
} = {
  login: {
    title:
      "Welcome to the world of crypto! Log in for your coinbank personal wallet.",
    description:
      "We're the first crypto wallet that's secure, simple, and easy to use. Use it on your phone or in web browser with no downloads or installation required.",
  },
  register: {
    title:
      "With Coinbank, multi-signature digital wallet, you can start saving.",
    description:
      "If you're interested in getting involved in the booming cryptocurrency industry and want to own your own digital coins, then sign up with us today!",
  },
}

export default function Intro() {
  const path = usePathname()

  return (
    <div className="col-span-7 flex h-full flex-col items-end justify-start gap-16 rounded-[20px] bg-black pl-16 pt-16">
      <div>
        <Image
          src="/images/auth/chart.png"
          alt="auth-chart"
          width={296}
          height={538}
        />
      </div>

      <div className="mx-auto flex w-fit items-start justify-start gap-3 pr-16">
        <p className="flex-shrink-0 text-display-sm font-medium tracking-[0.002rem] text-neutral-50">
          ~
        </p>
        <div className="space-y-3">
          <h3 className="text-display-sm font-medium tracking-[0.002rem] text-neutral-50">
            {data[path.split("/").at(-1) as string].title}
          </h3>
          <p className="text-lg font-normal text-neutral-100">
            {data[path.split("/").at(-1) as string].description}
          </p>
        </div>
      </div>
    </div>
  )
}
