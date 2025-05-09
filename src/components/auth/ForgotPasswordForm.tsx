"use client"

import Link from "next/link"
import { forgotPasswordSchema } from "@/schema/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Input } from "../ui/input"

function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const _onSubmit: SubmitHandler<
    z.infer<typeof forgotPasswordSchema>
  > = values => {
    console.log(values)
  }

  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email address"
                    className="px-6 py-3"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full">Reset Password</Button>
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
