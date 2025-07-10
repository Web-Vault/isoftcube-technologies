"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Wifi, Cloud, Shield, Zap, Play, Star, Users, Award, Workflow, Lightbulb, ThumbsUp, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Head from 'next/head';

const iconMap = {
  Code,
  Smartphone,
  Wifi,
  Cloud,
  Shield,
  Zap,
  Play,
  Star,
  Users,
  Award,
};

const placeholderImg = "/placeholder.jpg";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseUrl}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | Isoftcube Technologies - Web, App, Cloud & Digital Solutions</title>
        <meta name="description" content="Explore Isoftcube Technologies' full range of services: web development, mobile app development, cloud solutions, IoT, cybersecurity, and more. Empower your business with innovative digital solutions tailored to your needs." />
        <meta name="keywords" content="Isoftcube, services, web development, mobile app development, cloud solutions, IoT, cybersecurity, IT consulting, digital transformation, software company, technology, innovation" />
        <meta name="author" content="Isoftcube Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://isoftcube.com/services" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | Isoftcube Technologies - Web, App, Cloud & Digital Solutions" />
        <meta property="og:description" content="Explore Isoftcube Technologies' full range of services: web development, mobile app development, cloud solutions, IoT, cybersecurity, and more. Empower your business with innovative digital solutions tailored to your needs." />
        <meta property="og:url" content="https://isoftcube.com/services" />
        <meta property="og:image" content="https://isoftcube.com/og-image.jpg" />
        <meta property="og:site_name" content="Isoftcube Technologies" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Isoftcube Technologies - Web, App, Cloud & Digital Solutions" />
        <meta name="twitter:description" content="Explore Isoftcube Technologies' full range of services: web development, mobile app development, cloud solutions, IoT, cybersecurity, and more. Empower your business with innovative digital solutions tailored to your needs." />
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
            "@type": "ItemList",
            "name": "Services at Isoftcube Technologies",
            "description": "Explore the full range of digital, web, app, cloud, and IT services offered by Isoftcube Technologies.",
            "url": "https://isoftcube-technologies.onrender.com/services",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://isoftcube-technologies.onrender.com/services/${service.slug}`,
              "name": service.title,
              "description": service.shortDescription || service.description || undefined
            }))
          })
        }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Themed Header */}
        <header className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge className="mb-6 px-5 py-2 bg-white/10 text-cyan-200 border-0 font-medium text-base backdrop-blur-sm">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Solutions That Power Your Digital Ambitions
            </h1>
            <p className="text-lg md:text-2xl text-cyan-100 max-w-2xl mx-auto font-light">
              From web and app development to cloud, IoT, and cybersecurity, our expert team delivers innovative IT solutions tailored to your business needs. Explore how we can help you thrive in the digital era.
            </p>
          </div>
        </header>
        {/* Services List */}
        <div className="max-w-5xl mx-auto flex flex-col gap-12 py-16 px-4">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
            const imageUrl = service.image || placeholderImg;
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.slug || index}
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow text-white">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</span>
                  </div>
                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed text-base">
                    {service.shortDescription || service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(service.features || []).map((feature: string, featureIndex: number) => (
                      <Badge
                        key={featureIndex}
                        variant="secondary"
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="ghost"
                      className="group/btn px-0 h-auto text-left hover:bg-transparent font-medium"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span className="text-blue-600 group-hover:text-purple-600 transition-colors">Learn more about {service.title}</span>
                      <ArrowRight className="h-4 w-4 text-blue-600 group-hover/btn:text-purple-600 group-hover/btn:translate-x-1 transition-all ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* How We Work Section (P.S.) */}
        <section className="relative w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 py-20 px-4 mt-24 border-t border-blue-100 dark:border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-5 py-2 bg-blue-100 text-blue-800 border-0 font-medium text-base dark:bg-blue-900/30 dark:text-cyan-200">
              P.S. — How We Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-cyan-200 mb-6">Our Approach to Digital Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <Workflow className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-cyan-100 mb-1">Collaborative Process</h3>
                  <p className="text-gray-700 dark:text-slate-300">We work closely with you at every step, ensuring your vision is realized and your goals are met.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <Lightbulb className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-cyan-100 mb-1">Innovation & Expertise</h3>
                  <p className="text-gray-700 dark:text-slate-300">Our team leverages the latest technologies and creative thinking to deliver future-ready solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                  <ThumbsUp className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-cyan-100 mb-1">Quality & Transparency</h3>
                  <p className="text-gray-700 dark:text-slate-300">We maintain the highest standards and keep you informed throughout the project lifecycle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Rocket className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-cyan-100 mb-1">Results That Matter</h3>
                  <p className="text-gray-700 dark:text-slate-300">We focus on delivering measurable impact and long-term value for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
