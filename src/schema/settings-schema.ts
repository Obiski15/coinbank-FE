import { boolean, custom, date, object, string } from "zod"

export const passwordUpdateSchema = object({
  current_password: string({
    required_error: "Please enter your current password",
  }).min(8, {
    message: "Password must be at least 8 characters long",
  }),
  password: string({ required_error: "Please enter your new password" }).min(
    8,
    {
      message: "Password must be at least 8 characters long",
    }
  ),

  confirm_password: string({
    required_error: "Please confirm your new password",
  }),
}).refine(data => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
})

export const notificationsSchema = object({
  alert: boolean().default(false),
  merchantOrder: boolean().default(false),
  recommendations: boolean().default(false),
})

export const securitySchema = object({
  phone: object({
    code: string().default("234"),
    number: string({ required_error: "Please enter your phone number" })
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
    required_error: "Timezone is required",
  }).min(1, { message: "Please select a timezone" }),

  currency: string({
    message: "Currency is required",
  }).min(1, { message: "Please select a currency" }),
})

export const profileSchema = object({
  display_name: string({
    required_error: "Please enter your display name",
  }).min(1, {
    message: "Please provide a display name",
  }),

  email: string({ required_error: "Please enter your email address" })
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email cannot be empty" }),

  image: custom<File>()
    .optional()
    .refine(file => !file || file.type.startsWith("image/"), {
      message: "Only images are allowed to be sent",
    })
    .refine(file => !file || file.size <= 5 * 1024 * 1024, {
      message: "Profile picture must be a maximum of 5MB",
    }),

  personal: object({
    first_name: string({ required_error: "Please enter your first name" }).min(
      1,
      {
        message: "Please provide a valid first name",
      }
    ),
    last_name: string({ required_error: "Please enter your Last name" }).min(
      1,
      {
        message: "Please provide a valid last name",
      }
    ),
    country: string({ required_error: "Please select your country" }).min(1, {
      message: "Please provide a valid country name",
    }),
    dob: date({
      required_error: "Kindly select your date of birth",
      invalid_type_error: "Invalid date format",
    }),
  }),
})
