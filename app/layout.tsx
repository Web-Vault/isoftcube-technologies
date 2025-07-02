import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iSoftcube Technologies - Modern IT Services & Digital Transformation",
  description:
    "Leading IT company providing web development, app development, IoT solutions, cloud services, and digital transformation. Transform your business with cutting-edge technology.",
  keywords:
    "IT services, web development, app development, IoT solutions, cloud services, digital transformation, cybersecurity",
  icons: {
    icon: "/favicon-96x96-1.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
