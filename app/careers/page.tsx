"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Briefcase,
  Filter,
  Zap,
  Star,
  Award,
  Target,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  DollarSign,
  Code,
  Smartphone,
  Shield,
  Cloud,
  Palette,
  Database,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import JobApplicationModal from "@/components/job-application-modal"

const iconMap = {
  Users,
  Briefcase,
  Filter,
  Zap,
  Star,
  Award,
  Target,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  DollarSign,
  Code,
  Smartphone,
  Shield,
  Cloud,
  Palette,
  Database,
  Headphones,
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState<any[]>([])
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set())
  const [filters, setFilters] = useState({
    department: "all",
    type: "all",
    experience: "all",
  })

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data)
        setFilteredJobs(data)
      })
  }, [])

  const departments = [...new Set(jobs.map((job) => job.department))]
  const types = [...new Set(jobs.map((job) => job.type))]
  const experienceLevels = [...new Set(jobs.map((job) => job.experience))]

  const handleApply = (job: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const toggleJobExpansion = (jobId: string) => {
    const newExpanded = new Set(expandedJobs)
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId)
    } else {
      newExpanded.add(jobId)
    }
    setExpandedJobs(newExpanded)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)

    let filtered = jobs
    if (newFilters.department !== "all") {
      filtered = filtered.filter((job) => job.department === newFilters.department)
    }
    if (newFilters.type !== "all") {
      filtered = filtered.filter((job) => job.type === newFilters.type)
    }
    if (newFilters.experience !== "all") {
      filtered = filtered.filter((job) => job.experience === newFilters.experience)
    }
    setFilteredJobs(filtered)
  }

  const perks = [
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for personal projects and learning new technologies",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Star,
      title: "Top Talent",
      description: "Collaborate with industry-leading professionals and experts",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance bonuses, equity options, and career advancement",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Global Impact",
      description: "Build products and solutions used by millions worldwide",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Section with Professional Touch */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

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

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Badge className="px-6 py-3 bg-white/10 text-white border-white/20 text-base backdrop-blur-sm font-medium">
                🚀 Join Our Mission
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                <span className="block">Build The</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Future Together
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Join a team of visionaries, innovators, and problem-solvers who are shaping tomorrow's technology
                landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Professional Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 border-0 font-medium">Life at iSoftcube</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Innovation
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meets Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've created an environment where talent thrives, innovation flourishes, and careers are built to last
            </p>
          </div>

          {/* Professional Perks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex p-4 w-max rounded-2xl bg-gradient-to-br ${perk.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <perk.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{perk.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings with Professional Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-800 border-0 font-medium">Open Positions</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Role
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover opportunities that match your passion and expertise
            </p>
          </div>

          {/* Professional Filters */}
          <div className="flex flex-wrap gap-4 mb-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <Filter className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-700">Filter by:</span>
            </div>
            <Select onValueChange={(value) => handleFilterChange("department", value)}>
              <SelectTrigger className="w-56 border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleFilterChange("type", value)}>
              <SelectTrigger className="w-48 border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleFilterChange("experience", value)}>
              <SelectTrigger className="w-56 border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <SelectValue placeholder="All Experience Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience Levels</SelectItem>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Expandable Job Cards */}
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => {
              const isExpanded = expandedJobs.has(job.id)
              const IconComponent = iconMap[job.icon as keyof typeof iconMap] || Briefcase;
              return (
                <Card
                  key={job.id}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative p-8">
                    {/* Main Job Info */}
                    <CardHeader className="p-0 mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-left">
                        <div>
                          <div className="relative p-4 w-max rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap justify-start items-center gap-2 text-sm text-gray-600">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0 font-medium">
                              {job.department}
                            </Badge>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {job.genderPreference}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center sm:justify-end gap-2">
                          <Badge variant="outline" className="border-purple-200 text-purple-700 font-medium">
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                      {/* Expandable Content */}
                      {isExpanded && (
                        <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                          <Separator />

                          {/* Additional Details */}
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="p-2 rounded-lg bg-blue-100">
                                <MapPin className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">Location</div>
                                <div className="text-sm">{job.location}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="p-2 rounded-lg bg-green-100">
                                <DollarSign className="h-4 w-4 text-green-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">Salary</div>
                                <div className="text-sm font-semibold text-green-600">
                                  {job.salary || "Competitive"}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="p-2 rounded-lg bg-orange-100">
                                <Calendar className="h-4 w-4 text-orange-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">Posted</div>
                                <div className="text-sm">{new Date(job.postedDate).toLocaleDateString()}</div>
                              </div>
                            </div>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req: string, reqIndex: number) => (
                                <li key={reqIndex} className="flex items-start gap-3 text-gray-600">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp: string, respIndex: number) => (
                                <li key={respIndex} className="flex items-start gap-3 text-gray-600">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit: string, benefitIndex: number) => (
                                <Badge
                                  key={benefitIndex}
                                  variant="secondary"
                                  className="bg-green-100 text-green-800 border-0"
                                >
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-6">
                        <Button
                          variant="ghost"
                          onClick={() => toggleJobExpansion(job.id)}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronUp className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              View Details
                              <ChevronDown className="h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <Button
                          onClick={() => handleApply(job)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Briefcase className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No positions found</h3>
              <p className="text-gray-500 text-lg mb-6">Try adjusting your filters to see more opportunities</p>
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white px-6 py-3 font-semibold transition-all duration-300 bg-transparent"
                onClick={() => {
                  setFilters({ department: "all", type: "all", experience: "all" })
                  setFilteredJobs(jobs)
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Job Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedJob(null)
        }}
      />
    </div>
  )
}
