"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, User } from "lucide-react"

import { cn } from "@/lib/utils"

const settings: string[] = [
  "Notifications",
  "Security",
  "Payment Methods",
  "API Access",
  "Privacy",
  "Account",
  "Profile",
  "Preferences",
  "Password",
]

export default function Sidebar() {
  const path = usePathname()

  function handleNavigation(page: string) {
    return page.toLowerCase().replace(/ /g, "-")
  }

  function stringCheck(setting: string) {
    return path.split("/").at(-1) === setting.toLowerCase().replace(/ /g, "-")
  }

  return (
    <div className="col-span-2 h-full space-y-6 border-r border-neutral-200 pt-8">
      <div className="flex items-center justify-start gap-2 px-6">
        <Image src="/icons/icon.svg" alt="icon" width={32} height={32} />
        <div className="flex items-center justify-start gap-2">
          <Link href={handleNavigation("/dashboard")}>
            <ChevronLeft className="size-3 flex-shrink-0 cursor-pointer text-neutral-400" />
          </Link>
          <p className="text-xl font-medium tracking-[-0.00625rem] text-neutral-900">
            Settings
          </p>
        </div>
      </div>

      <div className="no_scrollbar h-[calc(100vh-88px)] space-y-6 overflow-y-scroll">
        <div className="space-y-2 px-6 py-2">
          <div className="flex items-center justify-start gap-2 px-3 py-0.5">
            <Image
              src="/icons/dashboard/company.svg"
              alt="company"
              width={20}
              height={20}
            />
            <p className="text-xs font-medium uppercase tracking-[0.03rem] text-neutral-400">
              Company
            </p>
          </div>
          <div>
            {settings.slice(0, 5).map(setting => (
              <Link
                href={handleNavigation(`/dashboard/settings/${setting}`)}
                key={setting}
                className={cn(
                  "block w-full cursor-pointer rounded-lg py-2.5 pl-8 text-left text-sm font-medium text-neutral-900",
                  stringCheck(setting) && "bg-primary-200 hover:bg-primary-100"
                )}
              >
                {setting}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2 px-6">
          {settings.slice(5, 6).map(setting => (
            <Link
              href={handleNavigation(`/dashboard/settings/${setting}`)}
              key={setting}
              className={cn(
                "flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg py-2.5 pl-8 text-left text-sm font-medium text-neutral-400",
                stringCheck(setting) && "bg-primary-200 hover:bg-primary-100"
              )}
            >
              <User className="size-5" />
              <span className="uppercase">{setting}</span>
            </Link>
          ))}

          <div>
            {settings.slice(6).map(setting => (
              <Link
                href={handleNavigation(`/dashboard/settings/${setting}`)}
                key={setting}
                className={cn(
                  "block w-full cursor-pointer rounded-lg py-2.5 pl-8 text-left text-sm font-medium text-neutral-900",
                  stringCheck(setting) && "bg-primary-200 hover:bg-primary-100"
                )}
              >
                {setting}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
