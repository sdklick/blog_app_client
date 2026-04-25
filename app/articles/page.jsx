"use client";
import Link from "next/link";
import { useGetArticlesQuery } from "@/redux/services/articlesApi";
import { FiClock, FiArrowRight } from "react-icons/fi";

const ArticlesPage = () => {
  const { data, isLoading, isError } = useGetArticlesQuery();

  const allArticale = data?.articles || [];

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
        <p className="text-center text-lg bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20">Failed to load articles. Please try again later.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Articles</span>
          </h1>
          <p className="text-lg text-slate-400">
            Dive into our collection of expert insights, tutorials, and stories designed to inspire and educate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticale.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group block h-full"
            >
              <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-800/80 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="relative w-full h-56 overflow-hidden bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out bg-slate-800"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x250/1e293b/94a3b8?text=Image+Unavailable";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-full text-indigo-300 border border-indigo-500/20">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <FiClock className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-indigo-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
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

export default ArticlesPage;
