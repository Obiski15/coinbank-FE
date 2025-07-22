import Image from "next/image"
import Link from "next/link"
import * as motion from "framer-motion/client"

import GetStarted from "./get-started"

const leftAnimationOptions = {
  initial: { opacity: 0, x: "-100%" },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
}

const rightAnimationOptions = {
  initial: { opacity: 0, x: "100%" },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
}

export default function Content() {
  return (
    <div className="overflow-x-hidden px-5 pb-10 pt-8 md:px-10 lg:px-40 lg:pb-20 lg:pt-16">
      <div className="lg:flex lg:items-start lg:justify-between lg:gap-[118px]">
        <div className="w-full space-y-12 lg:w-[47%]">
          <div className="space-y-6">
            <Link
              href="/login"
              className="text-sm font-medium uppercase text-primary hover:underline"
            >
              sign in to your secure wallet
            </Link>
            <div className="space-y-8">
              <h1 className="text-4xl font-medium tracking-[-0.04rem] text-black lg:text-display-lg">
                The next-gen crypto wallet & trading platform
              </h1>
              <p className="text-lg font-normal text-neutral-500">
                All of your cryptocurrency in one place — from Bitcoin and
                Ethereum to Litecoin and Ripple.
              </p>
            </div>
          </div>
          <GetStarted />
        </div>

        <div className="hidden h-[480px] w-[53%] bg-primary-400 bg-hero-content-gradient lg:block">
          <div className="relative h-full w-full space-y-4 bg-[url('/icons/landing-pages/home/hero-line.svg')] bg-left bg-no-repeat py-12">
            {/*  */}
            <motion.div
              {...rightAnimationOptions}
              className="mx-10 flex items-center justify-between gap-4 rounded-xl bg-white px-6 py-4 opacity-60"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/icons/crypto/BTC.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-base font-medium tracking-[0.08rem] text-neutral-400">
                  BTC
                </p>
                <p className="text-base font-medium tracking-[0.08rem] text-[#000000]">
                  Bitcoin
                </p>
              </div>

              <p>1000</p>
            </motion.div>

            {/*  */}
            <motion.div
              {...leftAnimationOptions}
              className="relative left-[10%] ml-4 flex w-[90%] items-center justify-between gap-4 rounded-xl bg-white px-6 py-4"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/icons/crypto/ETH.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-base font-medium tracking-[0.08rem] text-neutral-400">
                  ETH
                </p>
                <p className="text-base font-medium tracking-[0.08rem] text-[#000000]">
                  Ethereum
                </p>
              </div>

              <p>1000</p>
            </motion.div>

            {/*  */}
            <motion.div
              {...rightAnimationOptions}
              className="relative left-[40%] ml-4 w-[60%] rounded-xl bg-white px-6 py-4"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/icons/crypto/OGN.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-base font-medium tracking-[0.08rem] text-neutral-400">
                  OGN
                </p>
                <p className="text-base font-medium tracking-[0.08rem] text-[#000000]">
                  Origin Protocol
                </p>
              </div>
            </motion.div>

            {/*  */}
            <motion.div
              {...leftAnimationOptions}
              className="relative left-[30%] ml-4 flex w-[70%] items-center justify-between gap-4 rounded-xl bg-white px-6 py-4"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/icons/crypto/ACN.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-base font-medium tracking-[0.08rem] text-neutral-400">
                  ACN
                </p>
                <p className="text-base font-medium tracking-[0.08rem] text-[#000000]">
                  Achain
                </p>
              </div>

              <p>1000</p>
            </motion.div>

            {/*  */}
            <motion.div
              {...rightAnimationOptions}
              className="ml-4 flex items-center justify-between gap-4 rounded-xl bg-white px-6 py-4 opacity-60"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/icons/crypto/USDT.svg"
                  alt="btc"
                  width={40}
                  height={40}
                />
                <p className="text-base font-medium tracking-[0.08rem] text-neutral-400">
                  USDT
                </p>
                <p className="text-base font-medium tracking-[0.08rem] text-[#000000]">
                  Tether
                </p>
              </div>

              <p>1000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute left-[-120] top-[212px] z-[99] flex items-start justify-start gap-6 rounded-2xl border-2 bg-black bg-[url('/icons/landing-pages/home/envelope.svg')] bg-right-top bg-no-repeat px-6 pb-6 pt-8"
            >
              <Image
                src="/icons/landing-pages/home/BTC-large.svg"
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
