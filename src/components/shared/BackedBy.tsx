import Image from "next/image"

import FeatureHeader from "../landing-pages/home/feature/featureHeader"

export default function BackedBy() {
  return (
    <div className="space-y-12 px-5 pb-12 pt-[100px] text-center md:px-10 lg:px-40">
      <FeatureHeader
        title="PARTNERS"
        subTitle="We're backed by the best"
        description="Trusted by these blockchains leading industries"
      />

      <div className="mx-auto flex w-fit flex-wrap items-center justify-between gap-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i + 1} className="max-[425px]:w-full">
            <Image
              src={`/icons/landing-pages/home/company-${i + 1}.svg`}
              alt={`trusted-company-${i}`}
              width={170}
              height={36}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
