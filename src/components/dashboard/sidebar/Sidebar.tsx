"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

import Logo from "@/components/Logo"

import { cn } from "@/lib/utils"

const pages: { page: string; icon: string }[] = [
  {
    page: "dashboard",
    icon: "/icons/dashboard/sidebar/dashboard.svg",
  },
  {
    page: "wallet",
    icon: "/icons/dashboard/sidebar/wallet.svg",
  },
  {
    page: "prices",
    icon: "/icons/dashboard/sidebar/price.svg",
  },
  {
    page: "portfolios",
    icon: "/icons/dashboard/sidebar/portfolio.svg",
  },
  {
    page: "accounts",
    icon: "icons/dashboard/sidebar/coins.svg",
  },
  {
    page: "cards",
    icon: "/icons/dashboard/sidebar/card.svg",
  },
  {
    page: "settings",
    icon: "/icons/dashboard/sidebar/settings.svg",
  },
]

export default function Sidebar() {
  const path = usePathname()
  const router = useRouter()

  function handleNavigation(page: string) {
    router.push(page === "dashboard" ? `/${page}` : `/dashboard/${page}`)
  }

  return (
    <div className="col-span-2 flex h-full flex-col items-start justify-between gap-10 border-r border-neutral-200 pt-8">
      <div className="w-full space-y-12">
        <div className="px-6">
          <Logo />
        </div>
        <div className="space-y-2 px-6">
          {pages.slice(0, pages.length - 1).map(({ page, icon }) => (
            <button
              onClick={() => handleNavigation(page)}
              key={page}
              className={cn(
                "flex w-full cursor-pointer items-center justify-start gap-2 px-3 py-3.5 text-sm font-medium capitalize text-neutral-400",
                path.split("/").at(-1) === page &&
                  "rounded-lg border border-primary-200 bg-primary-50 text-black"
              )}
            >
              <Image src={icon} alt={page} width={24} height={24} />
              <p>{page}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-4 pb-8">
        <button
          onClick={() =>
            handleNavigation(`${pages[pages.length - 1].page}/notifications`)
          }
          className={cn(
            "flex w-full cursor-pointer items-center justify-start gap-2 px-3 py-3.5 text-sm font-medium capitalize text-neutral-400",
            path.split("/").at(-1) === pages[pages.length - 1].page &&
              "rounded-lg border border-primary-200 bg-primary-50 text-black"
          )}
        >
          <Image
            src={pages[pages.length - 1].icon}
            alt={pages[pages.length - 1].page}
            width={24}
            height={24}
          />

          <p>{pages[pages.length - 1].page}</p>
        </button>
      </div>
    </div>
  )
}
