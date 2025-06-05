import { Metadata } from "next"

import SignupForm from "@/components/auth/SignupForm"
import Logo from "@/components/Logo"

export const metadata: Metadata = {
  title: "Signup",
}

type Props = {
  searchParams: Promise<{ [key: string]: string }>
}

export default async function Register({ searchParams }: Props) {
  const { address } = await searchParams

  return (
    <div className="col-span-5 h-full p-20">
      <div className="space-y-10">
        <div className="space-y-8">
          <Logo />
          <div className="space-y-2">
            <h3 className="text-display-md font-medium tracking-tight text-[#000000]">
              Create an account
            </h3>
            <p className="text-lg font-normal text-neutral-500">
              Let&apos;s begin your 30-day risk-free trial.
            </p>
          </div>
        </div>
        <SignupForm email={address} />
      </div>
    </div>
  )
}
