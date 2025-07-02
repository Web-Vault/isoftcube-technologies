import { Users, Award, Clock, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Award, label: "Projects Completed", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "10+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
]

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in technology and business strategy.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Technical expert specializing in cloud architecture and AI solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Chen",
    role: "Head of Development",
    bio: "Full-stack developer with expertise in modern web technologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    bio: "Creative designer focused on user experience and interface design.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-[100px]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About iSoftcube Technologies</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a passionate team of technology experts dedicated to transforming businesses through innovative IT
              solutions. Since 2014, we've been helping companies navigate the digital landscape and achieve their
              goals.
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

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and
                  innovation. We believe in making complex technology accessible and beneficial for organizations of all
                  sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner that businesses trust for their digital transformation journey.
                  We envision a future where technology seamlessly integrates with business processes to create
                  unprecedented value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We stay at the forefront of technology, constantly exploring new solutions and approaches to solve
                  complex challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We deliver high-quality solutions that exceed expectations and provide long-term value to our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build lasting relationships with our clients, working as trusted partners in their success journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The talented individuals behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600" />
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
    </div>
  )
}
