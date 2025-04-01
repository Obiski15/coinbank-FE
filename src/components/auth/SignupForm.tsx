"use client"

import Image from "next/image"
import Link from "next/link"
import { signupSchema } from "@/schema/authSchema"
import { IRegister } from "@/types"
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

export default function SignupForm() {
  const form = useForm<IRegister>({
    resolver: zodResolver(signupSchema),
  })

  const _onSubmit: SubmitHandler<IRegister> = values => {
    console.log(values)
  }
  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter Fullname"
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
                    placeholder="Enter Password"
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
            name="confirmPassword"
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
              Create Account
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
              Sign up with Google
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
