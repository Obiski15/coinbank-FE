import Image from "next/image"
import * as motion from "framer-motion/client"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"

const icons: string[] = ["DOGE", "OGN", "BTC", "XRP", "ETH", "ACT", "GUSD"]

function Feature2() {
  return (
    <Feature className="bg-home-feature-gradient-2 pb-12">
      <FeatureHeader
        subTitle="Many type of Blockchains"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-8 rounded-[1000px] px-10 py-7 md:bg-white">
        {icons.map((icon, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: +`0.${i}`, duration: 0.5 }}
            key={i}
          >
            <Image
              alt="icon"
              src={`/icons/crypto/${icon}-blue.svg`}
              width={80}
              height={80}
            />
          </motion.span>
        ))}
      </div>
    </Feature>
  )
}

export default Feature2
