"use client";
import { useState, useRef } from "react";

const demoJob = {
  _id: "demo1234567890",
  title: "Demo Job Title",
  department: "Demo Department",
  location: "Demo Location",
  type: "Full-time",
};

export default function DemoJobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [output, setOutput] = useState<any>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }));
      setPdfUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a PDF file only.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput({ ...formData, job: demoJob });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-6">Demo Job Application Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              className="w-full border px-3 py-2 rounded"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Experience</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={formData.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Cover Letter</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              value={formData.coverLetter}
              onChange={(e) => handleChange("coverLetter", e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Resume (PDF)</label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
          <div className="mb-2"><b>Name:</b> {output.name}</div>
          <div className="mb-2"><b>Email:</b> {output.email}</div>
          <div className="mb-2"><b>Phone:</b> {output.phone}</div>
          <div className="mb-2"><b>Experience:</b> {output.experience}</div>
          <div className="mb-2"><b>Cover Letter:</b> {output.coverLetter}</div>
          <div className="mb-2"><b>Job Info:</b> {output.job.title} ({output.job.department}, {output.job.location}, {output.job.type})</div>
          {pdfUrl && (
            <div className="mt-4">
              <b>Resume PDF Preview:</b>
              <iframe src={pdfUrl} title="Resume PDF" className="w-full h-64 border mt-2" />
              <a
                href={pdfUrl}
                download={formData.resume?.name || "resume.pdf"}
                className="block mt-2 text-blue-600 underline"
              >
                Download Resume
              </a>
            </div>
          )}
          <button
            className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded font-semibold hover:bg-gray-300 transition"
            onClick={() => { setSubmitted(false); setOutput(null); setPdfUrl(null); setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "", resume: null }); }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
} 