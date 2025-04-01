import type { Metadata } from "next"

import Header from "@/components/dashboard/header/Header"
import Sidebar from "@/components/dashboard/sidebar/Sidebar"

export const metadata: Metadata = {
  title: "Coinbank | Dashboard",
  description: "Crypto wallet & Trading Platform",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen overflow-hidden">
        <div className="grid grid-cols-12 items-start justify-start">
          <Sidebar />

          <div className="col-span-10">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
