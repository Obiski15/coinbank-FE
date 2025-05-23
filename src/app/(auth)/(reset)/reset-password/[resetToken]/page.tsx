import { Metadata } from "next"

import ResetPasswordForm from "@/components/auth/ResetPasswordForm"
import Logo from "@/components/Logo"

export const metadata: Metadata = {
  title: "Coinbank - Reset Password",
}

export default function ResetPassword() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shadow-[10px_4px_30px_0px_rgba(161, 145, 243, 0.1)] w-full max-w-[608px] space-y-10 rounded-lg border border-neutral-200 bg-white p-20">
        <div className="space-y-8">
          <Logo />
          <div className="space-y-2">
            <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
              Reset your password
            </h3>
            <p className="text-lg font-normal text-neutral-500">
              Enter a new password to regain access to your account. Make sure
              it&apos;s strong and easy for you to remember.
            </p>
          </div>
        </div>

        <ResetPasswordForm />
      </div>
    </div>
  )
}
