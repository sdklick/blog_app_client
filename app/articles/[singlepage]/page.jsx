"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetArticleByIdQuery } from "@/redux/services/singleArticleApi";
import { FiArrowLeft, FiClock, FiTag, FiCheckCircle } from "react-icons/fi";

export default function Singlepage(props) {
  const params = React.use(props.params);
  const id = params.singlepage;

  const {
    data: postData,
    error,
    isLoading,
  } = useGetArticleByIdQuery(id, {
    skip: !id,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex bg-slate-950 justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-sky-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        </div>
      </div>
    );

  if (error) 
    return (
      <div className="min-h-screen flex bg-slate-950 px-6 justify-center items-center text-red-400">
        <p className="text-center text-lg bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20">Failed to load Article. Double check the URL.</p>
      </div>
    );

  if (!postData) return null;

  return (
    <main className="min-h-screen font-inter text-slate-300 bg-slate-950 pb-24 selection:bg-indigo-500/30">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 pb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {postData.category && (
              <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {postData.category}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <FiClock className="w-3.5 h-3.5" />
              Published
            </span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              <FiCheckCircle className="w-3.5 h-3.5" /> Official
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.15] tracking-tight">
            {postData.title}
          </h1>

          {/* Tags */}
          {postData.tags && postData.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <FiTag className="w-4 h-4 text-slate-500 mr-1" />
              {postData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Hero Image */}
        {postData.image && (
          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800">
            <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
            <Image
              src={postData.image}
              alt={postData.title}
              fill
              className="object-cover z-10"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-3xl pointer-events-none"></div>
          </div>
        )}

        {/* Content Section */}
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-900/50 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:text-slate-200 prose-strong:text-white">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            {postData.excerpt}
          </p>
          
          {/* Note: If the API provided actual HTML content, we would map it here dangerouslySetInnerHTML={{__html: postData.content}} */}
          {/* Since only excerpt exists, we add a decorative end mark */}
          
          <div className="mt-16 pt-8 border-t border-slate-800 flex justify-center">
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
