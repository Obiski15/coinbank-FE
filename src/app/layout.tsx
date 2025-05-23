import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import ReactQueryProvider from "@/providers/ReactQueryProvider"

import { Toaster } from "@/components/ui/sonner"

const aeonik = localFont({
  src: "./fonts/aeonik.otf",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Coinbank",
  description: "Crypto wallet & Trading Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${aeonik.className} antialiased`}>
        <ReactQueryProvider>
          <Toaster position="bottom-right" />
          {/* <WagmiProvider>
            <RainbowKitProvider> */}
          {children}
          {/* </RainbowKitProvider> */}
          {/* </WagmiProvider/> */}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
