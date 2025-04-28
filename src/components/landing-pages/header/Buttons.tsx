import Link from "next/link"

import { Button } from "@/components/ui/button"

function Buttons() {
  return (
    <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-4">
      <Button variant="outline">
        <Link href="login">Sign in</Link>
      </Button>
      <Button variant="outline-primary" className="text-primary">
        <Link href="register">Get Started</Link>
      </Button>
    </div>
  )
}

export default Buttons
