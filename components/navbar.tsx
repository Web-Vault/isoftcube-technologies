"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ArrowRight, Code, Smartphone, Wifi, Cloud, Shield, Zap, Database, Cpu, Globe, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const iconMap = {
  Code,
  Smartphone,
  Wifi,
  Cloud,
  Shield,
  Zap,
  Database,
  Cpu,
  Globe,
  Headphones,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [services, setServices] = useState<any[]>([]);
  const [siteConfig, setSiteConfig] = useState<any>(null);

  const fallbackLogo = "/favicon-96x96-1.png";
  const fallbackName = "iSoftcube Technologies";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseUrl}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/siteconfig`)
      .then(res => res.json())
      .then(data => setSiteConfig(data));
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group" aria-label="Home">
          <div className="relative">
            <img
              src={siteConfig?.logoUrl || fallbackLogo}
              alt={siteConfig?.siteName || fallbackName}
              className="h-10 w-10 rounded-xl group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {(siteConfig?.siteName || fallbackName).split(" ")[0]}
            </span>
            <span
              className={`text-xs font-medium transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-gray-300"}`}
            >
              {(siteConfig?.siteName || fallbackName).split(" ").slice(1).join(" ")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
              isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200"
            }`}
            aria-label="Home"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200"
              }`}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-80 p-2 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl"
            >
              <div className="grid grid-cols-1 gap-1">
                {services.slice(0, 6).map((service) => {
                  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
                  return (
                    <DropdownMenuItem key={service.slug} asChild className="p-0">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-200">
                          <IconComponent className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-1">{service.shortDescription}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </div>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link
                  href="/services"
                  className="flex items-center justify-center p-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  View All Services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {["About", "Contact", "Careers", "Blogs"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200"
              }`}
              aria-label={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        {/* <div className="hidden lg:flex items-center space-x-3"> */}
          {/* <Button
            variant="ghost"
            size="sm"
            className={`font-medium transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                : "text-white hover:text-blue-200 hover:bg-white/10"
            }`}
          >
            Get Quote
          </Button> */}
          {/* <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Project
          </Button> */}
        {/* </div> */}

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-white hover:text-blue-200 hover:bg-white/10"
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
            {/* Visually hidden title for accessibility */}
            <span className="sr-only" id="mobile-nav-title">Main Navigation</span>
            <div className="flex flex-col space-y-6 mt-8 overflow-y-auto" aria-labelledby="mobile-nav-title">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
                aria-label="Home"
              >
                Home
              </Link>

              <div className="space-y-3">
                <div className="text-lg font-semibold text-gray-900 p-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.slice(0, 6).map((service) => {
                    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="mr-3 h-4 w-4" />
                        {service.title}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {["About", "Contact", "Careers", "Blogs"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                  aria-label={item}
                >
                  {item}
                </Link>
              ))}

              {/* <div className="pt-6 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                >
                  Get Quote
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  Start Project
                </Button>
              </div> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
