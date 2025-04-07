import { object, string } from "zod"

export const forgotPasswordSchema = object({
  email: string({ message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase(),
})

export const loginSchema = forgotPasswordSchema.extend({
  password: string({ message: "Password is required" }).min(
    8,
    "Password must be 8 or more characters long"
  ),
})

export const signupSchema = loginSchema
  .extend({
    name: string({ message: "Name is required" }).trim().toLowerCase(),
    confirmPassword: string({ message: "Confirm Password is required" }).min(
      8,
      "Password must be 8 or more characters long"
    ),
  })
  .refine(val => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
