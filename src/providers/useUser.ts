import { useContext } from "react"

import { UserContext } from "./UserProvider"

export function useUser() {
  const user = useContext(UserContext)

  if (!user)
    throw new Error("User context is being accessed outside of it's provider")

  return user
}
