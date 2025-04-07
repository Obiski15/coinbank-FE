import { boolean, object, string } from "zod"

export const notificationsSchema = object({
  alert: boolean().default(false),
  merchantOrder: boolean().default(false),
  recommendations: boolean().default(false),
})

export const securitySchema = object({
  phone: object({
    code: string().default("234"),
    number: string({ message: "Phone number is required" })
      .max(12, {
        message: "Phone number must not exceed 12 digits",
      })
      .min(11, {
        message: "Phone number must be at least 11 digits",
      }),
  }),

  verification: object({
    text: boolean().default(false),
    mail: boolean().default(false),
  }),
})
