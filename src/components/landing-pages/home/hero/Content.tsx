import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Content() {
  return (
    <div className="pt-16 px-40 pb-20">
      <div className="flex justify-between items-start gap-[118px]">
        <div className="w-[47%] space-y-12">
          <div className="space-y-6">
            <Link
              href=""
              className="text-primary font-medium text-sm uppercase hover:underline"
            >
              sign in to your secure wallet
            </Link>
            <div className="space-y-8">
              <h1 className="text-display-lg text-black font-medium tracking-[-0.04rem]">
                The next-gen crypto wallet & trading platform
              </h1>
              <p className="text-neutral-500 font-normal text-lg">
                All of your cryptocurrency in one place — from Bitcoin and
                Ethereum to Litecoin and Ripple.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Input placeholder="Your email address" className="flex-1" />
            <Button>Get started</Button>
          </div>
        </div>

        <div className="w-[53%] h-[480px] bg-primary-400 bg-hero-content-gradient">
          <div className="relative w-full space-y-4 h-full bg-[url('/icons/landing-pages/home/hero-line.svg')] bg-left bg-no-repeat py-12">
            {/*  */}
            <div className="opacity-60 py-4 px-6 mx-10 flex justify-between gap-4 items-center bg-white rounded-xl">
              <div className="flex justify-between gap-4 items-center">
                <Image
                  src="/icons/crypto/BTC.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-neutral-400 font-medium text-base tracking-[0.08rem]">
                  BTC
                </p>
                <p className="font-medium text-base tracking-[0.08rem] text-[#000000]">
                  Bitcoin
                </p>
              </div>

              <p>1000</p>
            </div>

            {/*  */}
            <div className="w-[90%] relative left-[10%] py-4 px-6 ml-4 flex justify-between gap-4 items-center bg-white rounded-xl">
              <div className="flex justify-between gap-4 items-center">
                <Image
                  src="/icons/crypto/ETH.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-neutral-400 font-medium text-base tracking-[0.08rem]">
                  ETH
                </p>
                <p className="font-medium text-base tracking-[0.08rem] text-[#000000]">
                  Ethereum
                </p>
              </div>

              <p>1000</p>
            </div>

            {/*  */}
            <div className="w-[60%] relative left-[40%] py-4 px-6 ml-4 bg-white rounded-xl">
              <div className="flex justify-between gap-4 items-center">
                <Image
                  src="/icons/crypto/OGN.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-neutral-400 font-medium text-base tracking-[0.08rem]">
                  OGN
                </p>
                <p className="font-medium text-base tracking-[0.08rem] text-[#000000]">
                  Origin Protocol
                </p>
              </div>
            </div>

            {/*  */}
            <div className="w-[70%] relative left-[30%] py-4 px-6 ml-4 flex justify-between gap-4 items-center bg-white rounded-xl">
              <div className="flex justify-between gap-4 items-center">
                <Image
                  src="/icons/crypto/ACN.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-neutral-400 font-medium text-base tracking-[0.08rem]">
                  ACN
                </p>
                <p className="font-medium text-base tracking-[0.08rem] text-[#000000]">
                  Achain
                </p>
              </div>

              <p>1000</p>
            </div>
            {/*  */}
            <div className="opacity-60 py-4 px-6 ml-4 flex justify-between gap-4 items-center bg-white rounded-xl">
              <div className="flex justify-between gap-4 items-center">
                <Image
                  src="/icons/crypto/USDT.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-neutral-400 font-medium text-base tracking-[0.08rem]">
                  USDT
                </p>
                <p className="font-medium text-base tracking-[0.08rem] text-[#000000]">
                  Tether
                </p>
              </div>

              <p>1000</p>
            </div>

            <div className="bg-[url('/icons/landing-pages/home/hero-envelope.svg')] bg-right-top bg-no-repeat rounded-2xl bg-black absolute top-[212px] left-[-120] z-[99] flex justify-start items-start gap-6 border-2 px-6 pt-8 pb-6">
              <Image
                src="/icons/crypto/BTC-large.svg"
                alt="btc"
                width={56}
                height={84}
              />
              <p className="text-white">
                Trade more
                <br />
                than <span className="text-secondary">50+</span>
                <br />
                assets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
