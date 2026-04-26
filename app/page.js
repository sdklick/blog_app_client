"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiGrid, FiClock, FiChevronRight } from "react-icons/fi";
import { useGetArticlesQuery } from "@/redux/services/articlesApi";
import { useGetCategoryQuery } from "@/redux/services/categoryApi";
import NoArticles from "@/components/Noarticle";

const HomePage = () => {
  const {
    data: article,
    isLoading: isArticlesLoading,
    isError: isArticlesError,
  } = useGetArticlesQuery();
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useGetCategoryQuery();

  const firstThreeArticles = article?.articles?.slice(0, 3) || [];
  const firstThreecategories = categories?.category?.slice(0, 3) || [];

  if (isArticlesLoading || isCategoriesLoading)
    return (
      <div className="min-h-screen flex bg-slate-950 justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-sky-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        </div>
      </div>
    );

  if (isArticlesError || isCategoriesError)
    return (
      <div className="min-h-screen flex bg-slate-950 justify-center items-center text-red-400">
        Failed to load content. Please try again later.
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-8 lg:px-12 pt-32 pb-20 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-indigo-400 text-sm font-medium mb-8 shadow-sm backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Discover the latest trends
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-8 animate-fade-in-up delay-200">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">WordNext</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto mb-10 animate-fade-in-up delay-400">
            Your daily dose of insights on technology, lifestyle, food, travel,
            and more. Discover, learn, and grow with our expert articles.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-500">
            <Link
              href="/articles"
              className="group inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              <FiBookOpen className="w-5 h-5" />
              Read Articles
            </Link>
            <Link
              href="/categories"
              className="group inline-flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-700 hover:border-slate-600 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <FiGrid className="w-5 h-5" />
              Explore Categories
            </Link>
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative relative">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                Latest from the Blog
              </h2>
              <p className="text-slate-400">The most recent updates and stories.</p>
            </div>
          </div>

          {firstThreeArticles.length === 0 ? (
            <NoArticles />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {firstThreeArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.id}`} className="group block h-full">
                  <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-800/80 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative w-full h-56 overflow-hidden bg-slate-800">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-full text-indigo-300 border border-indigo-500/20">
                        {article.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 leading-tight">
                          {article.title}
                        </h3>
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
          )}
          
          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-sm font-medium rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              View All Articles <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Browse By Category
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Explore our curated selection of topics. Dive deep into the subjects that matter most to you.
            </p>
          </div>

          {firstThreecategories.length === 0 ? (
            <NoArticles />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {firstThreecategories.map((c) => (
                <Link
                  key={c.category}
                  href={`/categories/${c.category}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl transition-all duration-500 hover:border-sky-500/30 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
                    
                    <div className="relative w-full h-48 sm:h-56">
                      <Image
                        src={`https://placehold.co/600x400/0f172a/38bdf8?text=${encodeURIComponent(c.category)}`}
                        alt={`${c.category} category`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                          {c.category}
                        </h3>
                        <p className="text-slate-400 text-sm flex items-center gap-1.5 opacity-80">
                          <FiBookOpen className="w-3.5 h-3.5" />
                          {c.totalPosts} Posts
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-300 border border-white/5">
                        <FiChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-sm font-medium rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Explore All Categories <FiGrid className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.1s;
        }
        .delay-400 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
