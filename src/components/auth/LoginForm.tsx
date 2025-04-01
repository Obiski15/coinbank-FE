"use client"

import Image from "next/image"
import Link from "next/link"
import { loginSchema } from "@/schema/authSchema"
import { ILogin } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

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

export default function LoginForm() {
  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  })

  const _onSubmit: SubmitHandler<ILogin> = values => {
    console.log(values)
  }
  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="space-y-4">
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
                <FormMessage className="text-sm font-medium text-error">
                  {error?.message}
                </FormMessage>
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
                    placeholder="Email Password"
                    className="px-6 py-3"
                  />
                </FormControl>
                <FormMessage className="text-sm font-medium text-error">
                  {error?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <p>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password
            </Link>
          </p>
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <Button
              type="button"
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
              Sign in with Google
            </Button>
            <Button
              type="button"
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
              Sign in with Facebook
            </Button>
          </div>
          <p className="text-center text-sm">
            <span className="font-normal text-neutral-500">
              Don&apos;t have an account already?
            </span>{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </Form>
    </form>
  )
}
