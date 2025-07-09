"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../blog-data";
import { FaThLarge, FaList, FaArrowRight } from "react-icons/fa";

export default function BlogsPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-[400px] md:min-h-[500px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 via-purple-800/30 to-indigo-800/20 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Explore Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Insights, stories, and tips from our team on technology, business, and innovation.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="md:w-80 w-full md:sticky md:top-32 mb-8 md:mb-0">
            <nav className="bg-gradient-to-b from-white/95 to-blue-50/60 shadow-lg border border-blue-100/40 py-4 px-0 flex flex-col gap-0 rounded-2xl relative">
              <div className="px-6 pb-2 pt-1 text-xs font-bold tracking-widest text-blue-700/80 uppercase select-none">All Blogs</div>
              {blogData.map((blog, idx) => (
                <Link
                  key={blog.slug}
                  href={`#blog-${blog.slug}`}
                  className={`flex items-center gap-2 pl-3 pr-4 py-2 font-medium text-gray-700 text-sm transition-all duration-200 cursor-pointer relative
                    ${hovered === idx ? "border-l-3 border-blue-600 bg-blue-50/60 translate-x-2 font-semibold text-blue-700" : "border-l-3 border-transparent"}
                    hover:border-blue-400 hover:bg-blue-50/40 hover:translate-x-2 hover:text-blue-600`}
                  style={{ borderRadius: 0 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  tabIndex={0}
                >
                  <span className={`w-2 h-2 rounded-full mr-2 transition-colors duration-200 ${hovered === idx ? "bg-blue-600" : "bg-blue-200"}`}></span>
                  <span className="line-clamp-1 text-sm flex-1 transition-colors duration-200">{blog.title}</span>
                  <span className="block text-xs text-gray-400 mt-0.5">{blog.author}</span>
                </Link>
              ))}
            </nav>
          </aside>
          {/* Blog Main Section */}
          <main className="flex-1 flex flex-col">
            {/* Layout Switcher */}
            <div className="flex items-center justify-end mb-8">
              <div className="flex items-center gap-3 bg-white/80 border border-blue-500 rounded-2xl px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-gray-500 mr-2 select-none">View:</span>
                <button
                  className={`p-2 rounded-full flex items-center justify-center text-lg transition-all duration-200
                    ${layout === 'grid' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-110' : 'bg-transparent text-blue-700 hover:bg-blue-50'}`}
                  onClick={() => setLayout('grid')}
                  aria-label="Grid view"
                >
                  <FaThLarge />
                </button>
                <button
                  className={`p-2 rounded-full flex items-center justify-center text-lg transition-all duration-200
                    ${layout === 'list' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-110' : 'bg-transparent text-blue-700 hover:bg-blue-50'}`}
                  onClick={() => setLayout('list')}
                  aria-label="List view"
                >
                  <FaList />
                </button>
              </div>
            </div>
            {/* Blog Grid/List */}
            {layout === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
                {blogData.map((blog, idx) => (
                  <Link
                    key={blog.slug}
                    id={`blog-${blog.slug}`}
                    href={`/blogs/${blog.slug}`}
                    className="block group h-full"
                  >
                    <div className="flex flex-col bg-white rounded-3xl shadow-md border border-blue-100/30 hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden h-full">
                      {/* Image with date badge */}
                      <div className="relative w-full h-48">
                        <Image
                          src={`https://picsum.photos/seed/blog${idx}/600/300`}
                          alt={blog.title}
                          width={600}
                          height={300}
                          className="object-cover w-full h-48 rounded-t-3xl transition-transform duration-300"
                          priority={idx < 3}
                        />
                        {/* White fade at bottom of image */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none z-10 rounded-b-none rounded-t-3xl" />
                        <span className="absolute top-4 left-4 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full shadow font-semibold z-20">
                          {new Date(blog.createdAt).toISOString().slice(0, 10)}
                        </span>
                      </div>
                      {/* Card Content */}
                      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                        <div className="flex items-center mb-2">
                          <span className="w-1.5 h-12 rounded bg-gradient-to-b from-blue-500 to-cyan-400 mr-3" />
                          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
                            {blog.title}
                          </h2>
                        </div>
                        <p className="text-gray-500 mb-4 flex-1 line-clamp-3 text-base">
                          {blog.summary}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow">
                              {blog.author[0]}
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{blog.author}</span>
                          </div>
                          <span className="">
                            <span className="inline-flex items-center gap-2 border border-blue-200 bg-white text-blue-700 text-sm px-4 py-2 rounded-full font-semibold shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
                              Read More <FaArrowRight className="ml-1 text-inherit text-base" />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {blogData.map((blog, idx) => (
                  <Link
                    key={blog.slug}
                    id={`blog-${blog.slug}`}
                    href={`/blogs/${blog.slug}`}
                    className="block group"
                  >
                    <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-md border border-blue-100/30 hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden">
                      <div className="relative w-full sm:w-64 flex-shrink-0 h-48 sm:h-auto">
                        <Image
                          src={`https://picsum.photos/seed/blog${idx}/600/300`}
                          alt={blog.title}
                          width={600}
                          height={300}
                          className="object-cover w-full h-48 sm:h-full rounded-t-3xl sm:rounded-l-3xl sm:rounded-t-none group-hover:scale-105 transition-transform duration-300"
                          priority={idx < 3}
                        />
                        <span className="absolute top-4 left-4 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full shadow font-semibold z-20">
                          {new Date(blog.createdAt).toISOString().slice(0, 10)}
                        </span>
                      </div>
                      <div className="flex flex-col flex-1 px-8 py-8 min-h-0">
                        <h2 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        <p className="text-gray-500 mb-4 flex-1 line-clamp-3 text-base">
                          {blog.summary}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow">
                              {blog.author[0]}
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{blog.author}</span>
                          </div>
                          <span className="">
                            <span className="inline-flex items-center gap-2 border border-blue-200 bg-white text-blue-700 text-sm px-4 py-2 rounded-full font-semibold shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
                              Read More <FaArrowRight className="ml-1 text-inherit text-base" />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
} 