import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Buttons from "./Buttons"
import Navbar from "./Navbar"

function Hamburger() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetHeader className="hidden">
          <SheetTitle>Side navigation</SheetTitle>
          <SheetDescription>Mobile navigation menu</SheetDescription>
        </SheetHeader>

        <SheetTrigger>
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col items-start justify-start gap-10">
            <Navbar />
            <Buttons />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Hamburger
