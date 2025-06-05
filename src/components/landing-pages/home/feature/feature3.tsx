import Image from "next/image"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

const feature = [
  {
    header: " Grow and earn everyday",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    header: " Virtual cards powered by Mastercard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
]

export default function Feature3() {
  return (
    <Feature className="bg-white pb-[100px]">
      <FeatureHeader subTitle="Supercharge your trades with advanced features" />

      <div className="grid grid-cols-2 items-start justify-between gap-8">
        {feature.map(({ header, description }, i) => (
          <div
            key={i + 1}
            className="shadow-[0px_12px_80px_0px_hsla(250, 80%, 56%, 0.1)] col-span-1 h-full rounded-3xl border border-neutral-200 bg-white"
          >
            <Image
              src={`/images/landing-pages/home/supercharge-${i + 1}.png`}
              className="mx-auto rounded-3xl"
              alt="supercharge"
              width={544}
              height={250}
            />
            <div className="space-y-4 p-12 pt-8">
              <h3 className="text-2xl font-medium tracking-[0.015rem] text-black">
                {header}
              </h3>
              <p className="text-base font-normal -tracking-tighter text-neutral-700">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Feature>
  )
}
