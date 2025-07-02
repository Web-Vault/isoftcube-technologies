import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, Star, ArrowRight, Code, Smartphone, Wifi, Cloud, Shield, Zap, Database, Cpu, Globe, Headphones } from "lucide-react"
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
  Database,
  Cpu,
  Globe,
  Headphones,
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getService(slug: string) {
  const res = await fetch(`${baseUrl}/api/services/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  // console.log(res.json());
  return res.json();
}

async function getAllServices() {
  const res = await fetch(`${baseUrl}/api/services`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

interface ServicePageProps {
  params: { slug: string }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = await getService(slug);
  const services = await getAllServices();

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <div className="min-h-screen bg-white">
      {/* Simplified Header */}
      <div className="bg-gradient-to-r pt-10 from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex flex-col sm:flex-row items-left sm:items-start gap-4 mb-6 text-left sm:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur mb-2 sm:mb-0">
              <IconComponent className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{service.title}</h1>
              <p className="text-lg sm:text-xl text-blue-100 mt-2">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{service.fullDescription}</p>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sub-Services */}
            {service.subServices && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Specializations</h2>
                <div className="grid gap-6">
                  {service.subServices.map((subService: any, index: number) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{subService.name}</CardTitle>
                        <CardDescription className="text-gray-600">{subService.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {subService.technologies.map((tech: string, techIndex: number) => (
                              <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1 text-gray-600">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {subService.features.map((feature: string, featureIndex: number) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Link href="/contact">
                            <Button variant="outline" size="sm">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Business Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Business Benefits
                </CardTitle>
                <CardDescription>
                  How our {service.title.toLowerCase()} services drive your business forward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 capitalize">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Ready to Get Started?</CardTitle>
                <CardDescription className="text-blue-100">
                  Let's discuss your {service.title.toLowerCase()} needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact">
                  <Button className="mb-2 w-full bg-white text-blue-600 hover:bg-gray-100">Get Free Consultation</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@isoftcubetechnologies.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Other Services */}
            <Card>
              <CardHeader>
                <CardTitle>Other Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services
                    .filter((s: any) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((otherService: any) => {
                      const OtherIcon = iconMap[otherService.icon as keyof typeof iconMap] || Code;
                      return (
                        <Link
                          key={otherService.slug}
                          href={`/services/${otherService.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <OtherIcon className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{otherService.title}</span>
                        </Link>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/api/services`, { cache: "no-store" });
  const services = res.ok ? await res.json() : [];
  return services.map((service: any) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = params;
  const service = await getService(slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} - iSoftcube Technologies`,
    description: service.shortDescription,
  };
}
