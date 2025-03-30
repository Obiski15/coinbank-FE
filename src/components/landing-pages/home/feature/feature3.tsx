import Image from "next/image"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

export default function Feature3() {
  return (
    <Feature className="pb-[100px]">
      <FeatureHeader subTitle="Supercharge your trades with advanced features" />

      <div className="grid grid-cols-2 items-start justify-between gap-8">
        <div className="shadow-[0px_12px_80px_0px_hsla(250, 80%, 56%, 0.1)] col-span-1 rounded-3xl bg-white">
          <Image
            src="/images/landing-pages/home/supercharge-1.png"
            className="mx-auto"
            alt="supercharge"
            width={544}
            height={250}
          />
          <div className="space-y-4 border-2 border-t-0 border-neutral-200 p-12 pt-8">
            <h3 className="text-2xl font-medium tracking-[0.015rem] text-black">
              Grow and earn everyday
            </h3>
            <p className="text-base font-normal -tracking-tighter text-neutral-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="shadow-[0px_12px_80px_0px_hsla(250, 80%, 56%, 0.1)] col-span-1 rounded-3xl bg-white">
          <Image
            src="/images/landing-pages/home/supercharge-2.png"
            className="mx-auto"
            alt="supercharge"
            width={544}
            height={250}
          />
          <div className="space-y-4 border-2 border-t-0 border-neutral-200 p-12 pt-8">
            <h3 className="text-2xl font-medium tracking-[0.015rem] text-black">
              Virtual cards powered by Mastercard
            </h3>
            <p className="text-base font-normal -tracking-tighter text-neutral-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </Feature>
  )
}
