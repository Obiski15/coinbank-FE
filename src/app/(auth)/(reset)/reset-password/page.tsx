import { Metadata } from "next"
import Link from "next/link"

import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Verify Password",
}

export default function ResetPassword() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shadow-[10px_4px_30px_0px_rgba(161, 145, 243, 0.1)] space-y-10 rounded-lg border border-neutral-200 bg-white p-20">
        <div className="space-y-8">
          <Logo />
          <div className="space-y-2">
            <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
              Check your email
            </h3>
            <p className="text-lg font-normal text-neutral-500">
              We emailed a link to reset your password to andreilly@gmail.com
            </p>
          </div>
        </div>

        <Button className="w-full">Open Email</Button>

        <p className="text-center text-sm">
          <span className="font-normal text-neutral-500">Continue to</span>{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
