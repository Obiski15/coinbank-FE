"use client"

import { ReactNode } from "react"
import { WagmiProvider as Wagmi } from "wagmi"

import { config } from "../../wagmi.config"

export default function WagmiProvider({ children }: { children: ReactNode }) {
  return <Wagmi config={config}>{children}</Wagmi>
}
