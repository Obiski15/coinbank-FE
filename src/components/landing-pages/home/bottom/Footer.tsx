import Image from "next/image"
import Link from "next/link"
import { connection } from "next/server"

const socials: { url: string; icon: string }[] = [
  { url: "https://www.facebook.com/obiski15", icon: "/icons/social/instagram" },
  { url: "https://www.facebook.com/obiski15", icon: "/icons/social/facebook" },
  { url: "https://www.facebook.com/obiski15", icon: "/icons/social/x" },
  { url: "https://www.facebook.com/obiski15", icon: "/icons/social/linkedin" },
  { url: "https://www.facebook.com/obiski15", icon: "/icons/social/discord" },
]

async function Footer() {
  await connection()

  return (
    <div className="rounded-3xl pt-16 pl-16 pb-[58px] pr-8 bg-white flex justify-between items-start gap-24 shadow-[0px_4px_200px_0px_hsla(173, 59%, 94%, 0.2)]">
      <div className="space-y-12">
        <div className="space-y-4">
          <Image alt="icon" src="/icons/icon.svg" width={42} height={40} />
          <div className="space-y-6">
            <div>select</div>
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

        <p className="text-neutral-400 font-normal text-sm">
          Copyright {new Date().getFullYear()} &copy; Coinbank
        </p>
      </div>

      <div className="flex justify-between items-start gap-8">
        <div className="space-y-4">
          <p className="text-black font-medium text-base tracking-wider">
            Company
          </p>
          <div className="space-y-2">
            <p className="font-normal text-neutral-500 text-sm">About</p>
            <p className="font-normal text-neutral-500 text-sm">Careers</p>
            <p className="font-normal text-neutral-500 text-sm">Affiliates</p>
            <p className="font-normal text-neutral-500 text-sm">Press</p>
            <p className="font-normal text-neutral-500 text-sm">
              Legal & Privacy
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-black font-medium text-base tracking-wider">
            Features
          </p>
          <div className="space-y-2">
            <p className="font-normal text-neutral-500 text-sm">
              Buy & Sell Crypto
            </p>
            <p className="font-normal text-neutral-500 text-sm">Wallet</p>
            <p className="font-normal text-neutral-500 text-sm">Dashboard</p>
            <p className="font-normal text-neutral-500 text-sm">Trading</p>
            <p className="font-normal text-neutral-500 text-sm">Portfolio</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-black font-medium text-base tracking-wider">
            Developers
          </p>
          <div className="space-y-2">
            <p className="font-normal text-neutral-500 text-sm">Cloud</p>
            <p className="font-normal text-neutral-500 text-sm">Wallet SDK</p>
            <p className="font-normal text-neutral-500 text-sm">
              Query & Transact
            </p>
            <p className="font-normal text-neutral-500 text-sm">Commerce</p>
            <p className="font-normal text-neutral-500 text-sm">
              Exchange and Pro
            </p>
            <p className="font-normal text-neutral-500 text-sm">API Access</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-black font-medium text-base tracking-wider">
            Company
          </p>
          <div className="space-y-2">
            <p className="font-normal text-neutral-500 text-sm">Blog</p>
            <p className="font-normal text-neutral-500 text-sm">
              Help and Support
            </p>
            <p className="font-normal text-neutral-500 text-sm">
              Customer Stories
            </p>
            <p className="font-normal text-neutral-500 text-sm">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
