"use client"

import { useRef, useState } from "react"
import { profileSchema } from "@/schema/settingsSchema"
import { format } from "date-fns"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

import FormTitleGroup from "../FormTitleGroup"

export default function ProfileForm() {
  const [imagePreview, setImagePreview] = useState<string>("")
  const form = useForm<z.infer<typeof profileSchema>>()
  const imageRef = useRef<HTMLInputElement>(null)
  // image should be from DB
  const [image] = useState<string>("")

  function handleImageChange(image: File | null) {
    if (!image) return

    setImagePreview(URL.createObjectURL(image))
  }

  const _onSubmit: SubmitHandler<z.infer<typeof profileSchema>> = values => {
    console.log(values)
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(_onSubmit)}>
      <Form {...form}>
        <div className="flex items-start justify-between gap-8">
          <FormTitleGroup
            title="Contact Info"
            description="Manage your information"
          />

          <div className="w-[70%] rounded-lg border border-neutral-200">
            <div className="flex items-center justify-start gap-12 p-8">
              <div className="flex items-center justify-between gap-4">
                <div
                  style={{
                    backgroundImage: `url(${imagePreview || image})`,
                  }}
                  className="flex size-[88px] items-center justify-center rounded-full bg-primary-200 bg-cover bg-center bg-no-repeat shadow-[0px_0px_12px_0px_#ADA3F5_inset,0px_0px_30px_0px_#A191F31A]"
                >
                  <p
                    className={`text-display-sm font-medium tracking-[0.02rem] text-white [text-shadow:0px_4px_4px_0px_#A191F34D]`}
                  >
                    {!image && !imagePreview && "AB"}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h4 className="text-2xl font-medium tracking-[0.015rem] text-[#000000]">
                    Obi Emmanuel
                  </h4>
                  <p className="text-lg font-normal text-neutral-500">
                    obiski15@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  ref={imageRef}
                  onChange={e => handleImageChange(e.currentTarget.files![0])}
                />
                <Button
                  type="button"
                  variant="outline-primary"
                  onClick={() => {
                    imageRef.current?.click()
                  }}
                >
                  Upload photo
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-start gap-6 border-t border-neutral-200 p-8">
              <FormField
                name="display_name"
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="flex-1 space-y-2">
                    <FormLabel className="text-sm font-medium text-neutral-900">
                      Display name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Display Name" {...field} />
                    </FormControl>
                    <FormMessage>{error?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="flex-1 space-y-2">
                    <FormLabel className="text-sm font-medium text-neutral-900">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Email Address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-8">
          <FormTitleGroup
            title="Personal Info"
            description="Manage your information"
          />

          <div className="w-[70%] rounded-lg border border-neutral-200">
            <div className="space-y-6 p-8">
              <div className="flex items-center justify-start gap-6">
                <FormField
                  name="first_name"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem className="flex-1 space-y-2">
                      <FormLabel className="text-sm font-medium text-neutral-900">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage>{error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  name="last_name"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem className="flex-1 space-y-2">
                      <FormLabel className="text-sm font-medium text-neutral-900">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage>{error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="dob"
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                  <Popover>
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-neutral-900">
                        Date of birth
                      </FormLabel>
                      <FormControl>
                        <PopoverTrigger className="w-full">
                          <Input
                            className={cn(
                              "cursor-pointer",
                              !field.value && "text-neutral-500"
                            )}
                            value={
                              field.value
                                ? format(field.value, "P")
                                : "Date of birth"
                            }
                            readOnly
                          />
                        </PopoverTrigger>
                      </FormControl>
                      <FormMessage>{error?.message}</FormMessage>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          onSelect={field.onChange}
                          selected={field.value}
                          disabled={date => date > new Date()}
                        />
                      </PopoverContent>
                    </FormItem>
                  </Popover>
                )}
              />
              <FormField
                name="country"
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-neutral-900">
                      Country of residence
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country of residence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NGN">Nigeria</SelectItem>
                          <SelectItem value="USA">
                            United State of America
                          </SelectItem>
                          <SelectItem value="SA">South Africa</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>{error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </Form>
    </form>
  )
}
