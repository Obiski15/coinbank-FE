import { useQuery } from "@tanstack/react-query"

import UserService from "@/app/api/services/user-service"

export function useUser() {
  const { data, refetch, isLoading, error } = useQuery({
    queryFn: async () => await new UserService().getUser(),

    queryKey: ["user"],
  })

  return { data, isLoading, error, refetch }
}
