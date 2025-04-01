import { Metadata } from "next"

import LoginForm from "@/components/auth/LoginForm"
import Logo from "@/components/Logo"

export const metadata: Metadata = {
  title: "Login",
}

export default function Login() {
  return (
    <div className="col-span-5 h-full p-20">
      <div className="space-y-10">
        <div className="space-y-8">
          <Logo />
          <div className="space-y-2">
            <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
              Sign in to Coinbank
            </h3>
            <p className="text-lg font-normal text-neutral-500">
              We&apos;re glad you are back
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
