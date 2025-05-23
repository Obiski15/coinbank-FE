"use client"

// import Link from "next/link"
import Logo from "../Logo"

// import { Button } from "../ui/button"

export default function PasswordResetEmailSent({ email }: { email: string }) {
  return (
    <>
      <div className="space-y-8">
        <Logo />
        <div className="space-y-2">
          <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
            Check your email
          </h3>
          <p className="text-lg font-normal text-neutral-500">
            We emailed a link to reset your password to{" "}
            <span className="font-medium">{email}</span>
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-10">
        <Button className="w-full" onClick={() => {}}>
          Open Email
        </Button>
        <p className="text-center text-sm text-neutral-500">
          Continue to{" "}
          <Link href="/login" className="font-medium text-primary">
            sign in
          </Link>
        </p>
      </div> */}
    </>
  )
}
