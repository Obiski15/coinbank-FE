import Image from "next/image"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

export default function Feature3() {
  return (
    <Feature className="pb-[100px]">
      <FeatureHeader subTitle="Supercharge your trades with advanced features" />

      <div className="grid grid-cols-2 justify-between items-start gap-8">
        <div className="rounded-3xl bg-white col-span-1 shadow-[0px_12px_80px_0px_hsla(250, 80%, 56%, 0.1)]">
          <Image
            src="/images/landing-pages/home/supercharge-1.png"
            className="mx-auto"
            alt="supercharge"
            width={544}
            height={250}
          />
          <div className="p-12 pt-8 space-y-4 border-2 border-neutral-200 border-t-0">
            <h3 className="text-black font-medium text-2xl tracking-[0.015rem]">
              Grow and earn everyday
            </h3>
            <p className="text-neutral-700 font-normal text-base -tracking-tighter">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white col-span-1 shadow-[0px_12px_80px_0px_hsla(250, 80%, 56%, 0.1)]">
          <Image
            src="/images/landing-pages/home/supercharge-2.png"
            className="mx-auto"
            alt="supercharge"
            width={544}
            height={250}
          />
          <div className="p-12 pt-8 space-y-4 border-2 border-neutral-200 border-t-0">
            <h3 className="text-black font-medium text-2xl tracking-[0.015rem]">
              Virtual cards powered by Mastercard
            </h3>
            <p className="text-neutral-700 font-normal text-base -tracking-tighter">
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
