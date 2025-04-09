"use client"

import { passwordResetSchema } from "@/schema/settingsSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

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

import FormTitleGroup from "../FormTitleGroup"

function PasswordForm() {
  const form = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
  })

  const _onSubmit: SubmitHandler<
    z.infer<typeof passwordResetSchema>
  > = values => {
    console.log(values)
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
            name="new_password"
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
            <Button type="submit" className="float-right">
              Save
            </Button>
          </div>
        </Form>
      </form>
    </div>
  )
}

export default PasswordForm
