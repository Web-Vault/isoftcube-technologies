"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
// import { services } from "@/lib/services-config" // Remove if not used for dynamic services

export default function Footer() {
  const [siteConfig, setSiteConfig] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseUrl}/api/siteconfig`)
      .then(res => res.json())
      .then(data => setSiteConfig(data));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {siteConfig?.logoUrl && (
                <img src={siteConfig.logoUrl} alt={siteConfig.siteName} className="h-8 w-8 rounded-lg" />
              )}
              <span className="text-xl font-bold">
                {siteConfig?.siteName || 'Company'}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative IT solutions. Your trusted partner for digital excellence.
            </p>
            <div className="flex space-x-4">
              {siteConfig?.socialLinks?.facebook && (
                <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig?.socialLinks?.twitter && (
                <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig?.socialLinks?.linkedin && (
                <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig?.socialLinks?.Instagram && (
                <a href={siteConfig.socialLinks.Instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Services (dynamic) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.length > 0 ? (
                services.slice(0, 6).map((service: any) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-gray-300 hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">Loading...</li>
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {siteConfig?.contactPhones?.map((phone: string) => (
                <div className="flex items-center gap-3" key={phone}>
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">{phone}</span>
                </div>
              ))}
              {siteConfig?.contactEmails?.map((email: string) => (
                <div className="flex items-center gap-3" key={email}>
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">{email}</span>
                </div>
              ))}
              {siteConfig?.contactAddress && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                  <span className="text-gray-300 whitespace-pre-line">
                    {(() => {
                      // Split the address into 3 lines by comma
                      const address = siteConfig.contactAddress;
                      const parts = address.split(",");
                      // If there are at least 3 parts, group them as requested
                      if (parts.length >= 3) {
                        return (
                          <>
                            {parts[0].trim()},<br />
                            {parts.slice(1, 3).join(",").trim()},<br />
                            {parts.slice(3).join(",").trim()}
                          </>
                        );
                      }
                      // Fallback: just show as is
                      return address;
                    })()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 {siteConfig?.siteName || 'Company'}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
