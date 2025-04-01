import Image from "next/image"

import Main from "../Main"
import ConnectWallet from "./connect-wallet"

export default function NoWallet() {
  return (
    <Main className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="size-40 rounded-xl bg-neutral-50 p-[30px]">
          <div className="size-[100px] rounded-xl border border-primary-100 bg-primary-50 p-2.5">
            <div className="rounded-xl border border-primary-400 p-5">
              <Image
                width={40}
                height={40}
                alt="wallet"
                src="/icons/dashboard/no-wallet.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="space-y-2 text-center">
            <p className="text-2xl font-medium tracking-[-0.015rem] text-neutral-900">
              No Wallet Connected
            </p>
            <p className="text-md tracking-[0.005rem] text-neutral-500">
              Please connect your wallet to see this feature.
            </p>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </Main>
  )
}
