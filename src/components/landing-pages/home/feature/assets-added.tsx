import Image from "next/image"

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
    <div className="bg-primary-50 px-40">
      <div className="flex items-center justify-between gap-6 rounded-3xl bg-black bg-[url('/icons/landing-pages/home/envelope.svg')] bg-right-top bg-no-repeat px-20 py-12">
        <div>
          {icons.map((src, i) => {
            return (
              <Image
                key={i}
                alt={src.split("/").at(-1)!.split(".")[0]}
                width={48}
                height={48}
                src={src}
                className={cn("relative inline-block")}
              />
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
    </div>
  )
}

export default AssetsAdded
