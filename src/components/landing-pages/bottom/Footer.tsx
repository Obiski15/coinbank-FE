import Image from "next/image"
import Link from "next/link"
import { connection } from "next/server"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const socials: { url: string; icon: string }[] = [
  { url: "https://www.instagram.com/_obiski", icon: "/icons/social/instagram" },
  { url: "https://www.facebook.com/Obiski15", icon: "/icons/social/facebook" },
  { url: "https://www.x.com/_obiski", icon: "/icons/social/x" },
  {
    url: "https://www.linkedin.com/in/obiski15",
    icon: "/icons/social/linkedin",
  },
]

async function Footer() {
  await connection()

  return (
    <div className="shadow-[0px_4px_200px_0px_hsla(173, 59%, 94%, 0.2)] flex items-start justify-between gap-24 rounded-3xl bg-white pb-[58px] pl-16 pr-8 pt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <Image alt="icon" src="/icons/icon.svg" width={42} height={40} />
          <div className="space-y-6">
            <Select defaultValue="eng">
              <SelectTrigger>
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">English</SelectItem>
                <SelectItem value="frc">French</SelectItem>
                <SelectItem value="spa">Spanish</SelectItem>
              </SelectContent>
            </Select>

            <div className="space-x-4">
              {socials.map(({ url, icon }, i) => (
                <Link key={i} href={url}>
                  <Image
                    alt="icon"
                    className="inline-block"
                    src={`${icon}-outline.svg`}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm font-normal text-neutral-400">
          Copyright {new Date().getFullYear()} &copy; Coinbank
        </p>
      </div>

      <div className="flex items-start justify-between gap-8">
        <div className="space-y-4">
          <p className="text-base font-medium tracking-wider text-black">
            Company
          </p>
          <div className="space-y-2">
            <p className="text-sm font-normal text-neutral-500">About</p>
            <p className="text-sm font-normal text-neutral-500">Careers</p>
            <p className="text-sm font-normal text-neutral-500">Affiliates</p>
            <p className="text-sm font-normal text-neutral-500">Press</p>
            <p className="text-sm font-normal text-neutral-500">
              Legal & Privacy
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-base font-medium tracking-wider text-black">
            Features
          </p>
          <div className="space-y-2">
            <p className="text-sm font-normal text-neutral-500">
              Buy & Sell Crypto
            </p>
            <p className="text-sm font-normal text-neutral-500">Wallet</p>
            <p className="text-sm font-normal text-neutral-500">Dashboard</p>
            <p className="text-sm font-normal text-neutral-500">Trading</p>
            <p className="text-sm font-normal text-neutral-500">Portfolio</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-base font-medium tracking-wider text-black">
            Developers
          </p>
          <div className="space-y-2">
            <p className="text-sm font-normal text-neutral-500">Cloud</p>
            <p className="text-sm font-normal text-neutral-500">Wallet SDK</p>
            <p className="text-sm font-normal text-neutral-500">
              Query & Transact
            </p>
            <p className="text-sm font-normal text-neutral-500">Commerce</p>
            <p className="text-sm font-normal text-neutral-500">
              Exchange and Pro
            </p>
            <p className="text-sm font-normal text-neutral-500">API Access</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-base font-medium tracking-wider text-black">
            Company
          </p>
          <div className="space-y-2">
            <p className="text-sm font-normal text-neutral-500">Blog</p>
            <p className="text-sm font-normal text-neutral-500">
              Help and Support
            </p>
            <p className="text-sm font-normal text-neutral-500">
              Customer Stories
            </p>
            <p className="text-sm font-normal text-neutral-500">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
