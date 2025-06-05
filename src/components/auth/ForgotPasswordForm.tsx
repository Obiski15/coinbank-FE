"use client"

import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { IError } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import AuthService from "@/app/api/services/auth-services"
import { forgotPasswordSchema } from "@/schema/user-schema"

import Loader from "../shared/loader"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

function ForgotPasswordForm({
  status,
  setStatus,
  setUserEmail,
}: {
  status: "loading" | "idle" | "sent"
  setStatus: Dispatch<SetStateAction<"loading" | "idle" | "sent">>
  setUserEmail: Dispatch<SetStateAction<string>>
}) {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  })

  const _onSubmit: SubmitHandler<
    z.infer<typeof forgotPasswordSchema>
  > = async values => {
    try {
      setStatus("loading")
      await new AuthService().forgotPassword(values)
      setStatus("sent")
      setUserEmail(values.email)
    } catch (e) {
      const err = e as IError
      setStatus("idle")
      toast.error(err.error.message)
    }
  }

  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email address"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={status === "loading"}>
            {status === "loading" && <Loader />} Reset Password
          </Button>
        </div>
      </Form>

      <p className="text-center text-sm">
        <span className="font-normal text-neutral-500">Back to</span>{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}

export default ForgotPasswordForm
