export interface IForgotPassword {
  email: string
}

export interface ILogin extends IForgotPassword {
  password: string
}

export interface IRegister extends ILogin {
  name: string
  confirmPassword: string
}
