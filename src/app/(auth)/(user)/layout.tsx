import Intro from "@/components/auth/Intro"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid max-h-screen grid-cols-12 items-start justify-start">
          {children}
          <Intro />
        </div>
      </body>
    </html>
  )
}
