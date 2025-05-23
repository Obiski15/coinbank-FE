"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { notificationsSchema } from "@/schema/settings-schema"

export default function NotificationsForm() {
  const form = useForm<z.infer<typeof notificationsSchema>>({
    resolver: zodResolver(notificationsSchema),
    defaultValues: {
      alert: false,
      merchantOrder: false,
      recommendations: false,
    },
  })

  const _onSubmit: SubmitHandler<
    z.infer<typeof notificationsSchema>
  > = values => {
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(_onSubmit)} className="w-[70%]">
      <Form {...form}>
        <div className="space-y-6 border-b border-neutral-200 p-8">
          <div className="flex items-center justify-between gap-4 text-sm font-medium">
            <p className="text-neutral-900">Email</p>
            <button
              className="text-primary hover:underline"
              onClick={() =>
                form.reset({
                  merchantOrder: false,
                  alert: false,
                  recommendations: false,
                })
              }
            >
              Clear all
            </button>
          </div>

          <div className="space-y-4">
            <FormField
              name="alert"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal text-neutral-900">
                    When I receive merchant orders
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              name="merchantOrder"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal text-neutral-900">
                    When I send or receive crypto
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              name="recommendations"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal text-neutral-900">
                    When there are recommended actions for my account
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="float-right mt-8" type="submit">
          Save
        </Button>
      </Form>
    </form>
  )
}
