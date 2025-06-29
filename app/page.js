"use client";

import Link from "next/link";
import { FcComboChart } from "react-icons/fc";
import { FcAdvance } from "react-icons/fc";
import Image from "next/image";
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

  const firstThreeArticles = article?.articles?.slice(0, 3);
  const firstThreecategories = categories?.category?.slice(0, 3);

  if (isArticlesLoading || isCategoriesLoading)
    return (
      <div className="flex bg-gray-900 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (isArticlesError || isCategoriesError)
    return <p className="text-red-500">Failed to load articles.</p>;

  return (
    <div className="font-inter bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 sm:py-32 overflow-hidden shadow-inner">
        <div
          className="absolute inset-0 bg-pattern opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff20 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Welcome to <span className="text-yellow-300">WordNext</span> Blog
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your daily dose of insights on technology, lifestyle, food, travel,
            and more. Discover, learn, and grow with our expert articles.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
            <Link
              href="/articles"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-blue-700 bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Read Articles
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-full text-white hover:bg-white hover:text-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Explore Categories
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Latest from the Blog
          </h2>
          {firstThreeArticles.length == 0 ? (
            <NoArticles />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {firstThreeArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="block"
                >
                  <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/400x250/333333/AAAAAA?text=Image+Error";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm font-semibold text-blue-400 mb-2 block">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                          
                        </span>
                        <span className="text-blue-400 font-semibold group-hover:underline">
                          Read More &rarr;
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
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Browse By Category
          </h2>
          {firstThreecategories.length == 0 ? (
            <NoArticles />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {firstThreecategories.map((c) => (
    <Link
      key={c.category}
      href={`/categories/${c.category}`}
      className="hover:underline transition duration-200"
    >
      <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group overflow-hidden">
        
        {/* Full-width image */}
        <div className="relative bg-gray-800 w-full h-40 sm:h-48 overflow-hidden">
          <Image
            src={`https://placehold.co/600x300/1f2937/F3F4F6?text=${encodeURIComponent(c.category)}`}
            alt={`${c.category} image`}
            fill
            className="object-cover rounded-t-xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#D4AF37] text-center mb-2 group-hover:text-blue-400 transition-colors duration-200">
            {c.category}
          </h3>

          <div className="mt-6 flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-300">
              <FcComboChart size={18} className="mr-1 text-blue-400" />
              {c.totalPosts} Posts
            </div>
            <FcAdvance size={30} />
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

          )}

          {/* Explore All Categories Button */}
          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Explore All Categories
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Basic Tailwind CSS animations for hero section */}
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
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
