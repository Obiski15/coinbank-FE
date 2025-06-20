import VerifyEmail from "@/components/dashboard/shared/verify-email"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="max-lg:hidden">
        <VerifyEmail />
        {children}
      </div>

      <div className="flex h-screen items-center justify-center bg-black text-white lg:hidden">
        <div className="space-y-2 p-5 text-center text-sm font-medium tracking-wide">
          <h1 className="text-md font-medium uppercase">
            Oops! Screen Too Small
          </h1>
          <p>
            Our dashboard needs a bit more space to shine. For the best
            experience and full functionality, please use a laptop or desktop.
          </p>
        </div>
      </div>
    </>
  )
}
