'use client'
import Link from "next/link"
import { ArrowLeft, Home, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found | Isoftcube Technologies</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist at Isoftcube Technologies. Return to the homepage or explore our digital solutions." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://isoftcube.com/404" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 Not Found | Isoftcube Technologies" />
        <meta property="og:description" content="Sorry, the page you are looking for does not exist at Isoftcube Technologies. Return to the homepage or explore our digital solutions." />
        <meta property="og:url" content="https://isoftcube.com/404" />
        <meta property="og:image" content="https://isoftcube.com/og-image.jpg" />
        <meta property="og:site_name" content="Isoftcube Technologies" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Not Found | Isoftcube Technologies" />
        <meta name="twitter:description" content="Sorry, the page you are looking for does not exist at Isoftcube Technologies. Return to the homepage or explore our digital solutions." />
        <meta name="twitter:image" content="https://isoftcube.com/og-image.jpg" />
        <meta name="twitter:site" content="@isoftcube" />
        <meta name="twitter:creator" content="@isoftcube" />
        {/* Favicon */}
        <link rel="icon" href="/favicon-96x96-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Theme color */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
      </Head>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto py-24">
          <Cpu className="h-14 w-14 text-blue-500 mb-6 animate-fade-in-delayed" />
          <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tight mb-2 animate-squeeze">404</h1>
          <div className="w-full flex flex-col items-center animate-fade-in-delayed2">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">Page Not Found</h2>
            <p className="text-base md:text-lg text-slate-300 text-center mb-10 max-w-md">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.<br />
              Let&apos;s get you back to where you belong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-blue-600 text-blue-500 hover:bg-blue-50 font-semibold">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes squeeze {
          0% { transform: scaleY(1); }
          20% { transform: scaleY(0.5) scaleX(1.2); }
          40% { transform: scaleY(1.15) scaleX(0.95); }
          60% { transform: scaleY(0.92) scaleX(1.05); }
          80% { transform: scaleY(1.05) scaleX(0.98); }
          100% { transform: scaleY(1) scaleX(1); }
        }
        .animate-squeeze {
          animation: squeeze 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fade-in-delayed {
          0% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s 0.2s both;
        }
        .animate-fade-in-delayed2 {
          animation: fade-in-delayed 1.2s 0.5s both;
        }
      `}</style>
    </>
  )
}
