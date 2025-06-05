import Image from "next/image"

import Feature from "./Feature"

export default function Feature4() {
  return (
    <Feature className="bg-home-feature-gradient-4 pb-[100px]">
      <div className="space-y-4 text-left">
        <h5 className="font-medium tracking-[0.035rem] text-primary">
          FEATURES
        </h5>
        <h3 className="text-display-md font-medium tracking-tight text-black">
          Seamless Trading
        </h3>

        <div className="flex items-center justify-between gap-16 text-justify text-base font-normal tracking-[0.005] text-neutral-500">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.s
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.s
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 items-start justify-start gap-16">
        <Image
          width={640}
          height={402}
          src="/images/landing-pages/home/seamless-trading-chart.png"
          alt="seamless trading chart"
          className="col-span-3"
        />

        <div className="col-span-2 space-y-10">
          {/* <div className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-black px-8 py-4">
            <div className="flex items-center justify-between gap-12">
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">8888</p>
                <p className="text-xs font-normal tracking-[0.0375rem] text-neutral-400">
                  Last price
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">8888.44</p>
                <p className="text-xs font-normal tracking-[0.0375rem] text-neutral-400">
                  Volume (24h)
                </p>
              </div>
            </div>

            <div className="text-white">select</div>
          </div> */}

          <div className="space-y-10">
            <Image
              width={416}
              height={72}
              src="/images/landing-pages/home/trade-select.png"
              alt="trading dropdown"
            />

            <Image
              width={416}
              height={290}
              src="/images/landing-pages/home/watchlist.png"
              alt="trading watchlist"
            />
          </div>
        </div>
      </div>
    </Feature>
  )
}
