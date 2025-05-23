import {
  IForgotPassword,
  ILogin,
  IRegister,
  IResetPassword,
  IUpdatePassword,
} from "@/types"

import { BaseService } from "./base-service"

class AuthService extends BaseService {
  constructor() {
    super("user/auth")
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
}

export default AuthService
