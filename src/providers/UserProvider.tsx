"use client"

import { createContext, ReactNode, useEffect, useState } from "react"
import { IError, IUserResponse } from "@/types"

import UserService from "@/app/api/services/user-service"

export const UserContext = createContext<IUserResponse | null>(null)

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | IUserResponse>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const user = await new UserService().getUser()
        setUser(user)
      } catch (e) {
        console.log((e as IError).error.message)
      }
    })()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default UserProvider
