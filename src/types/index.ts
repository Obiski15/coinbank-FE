import { TypeOf } from "zod"

import { passwordUpdateSchema, profileSchema } from "@/schema/settings-schema"
import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
} from "@/schema/user-schema"

export interface IError {
  status: string
  error: {
    message: string
    statusCode: number
  }
}

// response interfaces
interface BaseResponse {
  status: "success" | "fail"
}

export interface IUserResponse extends BaseResponse {
  data: {
    user: {
      _id: string
      email: string
      image?: string
      display_name: string
      personal?: {
        first_name?: string
        last_name?: string
        country?: string
        dob?: string
        phone?: {
          code: number
          number: number
        }
      }
    }
  }
}

export type IRegister = TypeOf<typeof signupSchema>
export type ILogin = TypeOf<typeof loginSchema>
export type IForgotPassword = TypeOf<typeof forgotPasswordSchema>
export type IUpdatePassword = TypeOf<typeof passwordUpdateSchema>
export type IResetPassword = TypeOf<typeof resetPasswordSchema> & {
  resetToken: string
}
export type IUpdateUser = TypeOf<typeof profileSchema>
