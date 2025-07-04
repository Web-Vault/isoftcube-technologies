"use client"

import { useEffect, useState } from "react";
import { ArrowRight, Code, Smartphone, Wifi, Cloud, Shield, Zap, Play, Star, Users, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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
                >
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
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
                      >
                        <span className="text-blue-600 group-hover:text-purple-600 transition-colors">Learn More</span>
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
    </div>
  )
}
