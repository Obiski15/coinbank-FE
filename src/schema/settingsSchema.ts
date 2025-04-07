import { boolean, object } from "zod"

export const notificationsSchema = object({
  alert: boolean().default(false),
  merchantOrder: boolean().default(false),
  recommendations: boolean().default(false),
})
