"use client"

import { FormEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function GetStarted() {
  const [email, setEmail] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return inputRef.current?.focus()

    router.push(`/register?address=${email}`)
  }

  return (
    <form
      className="flex items-center justify-between gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        value={email}
        type="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1"
        ref={inputRef}
      />
      <Button>Get started</Button>
    </form>
  )
}

export default GetStarted
