"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { IError } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import AuthService from "@/app/api/services/auth-services"
import { resetPasswordSchema } from "@/schema/user-schema"

import Loader from "../shared/loader"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

function ResetPasswordForm() {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  })
  const { resetToken } = useParams()
  const router = useRouter()

  const [status, setStatus] = useState<"loading" | "idle">("idle")

  const _onSubmit: SubmitHandler<
    z.infer<typeof resetPasswordSchema>
  > = async values => {
    try {
      setStatus("loading")
      await new AuthService().resetPassword({
        ...values,
        resetToken: String(resetToken),
      })
      router.push("/login")
      form.reset({
        password: "",
        confirm_password: "",
      })
    } catch (e) {
      const err = e as IError
      toast.error(err.error.message)
    } finally {
      setStatus("idle")
    }
  }

  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            name="password"
            control={form.control}
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your new password"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{errors.password?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name="confirm_password"
            control={form.control}
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm your new password"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{errors.confirm_password?.message}</FormMessage>
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

export default ResetPasswordForm
