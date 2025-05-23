"use client"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { preferencesSchema } from "@/schema/settings-schema"

import FormTitleGroup from "../FormTitleGroup"

export default function PreferencesForm() {
  const form = useForm<z.infer<typeof preferencesSchema>>({
    resolver: zodResolver(preferencesSchema),
  })

  const _onSubmit: SubmitHandler<
    z.infer<typeof preferencesSchema>
  > = values => {
    console.log(values)
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="flex items-start justify-between gap-6">
          <FormTitleGroup title="Timezone" description="Change timezone" />
          <FormField
            name="timezone"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="w-[70%] rounded-lg border border-neutral-200 p-8">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Timezone
                </FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-start justify-between gap-6">
          <FormTitleGroup title="Currency" description="Change currency" />
          <FormField
            name="currency"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <FormItem className="w-[70%] rounded-lg border border-neutral-200 p-8">
                <FormLabel className="text-sm font-medium text-neutral-900">
                  Currency
                </FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="py-8">
          <Button className="float-right">Save</Button>
        </div>
      </Form>
    </form>
  )
}
