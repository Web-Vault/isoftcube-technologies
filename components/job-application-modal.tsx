"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, User, Briefcase, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import type { Job } from "@/lib/jobs-config"

interface JobApplicationModalProps {
  job: Job | null
  isOpen: boolean
  onClose: () => void
}

export default function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(`Thank you for applying to ${job?.title}! We'll review your application and get back to you soon.`)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resume: null,
    })
    setCurrentStep(1)
    setIsSubmitting(false)
    onClose()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }))
    } else {
      alert("Please upload a PDF file only.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (!job) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50 border-0 shadow-2xl">
        {/* Header with Job Info */}
        <DialogHeader className="relative pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                {job.icon ? <job.icon className="h-6 w-6 text-white" /> : <code className="h-6 w-6 text-white" />}
                
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Apply for {job.title}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 mt-2">
                  <Badge className="bg-blue-100 text-blue-800 border-0">{job.department}</Badge>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">
                    {job.location}
                  </Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                </DialogDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-8 text-sm text-gray-600">
            <span className={currentStep >= 1 ? "text-blue-600 font-semibold" : ""}>Personal Info</span>
            <span className={currentStep >= 2 ? "text-blue-600 font-semibold" : ""}>Experience</span>
            <span className={currentStep >= 3 ? "text-blue-600 font-semibold" : ""}>Final Details</span>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 pt-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  <User className="h-6 w-6 text-blue-600" />
                  Personal Information
                </h3>
                <p className="text-gray-600">Let's start with your basic details</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="border-2 border-gray-200 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="border-2 border-gray-200 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="border-2 border-gray-200 focus:border-blue-400 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  Professional Background
                </h3>
                <p className="text-gray-600">Tell us about your experience and expertise</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm font-semibold text-gray-700">
                  Years of Experience *
                </Label>
                <Select onValueChange={(value) => handleChange("experience", value)}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-purple-400 transition-colors">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                    <SelectItem value="1-3">1-3 years (Junior)</SelectItem>
                    <SelectItem value="3-5">3-5 years (Mid-Level)</SelectItem>
                    <SelectItem value="5-8">5-8 years (Senior)</SelectItem>
                    <SelectItem value="8-12">8-12 years (Lead)</SelectItem>
                    <SelectItem value="12+">12+ years (Expert)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter" className="text-sm font-semibold text-gray-700">
                  Why are you interested in this position?
                </Label>
                <Textarea
                  id="coverLetter"
                  rows={6}
                  value={formData.coverLetter}
                  onChange={(e) => handleChange("coverLetter", e.target.value)}
                  placeholder="Tell us what excites you about this role and how your experience aligns with our needs..."
                  className="resize-none border-2 border-gray-200 focus:border-purple-400 transition-colors"
                />
              </div>

              {/* Job Requirements Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Key Requirements for this role:
                </h4>
                <ul className="space-y-2">
                  {job.requirements.slice(0, 4).map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Step 3: Resume Upload */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  <FileText className="h-6 w-6 text-green-600" />
                  Upload Your Resume
                </h3>
                <p className="text-gray-600">Share your resume to complete your application</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume" className="text-sm font-semibold text-gray-700">
                  Resume (PDF) *
                </Label>
                <div className="relative">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="resume"
                    className="cursor-pointer block border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-blue-50"
                  >
                    <div className="flex flex-col items-center gap-4">
                      {formData.resume ? (
                        <>
                          <div className="p-4 rounded-full bg-green-100">
                            <FileText className="h-12 w-12 text-green-600" />
                          </div>
                          <div>
                            <span className="text-lg font-semibold text-green-600 block">{formData.resume.name}</span>
                            <span className="text-sm text-gray-500">Click to change file</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-4 rounded-full bg-blue-100">
                            <Upload className="h-12 w-12 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-lg font-semibold text-gray-700 block">
                              Click to upload your resume
                            </span>
                            <span className="text-sm text-gray-500">PDF files only, max 10MB</span>
                          </div>
                        </>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Application Summary */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Application Summary</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <span className="ml-2 font-semibold">{formData.name || "Not provided"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    <span className="ml-2 font-semibold">{formData.email || "Not provided"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Experience:</span>
                    <span className="ml-2 font-semibold">{formData.experience || "Not selected"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Resume:</span>
                    <span className="ml-2 font-semibold">{formData.resume ? "Uploaded" : "Not uploaded"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div>
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 transition-colors bg-transparent"
                >
                  Previous Step
                </Button>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                className="px-6 py-3 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && (!formData.name || !formData.email)) ||
                    (currentStep === 2 && !formData.experience)
                  }
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={
                    isSubmitting || !formData.name || !formData.email || !formData.experience || !formData.resume
                  }
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Application...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
