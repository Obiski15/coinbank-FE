import {
  IForgotPassword,
  ILogin,
  IRegister,
  IResetPassword,
  IUpdatePassword,
} from "@/types"

import { BaseService } from "./base-service"

class AuthService extends BaseService {
  protected authProviderBaseUrl: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth`
  constructor() {
    super("auth")
  }

  async register(data: IRegister) {
    return await this.post<IRegister, unknown>("/register", { ...data })
  }

  async login(data: ILogin) {
    return await this.post<ILogin, unknown>("/login", { ...data })
  }

  async forgotPassword(data: IForgotPassword) {
    return await this.post<IForgotPassword, unknown>("/forgot-password", {
      ...data,
    })
  }

  async resetPassword(data: IResetPassword) {
    return await this.patch<IResetPassword, unknown>("/reset-password", {
      ...data,
    })
  }

  async updatePassword(data: IUpdatePassword) {
    return await this.patch<IUpdatePassword, unknown>("/password", { ...data })
  }

  googleAuth() {
    window.location.assign(`${this.authProviderBaseUrl}/google`)
  }

  facebookAuth() {
    window.location.assign(`${this.authProviderBaseUrl}/facebook`)
  }
}

export default AuthService
