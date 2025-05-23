"use client"

import { useState } from "react"

import Logo from "../Logo"
import ForgotPasswordForm from "./ForgotPasswordForm"
import PasswordResetEmailSent from "./PasswordResetEmailSent"

function ForgotPasswordClient() {
  const [status, setStatus] = useState<"loading" | "idle" | "sent">("idle")
  const [userEmail, setUserEmail] = useState<string>("")

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shadow-[10px_4px_30px_0px_rgba(161, 145, 243, 0.1)] w-full max-w-[608px] space-y-10 rounded-lg border border-neutral-200 bg-white p-20">
        {status === "sent" ? (
          <PasswordResetEmailSent email={userEmail} />
        ) : (
          <>
            <div className="space-y-8">
              <Logo />
              <div className="space-y-2">
                <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
                  Lookup your profile
                </h3>
                <p className="text-lg font-normal text-neutral-500">
                  Enter the username, email address, or phone number linked to
                  your account so we can give you a link to reset your password.
                </p>
              </div>
            </div>

            <ForgotPasswordForm
              status={status}
              setStatus={setStatus}
              setUserEmail={setUserEmail}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPasswordClient
