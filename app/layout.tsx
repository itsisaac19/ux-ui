import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "UX/UI Workshop — DX Hub AI Summer Camp",
    template: "%s | UX/UI Workshop",
  },
  description:
    "A hands-on interactive workshop on building great user experiences with React. Live code editor, real-time preview, and lessons on state, layout, typography, and accessibility.",
  openGraph: {
    title: "UX/UI Workshop — DX Hub AI Summer Camp",
    description:
      "Interactive lessons on UX and UI fundamentals with live code editing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX/UI Workshop — DX Hub AI Summer Camp",
    description:
      "Interactive lessons on UX and UI fundamentals with live code editing.",
  },
  metadataBase: new URL("https://ux-ui-summer-camp.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
