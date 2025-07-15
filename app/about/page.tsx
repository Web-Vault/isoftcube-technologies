"use client";

import { useEffect, useState } from "react";
import { Users, Award, Clock, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Head from 'next/head';

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Award, label: "Projects Completed", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "10+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
]

export default function AboutPage() {
  const [about, setAbout] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [siteName, setSiteName] = useState<string>("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseUrl}//api/about`)
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/siteconfig")
      .then(res => res.json())
      .then(data => {
        if (data.siteName) setSiteName(data.siteName);
      });
  }, []);

  if (loading || !about) {
    return (
      <div className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 justify-center text-xl text-white">Loading...</div>
    );
  }

  const pageTitle = `About Us | ${siteName || 'Isoftcube Technologies'}`;
  const pageDescription = about.sections && about.sections[0]?.content
    ? about.sections[0].content.slice(0, 160)
    : 'Learn more about Isoftcube Technologies, our mission, vision, values, and team.';
  const pageKeywords = 'Isoftcube, about, company, team, mission, vision, values, technology, software, web development, app development, digital transformation, innovation';
  const canonicalUrl = 'https://isoftcube.com/about';
  const ogImage = 'https://isoftcube.com/og-image.jpg';
  const author = 'Isoftcube Technologies';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteName || 'Isoftcube Technologies'} />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
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
            "name": siteName || 'Isoftcube Technologies',
            "url": "https://isoftcube-technologies.onrender.com/about",
            "logo": "https://isoftcube-technologies.onrender.com/favicon-96x96-1.png",
            "description": pageDescription,
            "foundingDate": "2015-01-01",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "717, Shivalik Satyamev, Nr. Vakil Saheb Bridge, S.P. Ring Road, South Bopal, Bopal",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380058",
              "addressCountry": "IN"
            },
            "member": about.teamMembers ? about.teamMembers.map((member: any) => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role,
              "description": member.bio,
              "image": member.image ? member.image : undefined
            })) : undefined,
            "sameAs": [
              "https://www.linkedin.com/company/isoftcube-technologies/",
              "https://twitter.com/isoftcube",
              "https://www.facebook.com/isoftcube/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9998833373",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "numberOfEmployees": 2-10,
            "founder": [
              { "@type": "Person", "name": "Bhavesh Kumbhani" }
            ],
          })
        }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-[100px]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {siteName || "iSoftcube Technologies"}
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {about.sections && about.sections[0]?.content}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision (now all sections) */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {about.sections && about.sections.map((section: any, idx: number) => (
                <Card className="border-0 shadow-lg" key={section.title}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        {about.ourValues && about.ourValues.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{about.valuesSubheading}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {about.ourValues.map((value: any, idx: number) => (
                <Card className="text-center border-0 shadow-lg" key={value.title}>
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Team Section */}
        {about.teamMembers && about.teamMembers.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{about.teamSubheading}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {about.teamMembers.map((member: any, index: number) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 overflow-hidden flex items-center justify-center">
                        <img src={member.image || "/placeholder-user.jpg"} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary">{member.role}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        )}
      </div>
    </>
  )
}
