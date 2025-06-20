import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import axios, { AxiosError } from "axios"

import { IError } from "./types"

export async function middleware(request: NextRequest) {
  // get refreshToken from cookies
  const refreshToken = (await cookies()).get("refreshToken")?.value
  const accessToken = (await cookies()).get("accessToken")?.value

  // redirect user to login if token isn't available
  if (!refreshToken)
    return NextResponse.redirect(new URL("/login", request.nextUrl))

  // get user session
  try {
    await axios.get(
      // consistent API base path to avoid cross-domain cookies issues by routing through the same origin.
      // check next.config

      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`,
      {
        withCredentials: true,
        headers: {
          refreshToken: `Bearer ${refreshToken}`,
          accessToken: `Bearer ${accessToken}`,
        },
      }
    )
    return NextResponse.next()
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data?.error?.message)
      const err = e.response?.data as IError

      if (err.status === "error") {
        // redirect to a custom error page)
        const redirectUrl = new URL("/ran", request.url)
        redirectUrl.searchParams.set(
          "redirect",
          request.nextUrl.pathname + request.nextUrl.search
        )
        return NextResponse.redirect(redirectUrl)
      } else {
        const redirectUrl = new URL("/login", request.url)
        redirectUrl.searchParams.set(
          "redirect",
          request.nextUrl.pathname + request.nextUrl.search
        )
        return NextResponse.redirect(redirectUrl)
      }
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // ✅ matches /dashboard and all subpaths
}
