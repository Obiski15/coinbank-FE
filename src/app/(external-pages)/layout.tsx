import type { Metadata } from "next"

import Bottom from "@/components/landing-pages/bottom/Bottom"
import Header from "@/components/landing-pages/header/Header"

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
      <body>
        <Header />
        {children}
        <Bottom />
      </body>
    </html>
  )
}
