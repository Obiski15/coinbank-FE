"use client"

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
      <NavigationMenuList className="gap-10">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-black">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>content</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className="text-sm font-medium text-black">
              Prices
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-black">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>content</NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className="text-sm font-medium text-black">
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
