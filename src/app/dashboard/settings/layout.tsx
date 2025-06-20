import type { Metadata } from "next"

import Header from "@/components/dashboard/settings/Header"
import Sidebar from "@/components/dashboard/settings/sidebar/Sidebar"
import FaqLinkIcon from "@/components/dashboard/shared/FaqLinkIcon"
import Main from "@/components/dashboard/shared/Main"

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
    <div className="grid h-screen grid-cols-12 items-start justify-start overflow-hidden">
      <Sidebar />

      <div className="col-span-10">
        <Header />

        <Main className="space-y-6 p-8">
          {children}
          <FaqLinkIcon />
        </Main>
      </div>
    </div>
  )
}
