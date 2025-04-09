import { boolean, date, object, string } from "zod"

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
