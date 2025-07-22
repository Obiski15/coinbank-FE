import Image from "next/image"
import * as motion from "framer-motion/client"

import { cn } from "@/lib/utils"

const icons: string[] = [
  "/icons/crypto/BTC.svg",
  "/icons/crypto/DOGE.svg",
  "/icons/crypto/OGN.svg",
  "/icons/crypto/ACN.svg",
  "/icons/crypto/GUSD.svg",
]

function AssetsAdded() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="hidden bg-primary-50 px-40 lg:block"
    >
      <div className="flex items-center justify-between gap-6 rounded-3xl bg-black bg-[url('/icons/landing-pages/home/envelope.svg')] bg-right-top bg-no-repeat px-20 py-12">
        <div className="relative">
          {icons.map((src, i) => {
            return (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: +`0.${i}` }}
                key={i}
              >
                <Image
                  style={{ right: i > 0 ? i * 4 : 0 }}
                  alt={src.split("/").at(-1)!.split(".")[0]}
                  width={48}
                  height={48}
                  src={src}
                  className={cn("relative inline-block")}
                />
              </motion.span>
            )
          })}
        </div>
        <div className="flex items-center justify-between gap-2 text-white">
          <p className="text-xl font-medium tracking-[0.00625rem]">
            Trade more than 50+
            <br />
            cryptocurrencies
          </p>
          <div className="flex items-center justify-between gap-2">
            <Image
              src="/icons/landing-pages/home/gliter.svg"
              alt="gliter"
              width={32}
              height={32}
            />
            <p>New assets added regularly</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AssetsAdded
