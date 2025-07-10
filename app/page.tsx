"use client"

import { useEffect, useState } from "react";
import { ArrowRight, Code, Smartphone, Wifi, Cloud, Shield, Zap, Play, Star, Users, Award, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

// const stats = [
//   { number: "500+", label: "Projects Delivered", icon: Award },
//   { number: "98%", label: "Client Satisfaction", icon: Star },
//   { number: "50+", label: "Expert Team", icon: Users },
//   { number: "24/7", label: "Support Available", icon: Shield },
// ]

export default function HomePage() {
  const [services, setServices] = useState<any[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseUrl}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Carousel for Google Reviews
  function GoogleReviewsCarousel() {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(0);
    const total = reviews.length;

    useEffect(() => {
      setLoading(true);
      fetch('/api/reviews')
        .then(res => res.json())
        .then(data => {
          setReviews(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

    const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

    if (loading) {
      return (
        <div className="w-full flex justify-center items-center py-20">
          <span className="text-lg text-gray-500 animate-pulse">Loading reviews...</span>
        </div>
      );
    }

    if (!reviews.length) {
      return (
        <div className="w-full flex justify-center items-center py-20">
          <span className="text-lg text-gray-500">No reviews found.</span>
        </div>
      );
    }

    const review = reviews[current];

    return (
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
        <div className="flex w-full items-center justify-center gap-4 md:gap-8 relative">
          {/* Previous review preview */}
          <div className="hidden md:flex flex-col items-center flex-shrink-0 w-1/4 opacity-40 scale-90 blur-sm pointer-events-none select-none transition-all duration-300">
            {(() => {
              const prevIndex = current === 0 ? reviews.length - 1 : current - 1;
              const prevReview = reviews[prevIndex];
              return (
                <div className="bg-gradient-to-br from-white/70 via-blue-50/60 to-purple-50/60 rounded-2xl shadow border border-blue-100/30 px-4 pt-10 pb-6 w-full flex flex-col items-center relative min-h-[320px] max-w-xs">
                  <img
                    src={prevReview.reviewer_picture_url}
                    alt={prevReview.reviewer_name}
                    className="w-14 h-14 rounded-full border-2 border-blue-300 shadow bg-white object-cover absolute -top-7 left-1/2 -translate-x-1/2 z-20"
                    style={{ zIndex: 20 }}
                  />
                  <div className="mt-8 text-center text-base font-medium text-gray-700 line-clamp-3">{prevReview.text}</div>
                  <div className="mt-4 text-sm text-gray-500">{prevReview.reviewer_name}</div>
                </div>
              );
            })()}
          </div>

          {/* Main review card */}
          <div className="relative flex-1 flex flex-col items-center z-10">
            {/* Navigation buttons outside the card */}
            <button
              onClick={prev}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/60 backdrop-blur shadow-lg border border-blue-100 hover:bg-blue-100 p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to previous review"
              style={{ boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)' }}
            >
              <ArrowRight className="rotate-180 text-blue-600 w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/60 backdrop-blur shadow-lg border border-blue-100 hover:bg-blue-100 p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to next review"
              style={{ boxShadow: '0 4px 24px 0 rgba(168,85,247,0.10)' }}
            >
              <ArrowRight className="text-blue-600 w-6 h-6" />
            </button>
            <div
              className="bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80 rounded-3xl shadow-2xl border border-blue-100/40 px-8 pt-16 pb-10 w-full flex flex-col items-center relative"
              style={{ minHeight: 440, maxWidth: 480, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.10), 0 1.5px 0 0 #a5b4fc' }}
            >
              {/* Floating avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                <img
                  src={review.reviewer_picture_url}
                  alt={review.reviewer_name}
                  className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-xl bg-white object-cover z-30"
                  style={{ boxShadow: '0 4px 24px 0 rgba(59,130,246,0.15)', zIndex: 30 }}
                />
                <Badge className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 border-0 font-medium flex items-center gap-1 shadow-sm z-20">
                  <svg width="18" height="18" viewBox="0 0 48 48" className="inline-block mr-1"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.166.896 7.163 2.393l6.084-6.084C33.684 6.053 28.994 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 19.824-8.955 19.824-20 0-1.341-.138-2.651-.213-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.69 0 5.166.896 7.163 2.393l6.084-6.084C33.684 6.053 28.994 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.356 0 10.065-1.797 13.82-4.889l-6.383-5.238C29.418 36 24 36 24 36c-5.408 0-9.963-3.167-11.303-8.083l-6.571 5.081C9.59 39.612 16.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.833-5.685 8-11.303 8-5.408 0-9.963-3.167-11.303-8.083l-6.571 5.081C9.59 39.612 16.268 44 24 44c7.732 0 14.41-4.388 17.694-10.691z"/></g></svg>
                  Google Review
                </Badge>
              </div>
              {/* Review text with faint quote icon and fade-out for overflow */}
              <div className="relative w-full flex flex-col items-center min-h-[120px] max-h-44 mt-8 mb-6">
                <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-100 opacity-40 z-0" size={64} />
                <p className="text-gray-800 text-base text-sm font-medium italic text-center px-2 z-10 w-full transition-all duration-300 relative" style={{maxHeight: '140px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical'}}>
                  {review.text}
                </p>
                {/* Fade-out for overflow */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/90 to-transparent z-20" />
              </div>
              {/* Divider */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-40 mx-auto mb-4" />
              {/* Reviewer info */}
              <div className="flex flex-col items-center">
                <div className="font-bold text-lg text-gray-900 mb-1 text-center">{review.reviewer_name}</div>
                <div className="flex items-center justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < review.rating ? '#facc15' : 'none'}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 text-center">{current + 1} / {total}</div>
              <a
                href="https://www.google.com/search?q=isoftcube+technologies+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-700 hover:text-purple-700 hover:underline text-sm font-semibold transition-colors"
              >
                See all reviews on Google
              </a>
            </div>
          </div>

          {/* Next review preview */}
          <div className="hidden md:flex flex-col items-center flex-shrink-0 w-1/4 opacity-40 scale-90 blur-sm pointer-events-none select-none transition-all duration-300">
            {(() => {
              const nextIndex = current === reviews.length - 1 ? 0 : current + 1;
              const nextReview = reviews[nextIndex];
              return (
                <div className="bg-gradient-to-br from-white/70 via-blue-50/60 to-purple-50/60 rounded-2xl shadow border border-blue-100/30 px-4 pt-10 pb-6 w-full flex flex-col items-center relative min-h-[320px] max-w-xs">
                  <img
                    src={nextReview.reviewer_picture_url}
                    alt={nextReview.reviewer_name}
                    className="w-14 h-14 rounded-full border-2 border-blue-300 shadow bg-white object-cover absolute -top-7 left-1/2 -translate-x-1/2 z-20"
                    style={{ zIndex: 20 }}
                  />
                  <div className="mt-8 text-center text-base font-medium text-gray-700 line-clamp-3">{nextReview.text}</div>
                  <div className="mt-4 text-sm text-gray-500">{nextReview.reviewer_name}</div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Isoftcube Technologies | Digital Excellence, Web & Mobile Solutions</title>
        <meta name="description" content="Isoftcube Technologies builds digital excellence through innovative web and mobile solutions. Transform your ideas into powerful products with our expert team." />
        <meta name="keywords" content="Isoftcube, web development, mobile app development, digital solutions, software company, innovation, technology, IT services, custom software, UI/UX design, cloud solutions" />
        <meta name="author" content="Isoftcube Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://isoftcube.com/" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Isoftcube Technologies | Digital Excellence, Web & Mobile Solutions" />
        <meta property="og:description" content="Isoftcube Technologies builds digital excellence through innovative web and mobile solutions. Transform your ideas into powerful products with our expert team." />
        <meta property="og:url" content="https://isoftcube.com/" />
        <meta property="og:image" content="https://isoftcube.com/og-image.jpg" />
        <meta property="og:site_name" content="Isoftcube Technologies" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Isoftcube Technologies | Digital Excellence, Web & Mobile Solutions" />
        <meta name="twitter:description" content="Isoftcube Technologies builds digital excellence through innovative web and mobile solutions. Transform your ideas into powerful products with our expert team." />
        <meta name="twitter:image" content="https://isoftcube.com/og-image.jpg" />
        <meta name="twitter:site" content="@isoftcube" />
        <meta name="twitter:creator" content="@isoftcube" />
        {/* Favicon */}
        <link rel="icon" href="/favicon-96x96-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Theme color */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Isoftcube Technologies",
              "alternateName": "Isoftcube",
              "url": "https://isoftcube-technologies.onrender.com/",
              "logo": "https://isoftcube-technologies.onrender.com/favicon-96x96-1.png",
              "sameAs": [
                "https://www.linkedin.com/company/isoftcube-technologies/",
                "https://twitter.com/isoftcube",
                "https://www.facebook.com/isoftcube/"
              ],
              "foundingDate": "2015-01-01",
              "founders": [
                { "@type": "Person", "name": "Bhavesh Kumbhani" },
              ],
              "numberOfEmployees": 2-10,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "717, Shivalik Satyamev, Nr. Vakil Saheb Bridge, S.P. Ring Road, South Bopal, Bopal",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
               "postalCode": "380058",
               "addressCountry": "IN"
              },
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-9998833373",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }],
              "description": "Isoftcube Technologies builds digital excellence through innovative web and mobile solutions. Transform your ideas into powerful products with our expert team."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://isoftcube-technologies.onrender.com/",
              "name": "Isoftcube Technologies",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://isoftcube-technologies.onrender.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <main className="flex flex-col min-h-screen overflow-hidden">
        {/* Hero Section with Professional Touch */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Subtle Animated Background */}
          {/* <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div> */}

          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <Badge className="px-6 py-3 bg-white/10 text-white border-white/20 text-base backdrop-blur-sm font-medium">
                  🚀 Innovation Starts Here
                </Badge>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                  <span className="block">We Build</span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Transforming ideas into powerful digital solutions that drive innovation, growth, and lasting success
                </p>
              </div>

              {/* Professional CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    aria-label="Start your project with Isoftcube Technologies"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>

                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-transparent"
                    aria-label="Learn more about Isoftcube Technologies"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Learn more about Isoftcube Technologies
                  </Button>
                </Link>
              </div>

              {/* Professional Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-300 text-center font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>

        {/* Services Section with Professional Layout */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-20">
              <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 border-0 font-medium">Our Expertise</Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Services That
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Drive Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with strategic thinking to deliver solutions that exceed expectations
              </p>
            </div>

            {/* Professional Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
                return (
                  <Card
                    key={service.slug || index}
                    className="group relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
                  >
                    {/* Subtle Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <CardHeader className="relative pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`relative p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transform group-hover:scale-110 transition-all duration-500`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 font-mono">0{index + 1}</div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                        {service.shortDescription || service.description}
                      </CardDescription>
                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(service.features || []).map((feature: string, featureIndex: number) => (
                          <Badge
                            key={featureIndex}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      {/* Learn More Button */}
                      <Link
                        href={`/services/${service.slug}`}
                      >
                        <Button
                          variant="ghost"
                          className="group/btn w-full justify-between p-0 h-auto text-left hover:bg-transparent font-medium"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          <span className="text-blue-600 group-hover:text-purple-600 transition-colors">Learn more about {service.title}</span>
                          <ArrowRight className="h-4 w-4 text-blue-600 group-hover/btn:text-purple-600 group-hover/btn:translate-x-1 transition-all" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {services.length > 6 && (
              <div className="flex justify-center mt-10">
                <Link href="/services">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    More Services
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us - Professional Split Layout */}
        <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20 font-medium">
                    Why Choose Us
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    We Don't Just Code,
                    <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      We Create Impact
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Our team combines technical expertise with strategic vision to deliver solutions that not only work
                    flawlessly but drive real business results.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Innovation First",
                      description: "We stay ahead of the curve with cutting-edge technologies and creative approaches.",
                      icon: Zap,
                    },
                    {
                      title: "Results Driven",
                      description: "Every project is measured by real business impact and measurable success metrics.",
                      icon: Award,
                    },
                    {
                      title: "Partnership Approach",
                      description:
                        "We work as an extension of your team, ensuring seamless collaboration and communication.",
                      icon: Users,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Professional Visual */}
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                  {/* Professional Cards */}
                  <div className="absolute inset-6 space-y-4">
                    {[
                      { status: "Active", color: "green", label: "Project Status" },
                      { status: "Online", color: "blue", label: "Team Collaboration" },
                      { status: "Enabled", color: "purple", label: "Innovation Mode" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 bg-${item.color}-400 rounded-full animate-pulse`}></div>
                          <span className="text-white text-sm font-medium">
                            {item.label}: {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* testimonials section - show google reviews here. */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2 bg-yellow-100 text-yellow-800 border-0 font-medium">Testimonials</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                What People Say About Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Real feedback from our valued clients on Google
              </p>
            </div>
            <GoogleReviewsCarousel />
          </div>
        </section>

        {/* Professional CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="px-6 py-3 bg-white/10 text-white border-white/20 text-base backdrop-blur-sm font-medium">
                  Ready to Get Started?
                </Badge>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Let's Build
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Something Amazing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Transform your vision into reality with our expert team. Get started with a free consultation today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    Get Started Today
                  </Button>
                </Link>

                <Link href="/contact" className="group text-white hover:text-blue-400 transition-colors duration-300">
                  <span className="text-lg font-semibold">Schedule a Call</span>
                  <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
