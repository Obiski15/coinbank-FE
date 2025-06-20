"use client"

import { useEffect, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import isEqual from "lodash/isEqual"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import UserService from "@/app/api/services/user-service"
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
import ProfileFormSkeleton from "@/components/ui/skeleton/ProfileFormSkeleton"
import { profileSchema } from "@/schema/settings-schema"

import { formatZuluISO } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import { useUser } from "@/hooks/useUser"

import FormTitleGroup from "../FormTitleGroup"
import CloseAccount from "./CloseAccount"

export default function ProfileForm() {
  const { data: user, error, isLoading: isUserLoading, refetch } = useUser()
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      image: undefined,
      display_name: "",
      personal: {
        first_name: "",
        last_name: "",
        country: "NGN",
      },
    },
    mode: "onChange",
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const abortControllerRef = useRef<AbortController>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const initials = `${user?.data.user.personal?.first_name?.split("")[0]}${user?.data.user.personal?.last_name?.split("")[0]}`

  function handleImageChange(image: File | null) {
    if (image) {
      setImagePreview(URL.createObjectURL(image))
    }
  }

  function handleFieldBlur() {
    form.handleSubmit(_onSubmit)()
  }

  const watchedFieldValues = useWatch({
    control: form.control,
  })

  useEffect(() => {
    // execute if timeout is still active
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // execute if timeout is no longer active and request is ongoing
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }, [watchedFieldValues])

  useEffect(() => {
    if (watchedFieldValues.image) {
      handleFieldBlur()
    }
  }, [imagePreview])

  useEffect(() => {
    if (user) {
      const filteredObject = Object.keys(user.data.user)
        .filter(
          (key): key is Exclude<keyof typeof user.data.user, "image" | "_id"> =>
            key !== "image"
        )
        .reduce(
          (acc, key) => {
            acc[key] = user.data.user[key]
            return acc
          },
          {} as Record<string, unknown>
        )

      form.reset({
        ...filteredObject,
      })
    }
  }, [user, form])

  const _onSubmit: SubmitHandler<z.infer<typeof profileSchema>> = values => {
    //compare exact values before submitting
    const userProfileData = (
      Object.keys(values) as (keyof typeof values)[]
    ).reduce(
      (acc, key) => {
        acc[key] = user?.data.user[key]
        return acc
      },
      {} as Record<string, unknown>
    )

    const formValues = {
      ...values,
      image: values.image ?? userProfileData.image,
      personal: {
        ...values.personal,
        dob: values.personal.dob
          ? formatZuluISO(values.personal.dob)
          : undefined,
      },
    }

    console.log(userProfileData, formValues)
    if (!isEqual(userProfileData, formValues)) {
      timeoutRef.current = setTimeout(async () => {
        abortControllerRef.current = new AbortController()
        await new UserService().updateUser(values, {
          signal: abortControllerRef.current.signal,
        })
        toast.success("Field(s) Updated!")
        refetch()
      }, 2000)
    }
    return
  }
  if (isUserLoading) return <ProfileFormSkeleton />

  if (error) throw error

  return (
    <>
      <form className="space-y-6">
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
                      backgroundImage: `url(${imagePreview || user?.data?.user?.image})`,
                    }}
                    className="flex size-[88px] items-center justify-center rounded-full bg-primary-200 bg-cover bg-center bg-no-repeat shadow-[0px_0px_12px_0px_#ADA3F5_inset,0px_0px_30px_0px_#A191F31A]"
                  >
                    <p
                      className={`text-display-sm font-medium tracking-[0.02rem] text-white [text-shadow:0px_4px_4px_0px_#A191F34D]`}
                    >
                      {!user?.data?.user?.image && !imagePreview && initials}
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="text-2xl font-medium tracking-[0.015rem] text-[#000000]">
                      {user?.data?.user?.display_name ?? "user"}
                    </h4>
                    <p className="text-lg font-normal text-neutral-500">
                      {user?.data.user.email ?? "user@gmail.com"}
                    </p>
                  </div>
                </div>

                <div>
                  <FormField
                    name="image"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            hidden
                            type="file"
                            accept="image/*"
                            ref={imageRef}
                            onChange={e => {
                              field.onChange(e.currentTarget.files![0])
                              handleImageChange(e.currentTarget.files![0])
                            }}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="outline-primary"
                          onClick={() => {
                            imageRef.current?.click()
                          }}
                        >
                          Upload photo
                        </Button>
                        <FormMessage>{error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
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
                        <Input
                          placeholder="Enter Display Name"
                          {...field}
                          onBlur={() => {
                            field.onBlur()
                            handleFieldBlur()
                          }}
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
                    <FormItem className="flex-1 space-y-2">
                      <FormLabel className="text-sm font-medium text-neutral-900">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          readOnly
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
                    name="personal.first_name"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => (
                      <FormItem className="flex-1 space-y-2">
                        <FormLabel className="text-sm font-medium text-neutral-900">
                          First name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter first name"
                            {...field}
                            onBlur={() => {
                              field.onBlur()
                              handleFieldBlur()
                            }}
                          />
                        </FormControl>
                        <FormMessage>{error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="personal.last_name"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => (
                      <FormItem className="flex-1 space-y-2">
                        <FormLabel className="text-sm font-medium text-neutral-900">
                          Last name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter last name"
                            {...field}
                            onBlur={() => {
                              field.onBlur()
                              handleFieldBlur()
                            }}
                          />
                        </FormControl>
                        <FormMessage>{error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="personal.dob"
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
                            onDayBlur={handleFieldBlur}
                            selected={field.value}
                            disabled={date => date > new Date()}
                          />
                        </PopoverContent>
                      </FormItem>
                    </Popover>
                  )}
                />
                <FormField
                  name="personal.country"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-neutral-900">
                        Country of residence
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger onBlur={handleFieldBlur}>
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

      <CloseAccount />
    </>
  )
}
