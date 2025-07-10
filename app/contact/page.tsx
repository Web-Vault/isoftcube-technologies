"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock, Badge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import Head from 'next/head';

// Dynamically import MapContainer and related components with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
)

// Use your actual office coordinates
const position: [number, number] = [23.0262791, 72.475893]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [siteConfig, setSiteConfig] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch(`${baseUrl}/api/siteconfig`)
        if (!res.ok) throw new Error("Failed to fetch site config")
        const data = await res.json()
        setSiteConfig(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchConfig()
  }, [])

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      import("leaflet").then(L => {
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitSuccess(null)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit form')
      setSubmitSuccess("Thank you for your message! We'll get back to you soon.")
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = siteConfig ? [
    {
      icon: Phone,
      title: "Phone",
      details: siteConfig.contactPhones || [],
    },
    {
      icon: Mail,
      title: "Email",
      details: siteConfig.contactEmails || [],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [siteConfig.contactAddress],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: Closed",
        "Sunday: Closed",
      ],
    },
  ] : []

  return (
    <>
      <Head>
        <title>Contact Us | Isoftcube Technologies - Get in Touch</title>
        <meta name="description" content="Contact Isoftcube Technologies for web, app, cloud, and digital solutions. Get in touch for project inquiries, support, or partnership opportunities. We're here to help you transform your business." />
        <meta name="keywords" content="Isoftcube, contact, get in touch, inquiry, support, web development, app development, cloud solutions, IT services, digital transformation, technology, software company" />
        <meta name="author" content="Isoftcube Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://isoftcube.com/contact" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Isoftcube Technologies - Get in Touch" />
        <meta property="og:description" content="Contact Isoftcube Technologies for web, app, cloud, and digital solutions. Get in touch for project inquiries, support, or partnership opportunities. We're here to help you transform your business." />
        <meta property="og:url" content="https://isoftcube.com/contact" />
        <meta property="og:image" content="https://isoftcube.com/og-image.jpg" />
        <meta property="og:site_name" content="Isoftcube Technologies" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Isoftcube Technologies - Get in Touch" />
        <meta name="twitter:description" content="Contact Isoftcube Technologies for web, app, cloud, and digital solutions. Get in touch for project inquiries, support, or partnership opportunities. We're here to help you transform your business." />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Isoftcube Technologies",
            "url": "https://isoftcube-technologies.onrender.com/",
            "logo": "https://isoftcube-technologies.onrender.com/favicon-96x96-1.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9998833373",
              "email": "info@isoftcubetechnologies.com",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "717, Shivalik Satyamev, Nr. Vakil Saheb Bridge, S.P. Ring Road, South Bopal, Bopal",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380058",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 23.0262791,
              "longitude": 72.475893
            },
            "description": "Contact Isoftcube Technologies for web, app, cloud, and digital solutions. Get in touch for project inquiries, support, or partnership opportunities. We're here to help you transform your business.",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/isoftcube-technologies/",
              "https://twitter.com/isoftcube",
              "https://www.facebook.com/isoftcube/"
            ]
          })
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-30 md:py-36">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
                Get In Touch With <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  iSoftcube Technologies
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Ready to start your next project? We'd love to hear from you. Let's discuss how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitSuccess && (
                      <div className="p-3 rounded bg-green-100 text-green-800 text-center">{submitSuccess}</div>
                    )}
                    {submitError && (
                      <div className="p-3 rounded bg-red-100 text-red-800 text-center">{submitError}</div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="app-development">App Development</SelectItem>
                            <SelectItem value="iot-solutions">IoT Solutions</SelectItem>
                            <SelectItem value="cloud-services">Cloud Services</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project requirements..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg mt-8" style={{ zIndex: 1 }}>
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ height: 350, width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>We are Here <br />717-Shivalik Satyamev</Popup>
                  </Marker>
                </MapContainer>
              </div>

            </div>

            

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Get in touch with us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {loading && <p>Loading contact info...</p>}
                  {error && <p className="text-red-500">{error}</p>}
                  {!loading && !error && contactInfo.map((info, idx) => (
                    <div className="flex items-start gap-4" key={info.title}>
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        {info.details.map((line: string, i: number) => (
                          <p className="text-gray-600" key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Need Immediate Help?</CardTitle>
                  <CardDescription className="text-blue-100">For urgent technical support or emergencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Call Emergency Support</Button>
                  <p className="text-sm text-blue-100 mt-4 text-center">Available 24/7 for existing clients</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
