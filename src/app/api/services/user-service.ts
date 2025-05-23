import { IUpdateUser, IUserResponse } from "@/types"
import { AxiosRequestConfig } from "axios"

import { BaseService } from "./base-service"

export default class UserService extends BaseService {
  constructor() {
    super("user")
  }

  async getUser() {
    return await this.get<IUserResponse>("")
  }

  async updateUser(data: IUpdateUser, config: AxiosRequestConfig) {
    const formData = new FormData()

    Object.entries(data).map(([key, value]) => {
      if (value === undefined) return

      if (key === "personal") {
        Object.entries(data[key]).map(([personalKey, personalValue]) => {
          if (personalValue === undefined) return

          formData.append(
            `${key}.${personalKey}`,
            personalValue instanceof Date
              ? personalValue.toISOString()
              : personalValue
          )
        })
        // safe-parse due to ts error
      } else if (value instanceof File) {
        formData.append(key, value)
      } else {
        formData.append(key, String(value))
      }
    })

    return await this.patch<FormData, unknown>("", formData, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  async deleteUser() {
    return await this.delete("")
  }
}
