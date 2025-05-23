import { Metadata } from "next"

import ForgotPasswordClient from "@/components/auth/ForgotPasswordClient"

export const metadata: Metadata = {
  title: "Coinbank - Forgot Password",
}

export default function ForgotPassword() {
  return <ForgotPasswordClient />
}
