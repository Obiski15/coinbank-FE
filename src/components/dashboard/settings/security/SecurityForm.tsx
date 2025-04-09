"use client"

import Image from "next/image"
import { securitySchema } from "@/schema/settingsSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

import FormTitleGroup from "../FormTitleGroup"

export default function SecurityForm() {
  const form = useForm<z.infer<typeof securitySchema>>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      phone: {
        code: "+234",
      },
      verification: {
        text: false,
        mail: false,
      },
    },
  })

  const watchedPhone = useWatch({
    control: form.control,
    name: "phone",
  })

  const _onSubmit: SubmitHandler<z.infer<typeof securitySchema>> = values => {
    console.log(values)
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <FormField
          name="phone.number"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex items-start justify-between gap-8">
              <FormTitleGroup
                title="Phone Number"
                description="Keep your phone number up-to-date"
              />

              <div className="w-[70%] space-y-2 rounded-lg border border-neutral-200 p-8">
                <p className="text-sm font-medium text-neutral-900">
                  Phone Number
                </p>

                <div className="flex items-center justify-between gap-4">
                  <FormField
                    name="phone.code"
                    control={form.control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Country code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+234">+234</SelectItem>
                          <SelectItem value="+312">+312</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormControl className="flex-1">
                    <Input
                      type="number"
                      {...field}
                      placeholder="Enter phone number"
                    />
                  </FormControl>
                </div>
                <FormMessage>{error?.message}</FormMessage>
              </div>
            </FormItem>
          )}
        />

        <div className="flex items-start justify-between gap-8">
          <FormTitleGroup
            title="Two-step verification"
            description="Select your two-step verification method"
          />

          <div className="w-[70%] space-y-8 rounded-lg border border-neutral-200 p-8">
            <FormField
              name="verification.text"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-1 items-center justify-between">
                  <div className="flex flex-1 items-center justify-start gap-4">
                    <Image
                      src="/icons/dashboard/message.svg"
                      alt="message"
                      width={40}
                      height={40}
                    />

                    <FormTitleGroup
                      className="space-y-1 p-0"
                      title="Text Message"
                      description={`When you sign in, you will receive OTP code to approve your login to your number ${watchedPhone.code}${watchedPhone.number ?? ""}`}
                    />
                  </div>

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="verification.mail"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-1 items-center justify-between">
                  <div className="flex flex-1 items-center justify-start gap-4">
                    <Image
                      src="/icons/dashboard/mail.svg"
                      alt="mail"
                      width={40}
                      height={40}
                    />

                    <FormTitleGroup
                      className="space-y-1 p-0"
                      title="Email"
                      description="When you sign in, you will receive notification to approve your login on your email andresamosa@mail.com"
                    />
                  </div>

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="float-right">
          Save
        </Button>
      </Form>
    </form>
  )
}
