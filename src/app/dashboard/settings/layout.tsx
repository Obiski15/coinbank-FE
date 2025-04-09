import type { Metadata } from "next"
import { CircleHelp } from "lucide-react"

import Header from "@/components/dashboard/settings/Header"
import Sidebar from "@/components/dashboard/settings/sidebar/Sidebar"

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
      <body className="max-h-screen overflow-hidden border-2">
        <div className="grid grid-cols-12 items-start justify-start overflow-hidden">
          <Sidebar />

          <div className="col-span-10">
            <Header />
            {children}

            <div className="p-8 pb-16">
              <div className="float-right flex size-10 w-fit items-center justify-center rounded-full p-2 shadow-[0px_0px_8px_0px_#5235E81A]">
                <CircleHelp className="size-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
