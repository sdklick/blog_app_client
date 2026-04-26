"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetCategoryByNameQuery } from "@/redux/services/categorytypeApi";
import { FiClock, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Categorytype = (props) => {
  const params = React.use(props.params);
  const category = params.categorytype;
  const { data, error, isLoading } = useGetCategoryByNameQuery(category);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!data || data.length === 0)) {
      router.push("/categories");
    }
  }, [data, isLoading, router]);

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
        <p className="text-center text-lg bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20">Failed to load articles for this category. Please try again later.</p>
      </div>
    );

  if (!data || data.length === 0) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-sky-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Categories
          </Link>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 capitalize">
            {decodeURIComponent(category)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Articles</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Discover the latest stories and insights related to {decodeURIComponent(category)}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((articletype) => (
            <Link
              key={articletype._id}
              href={`/articles/${articletype.id}`}
              className="group block h-full"
            >
              <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-800/80 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.05)]">
                <div className="relative w-full h-56 overflow-hidden bg-slate-800">
                  <Image
                    src={articletype.image}
                    alt={articletype.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-full text-sky-300 border border-sky-500/20 capitalize">
                    {decodeURIComponent(category)}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {articletype.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                      {articletype.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <FiClock className="w-4 h-4" />
                      {new Date(articletype.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-sky-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Read <FiArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorytype;
