import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios"

// const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const createAxiosInstance = (
  clientURl: string,
  headers?: RawAxiosRequestHeaders
): AxiosInstance => {
  return axios.create({
    timeout: 30000,
    // baseURL: `${baseURL}/api/v1/${clientURl}`,
    baseURL: `/api/v1/${clientURl}`,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },

    withCredentials: true,
  })
}
