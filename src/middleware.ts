import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import axios, { AxiosError } from "axios"

import { IError } from "./types"

export async function middleware(request: NextRequest) {
  // get jwt token from cookie
  const token = (await cookies()).get("jwt")?.value

  // redirect if there is no token
  if (!token) return NextResponse.redirect(new URL("/login", request.nextUrl))

  // get user sesssion
  try {
    await axios.get(
      // consistent API base path to avoid cross-domain cookies issues by routing through the same origin.
      // check next.config

      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user`,
      {
        withCredentials: true,
        headers: {
          // including authorization header just incase
          Authorization: `Bearer ${token}`,
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
