"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

import { useUser } from "@/hooks/useUser"

function VerifyEmail() {
  const [displayMessage, setDisplayMessage] = useState<boolean>(true)
  const { isLoading, error, data } = useUser()

  if (isLoading || error) return null

  console.log(data?.data?.user?.email)

  return (
    !data?.data?.user?.email &&
    displayMessage &&
    createPortal(
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="absolute top-0 flex w-full items-center justify-between gap-3 bg-primary-200 p-4 text-sm font-medium tracking-tight text-neutral-500"
      >
        <p className="flex-1">
          You haven&apos;t added an email address yet. Please{" "}
          <Link href="#" className="text-primary hover:underline">
            verify
          </Link>{" "}
          your email
        </p>

        <X onClick={() => setDisplayMessage(false)} />
      </motion.div>,
      document.body
    )
  )
}

export default VerifyEmail
