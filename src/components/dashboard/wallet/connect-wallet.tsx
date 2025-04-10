import Image from "next/image"
// import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ChevronRight } from "lucide-react"

// import "../../../../node_modules/@rainbow-me/rainbowkit/dist/index.css"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

const wallets: { name: string; icon: string }[] = [
  {
    name: "MetaMask",
    icon: "/icons/coin/metamask",
  },
  {
    name: "Coinbase Wallet",
    icon: "/icons/coin/coinbase",
  },
  {
    name: "Exodus Wallet",
    icon: "/icons/coin/exodus",
  },
  {
    name: "Trust Wallet",
    icon: "/icons/coin/trust",
  },
]

export default function ConnectWallet() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-md font-medium tracking-[0.005rem] text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        Connect Wallet
      </DialogTrigger>
      <DialogContent className="max-w-[335px] space-y-6">
        <DialogHeader>
          <p className="text-lg font-medium text-neutral-900">Connect Wallet</p>
        </DialogHeader>
        <div className="space-y-2">
          {wallets.map(({ name, icon }) => (
            <div
              key={name}
              className="flex cursor-pointer items-center justify-between rounded-lg p-4 hover:border hover:border-neutral-200 hover:shadow-[0px_0px_30px_0px_rgba(174,144,255,0.1)]"
            >
              <div className="flex items-center justify-between gap-4">
                <Image src={`${icon}.svg`} alt={name} width={24} height={24} />
                <p>{name}</p>
              </div>
              <ChevronRight className="size-5 flex-shrink-0 text-neutral-400" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
    // <ConnectButton />
  )
}
