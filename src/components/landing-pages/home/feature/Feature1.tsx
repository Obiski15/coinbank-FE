import Image from "next/image"
import * as motion from "framer-motion/client"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

export default function Feature1() {
  return (
    <Feature className="bg-home-feature-gradient-1">
      <FeatureHeader
        subTitle="Get a bird's eye view of your crypto investments"
        description="Keep up on all the latest trends in the crypto industry and stay ahead
          of the market"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/landing-pages/home/feature1.png"
          className="mx-auto"
          alt="feature"
          width={1120}
          height={584}
        />
      </motion.div>
    </Feature>
  )
}
