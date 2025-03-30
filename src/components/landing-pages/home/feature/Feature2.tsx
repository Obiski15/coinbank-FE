import Image from "next/image"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

function Feature2() {
  return (
    <Feature className="bg-home-feature-gradient-2 pb-12">
      <FeatureHeader
        subTitle="Many type of Blockchains"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-8 rounded-[1000px] bg-white px-10 py-7">
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
        <Image alt="" src="/icons/crypto/BTC.svg" width={80} height={80} />
      </div>
    </Feature>
  )
}

export default Feature2
