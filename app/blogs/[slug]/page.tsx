import React from "react";
import { notFound } from "next/navigation";
import { blogData } from "../../../blog-data";
import Image from "next/image";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pb-16">
      {/* Hero Section - full width, centered text */}
      <div className="relative w-full h-[340px] md:h-[480px] flex items-center justify-center mb-16">
        {/* Hero Image with drop shadow and gradient border at bottom */}
        <div className="absolute inset-0">
          <Image
            src={`https://picsum.photos/seed/${blog.slug}-cover/1200/480`}
            alt={blog.title}
            fill
            className="object-cover w-full h-full rounded-b-2xl shadow-2xl"
            priority
          />
        </div>
        {/* Strong bottom-to-top gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl" />
        {/* Bottom-left hero text with animated accent bar */}
        <div className="absolute left-0 bottom-0 z-10 px-6 md:px-12 pb-8 w-full flex flex-col items-start">
          {/* Animated accent bar */}
          <span className="block h-1.5 w-16 md:w-24 mb-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_4px_32px_rgba(80,0,180,0.25)] mb-3 text-left leading-tight tracking-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100 text-base font-medium">
            <span className="bg-blue-600/80 px-3 py-1 rounded-full text-xs font-semibold shadow">By {blog.author}</span>
            <span>•</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold shadow">{new Date(blog.createdAt).toISOString().slice(0, 10)}</span>
          </div>
        </div>
      </div>
      {/* Main Content Section - wider, immersive layout */}
      <div className="w-full px-2 md:px-8">
        <div className="relative">
          <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full hidden md:block" />
          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-12 space-y-20 relative z-10">
            {blog.content.map((section, idx) => {
              const hasImage = !!section.image;
              const hasText = !!section.text;
              const isEven = idx % 2 === 0;
              // If only image, make it centered and contained, not full width
              if (hasImage && !hasText) {
                return (
                  <div key={idx} className="flex justify-center my-8">
                    <div className="w-full max-w-xl group">
                      <Image
                        src={`https://picsum.photos/seed/${blog.slug}-section${idx}/800/500`}
                        alt={blog.title + ' section image'}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-2xl shadow-xl border-2 border-blue-100 object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                );
              }
              // If image and text, alternate order based on index
              return (
                <div
                  key={idx}
                  className={
                    hasImage && hasText
                      ? `grid md:grid-cols-2 gap-12 items-center`
                      : 'flex flex-col items-center'
                  }
                >
                  {hasImage && hasText && idx % 2 === 0 ? (
                    <>
                      <div className="w-full group">
                        <Image
                          src={`https://picsum.photos/seed/${blog.slug}-section${idx}/800/500`}
                          alt={blog.title + ' section image'}
                          width={800}
                          height={500}
                          className="rounded-2xl shadow-xl border-2 border-blue-100 object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className={`text-xl text-gray-800 leading-relaxed space-y-6 relative`}>
                        <span className="block mx-2">{section.text}</span>
                      </div>
                    </>
                  ) : hasImage && hasText && idx % 2 === 1 ? (
                    <>
                      <div className={`text-xl text-gray-800 leading-relaxed space-y-6 relative`}>
                        <span className="block mx-2">{section.text}</span>
                      </div>
                      <div className="w-full group">
                        <Image
                          src={`https://picsum.photos/seed/${blog.slug}-section${idx}/800/500`}
                          alt={blog.title + ' section image'}
                          width={800}
                          height={500}
                          className="rounded-2xl shadow-xl border-2 border-blue-100 object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {hasImage && (
                        <div className="w-full group">
                          <Image
                            src={`https://picsum.photos/seed/${blog.slug}-section${idx}/800/500`}
                            alt={blog.title + ' section image'}
                            width={800}
                            height={500}
                            className="rounded-2xl shadow-xl border-2 border-blue-100 object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      {hasText && (
                        <div className={`text-xl text-gray-800 leading-relaxed space-y-6 ${hasImage ? '' : 'mx-auto max-w-3xl text-center'} relative`}>
                          {!hasImage && (
                            <span className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full hidden md:block" />
                          )}
                          <span className="block mx-2">{section.text}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 