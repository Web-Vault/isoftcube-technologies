"use client";
import { useEffect, useState } from "react";

export default function JobApplicationSuccess() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("jobApplicationSubmittedData");
      if (stored) {
        setData(JSON.parse(stored));
      }
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        No application data found. Please submit a job application first.
      </div>
    );
  }

  // Fix Cloudinary URL for PDF download
  const pdfUrl = data.resumeUrl?.replace('/image/upload/', '/raw/upload/');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Application Submitted Successfully!</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
        <div className="mb-2"><b>Name:</b> {data.name}</div>
        <div className="mb-2"><b>Email:</b> {data.email}</div>
        <div className="mb-2"><b>Phone:</b> {data.phone}</div>
        <div className="mb-2"><b>Experience:</b> {data.experience}</div>
        <div className="mb-2"><b>Cover Letter:</b> {data.coverLetter}</div>
        {data.job && (
          <div className="mb-2"><b>Job Info:</b> {data.job.title} ({data.job.department}, {data.job.location}, {data.job.type})</div>
        )}
        {pdfUrl && (
          <div className="mt-4">
            <b>Resume PDF:</b>
            <a
              href={pdfUrl}
              className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded font-semibold text-center hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
              download={data.name ? `${data.name.replace(/\s+/g, "_")}_resume.pdf` : "resume.pdf"}
            >
              Download Resume
            </a>
          </div>
        )}
        <button
          className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded font-semibold hover:bg-gray-300 transition"
          onClick={() => { localStorage.removeItem("jobApplicationSubmittedData"); window.location.href = "/careers"; }}
        >
          Back to Careers
        </button>
      </div>
    </div>
  );
} 