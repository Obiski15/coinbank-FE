import Image from "next/image"

import FeatureHeader from "../landing-pages/home/feature/featureHeader"

export default function BackedBy() {
  return (
    <div className="space-y-12 px-40 pb-12 pt-[100px] text-center">
      <FeatureHeader
        title="PARTNERS"
        subTitle="We're backed by the best"
        description="Trusted by these blockchains leading industries"
      />

      <div className="mx-auto flex w-fit flex-wrap items-center justify-between gap-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i + 1}>
            <Image
              src={`/icons/landing-pages/home/company-${i + 1}.svg`}
              alt={`trusted-company-${i}`}
              width={170}
              height={36}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
