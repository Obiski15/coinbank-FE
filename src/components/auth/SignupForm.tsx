"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { IError } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import AuthService from "@/app/api/services/auth-services"
import { signupSchema } from "@/schema/user-schema"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

export default function SignupForm({ email }: { email?: string }) {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email,
    },
  })
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "loading">("idle")

  const _onSubmit: SubmitHandler<
    z.infer<typeof signupSchema>
  > = async values => {
    try {
      setStatus("loading")
      await new AuthService().register(values)
      router.push("/login")
      toast.success("Account created successfully", { position: "top-center" })
    } catch (error) {
      const err = error as IError
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
            name="display_name"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter username"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter Password"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name="confirm_password"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Re Enter your password"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <Button
              disabled={status === "loading"}
              className="w-full"
              type="submit"
            >
              Create Account
            </Button>
            <Button
              type="button"
              disabled={status === "loading"}
              className="w-full"
              variant="outline"
              Icon={
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/icons/social/google.svg"
                />
              }
            >
              Sign up with Google
            </Button>
            <Button
              type="button"
              disabled={status === "loading"}
              className="w-full"
              variant="outline"
              Icon={
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/icons/social/facebook.svg"
                />
              }
            >
              Sign up with Facebook
            </Button>
          </div>
          <p className="text-center text-sm">
            <span className="font-normal text-neutral-500">
              Have an account already?
            </span>{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Form>
    </form>
  )
}
