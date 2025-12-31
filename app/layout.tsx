import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

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
        <link rel="icon" href="/favicon-96x96-1.png" />
        <meta name="google-site-verification" content="RVb0tdqlJUDgf_poJPCVS6pWfJ36LW7ZlyyImYcXs9A" />
        <meta name="google-site-verification" content="fnjiyn9DD--604iA2NqmnX1a9bjGa8UwGNJfAymv07U" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F19NB1LCJN"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F19NB1LCJN');
        `}
      </Script>

      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
