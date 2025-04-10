import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { http } from "wagmi"
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains"

export const config = getDefaultConfig({
  appName: "coinbase",
  projectId: "8e314179b4d0f35c2c5d3b80085fb549",
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http("https://mainnet.example.com"),
    [sepolia.id]: http("https://sepolia.example.com"),
  },
  ssr: true,
})
