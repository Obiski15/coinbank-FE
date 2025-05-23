"use client"

import { useState } from "react"
import { IError } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import AuthService from "@/app/api/services/auth-services"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { passwordUpdateSchema } from "@/schema/settings-schema"

import FormTitleGroup from "../FormTitleGroup"

function PasswordForm() {
  const form = useForm<z.infer<typeof passwordUpdateSchema>>({
    resolver: zodResolver(passwordUpdateSchema),
  })

  const [status, setStatus] = useState<"idle" | "loading">("idle")

  const _onSubmit: SubmitHandler<
    z.infer<typeof passwordUpdateSchema>
  > = async values => {
    try {
      setStatus("loading")
      await new AuthService().updatePassword(values)
      form.reset({
        current_password: "",
        password: "",
        confirm_password: "",
      })
      toast.success("Password updated successfully")
    } catch (error) {
      const err = error as IError
      toast.error(err.error.message)
    } finally {
      setStatus("idle")
    }
  }

  return (
    <div className="flex items-start justify-between gap-8">
      <FormTitleGroup
        title="Change password"
        description="Remember not to store your password in your email or cloud and don't share it with anyone"
      />

      <form
        className="w-[70%] space-y-6 rounded-lg border border-neutral-200 p-6"
        onSubmit={form.handleSubmit(_onSubmit)}
      >
        <Form {...form}>
          <FormField
            name="current_password"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Old password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter old password" {...field} />
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
                  New password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter new password" {...field} />
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
                  Confirm new password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Confirm new password" {...field} />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="py-8">
            <Button
              type="submit"
              disabled={!(status === "loading")}
              className="float-right"
            >
              Save
            </Button>
          </div>
        </Form>
      </form>
    </div>
  )
}

export default PasswordForm
