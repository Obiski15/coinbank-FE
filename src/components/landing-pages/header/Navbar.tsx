"use client"

import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-10 max-lg:flex-col max-lg:items-start max-lg:justify-start">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-black max-lg:px-0">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="space-y-6 rounded-lg bg-white p-8 pr-[88px] text-sm font-medium">
              <h3 className="tracking-[0.035] text-neutral-400">FEATURES</h3>

              <ul className="space-y-6 capitalize text-neutral-900">
                <li className="flex items-center justify-start gap-4">
                  <span className="relative size-6">
                    <Image
                      className="inline"
                      src="/icons/nav/funding.svg"
                      alt="funding"
                      fill
                    />
                  </span>
                  <span className="whitespace-nowrap">funding</span>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <span className="relative size-6">
                    <Image src="/icons/nav/staking.svg" alt="staking" fill />
                  </span>

                  <span className="whitespace-nowrap">staking</span>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <span className="relative size-6">
                    <Image
                      src="/icons/nav/liquidity.svg"
                      alt="liquidity"
                      fill
                    />
                  </span>

                  <span className="whitespace-nowrap">liquidity</span>
                </li>

                <li className="flex items-center justify-start gap-4">
                  <span className="relative size-6">
                    <Image
                      src="/icons/nav/trading.svg"
                      alt="margin trading"
                      fill
                    />
                  </span>
                  <span className="whitespace-nowrap">margin trading</span>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className="text-sm font-medium text-black"
          >
            Prices
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-black max-lg:px-0">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="space-y-6 rounded-lg bg-white p-8 pr-[88px] text-sm font-medium">
              <h3 className="tracking-[0.035] text-neutral-400">COMPANY</h3>

              <ul className="space-y-6 text-neutral-900">
                <li>
                  <Link
                    href="/about"
                    className="flex items-center justify-start gap-4"
                  >
                    <span className="relative size-6">
                      <Image
                        className="inline"
                        src="/icons/nav/about.svg"
                        alt="about"
                        fill
                      />
                    </span>
                    <span className="whitespace-nowrap">About</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="flex items-center justify-start gap-4"
                  >
                    <span className="relative size-6">
                      <Image src="/icons/nav/blog.svg" alt="blog" fill />
                    </span>

                    <span className="whitespace-nowrap">Blog</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faq"
                    className="flex items-center justify-start gap-4"
                  >
                    <span className="relative size-6">
                      <Image src="/icons/nav/faq.svg" alt="faq" fill />
                    </span>

                    <span className="whitespace-nowrap">FAQs</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/support"
                    className="flex items-center justify-start gap-4"
                  >
                    <span className="relative size-6">
                      <Image src="/icons/nav/support.svg" alt="support" fill />
                    </span>

                    <span className="whitespace-nowrap">Support</span>
                  </Link>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className="text-sm font-medium text-black"
          >
            Developers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
