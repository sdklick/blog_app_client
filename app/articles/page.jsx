"use client";
import Link from "next/link";
import { useGetArticlesQuery } from "@/redux/services/articlesApi";

const ArticlesPage = () => {
  const { data, isLoading, isError } = useGetArticlesQuery();

  const allArticale = data?.articles;

  if (isLoading)
    return (
      <div className="flex bg-gray-900 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (isError) return <p className="text-red-500 text-center">Failed to load articles.</p>;

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticale?.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="block"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group relative">
                {/* Article Image */}
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
                  <h2 className="text-2xl font-bold text-[#D4AF37] mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h2>
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

                {/* Optional: Hover overlay */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
