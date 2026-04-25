"use client";
import Link from "next/link";
import Image from "next/image";
import { useGetCategoryQuery } from "@/redux/services/categoryApi";
import { FiBookOpen, FiChevronRight } from "react-icons/fi";

const CategoryPage = () => {
  const { data, isLoading, isError } = useGetCategoryQuery();

  const allCategory = data?.category || [];

  if (isLoading)
    return (
      <div className="min-h-screen flex bg-slate-950 justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-sky-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        </div>
      </div>
    );

  if (isError) 
    return (
      <div className="min-h-screen flex bg-slate-950 px-6 justify-center items-center text-red-400">
        <p className="text-center text-lg bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20">Failed to load categories. Please try again later.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Categories</span>
          </h1>
          <p className="text-lg text-slate-400">
            Browse through our beautifully curated topics and find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCategory.map((cdata) => (
            <Link key={cdata.category} href={`/categories/${cdata.category}`} className="group block">
              <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl transition-all duration-500 hover:border-sky-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
                
                <div className="relative w-full h-56 sm:h-64">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse z-0"></div>
                  <Image
                    src={`https://placehold.co/600x400/0f172a/38bdf8?text=${encodeURIComponent(cdata.category)}`}
                    fill
                    alt={`${cdata.category} Category`}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 z-0 bg-slate-800"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                    {cdata.category}
                  </h2>

                  <div className="flex items-center justify-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <FiBookOpen className="w-4 h-4 text-sky-500/70 group-hover:text-sky-400 transition-colors" />
                    <span className="font-medium">{cdata.totalPosts} Posts</span>
                  </div>
                  
                  <div className="mt-4 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-sky-500 transition-all duration-300 border border-white/5">
                    <FiChevronRight className="w-5 h-5" />
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

export default CategoryPage;
