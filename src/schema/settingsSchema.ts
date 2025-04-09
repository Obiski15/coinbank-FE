import { boolean, date, object, string } from "zod"

export const passwordResetSchema = object({
  current_password: string({ message: "Password is required" }).min(8, {
    message: "Password must be at least 8 characters long",
  }),
  new_password: string({ message: "Password is required" }).min(8, {
    message: "Password must be at least 8 characters long",
  }),

  confirm_password: string({ message: "Please confirm your password" }),
}).refine(data => data.new_password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const notificationsSchema = object({
  alert: boolean().default(false),
  merchantOrder: boolean().default(false),
  recommendations: boolean().default(false),
})

export const securitySchema = object({
  phone: object({
    code: string().default("234"),
    number: string({ message: "Phone number is required" })
      .min(11, {
        message: "Phone number must be at least 11 digits",
      })
      .max(12, {
        message: "Phone number must not exceed 12 digits",
      }),
  }),

  verification: object({
    text: boolean().default(false),
    mail: boolean().default(false),
  }),
})

export const preferencesSchema = object({
  timezone: string({
    message: "Timezone is required",
  }).min(1, { message: "Please select a timezone" }),

  currency: string({
    message: "Currency is required",
  }).min(1, { message: "Please select a currency" }),
})

export const profileSchema = object({
  first_name: string({ message: "First name is required" }).min(1, {
    message: "Please enter your first name",
  }),

  last_name: string({ message: "Last name is required" }).min(1, {
    message: "Please enter your last name",
  }),

  display_name: string({ message: "Display name is required" }).min(1, {
    message: "Please provide a display name",
  }),

  email: string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email cannot be empty" }),

  country: string({ message: "Country is required" }).min(1, {
    message: "Please select your country",
  }),

  dob: date({
    message: "Please enter your date of birth",
  }),
})
