"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetCategoryByNameQuery } from "@/redux/services/categorytypeApi";

const Categorytype = (props) => {
  const params = React.use(props.params);
  const category = params.categorytype;
  const { data, error, isLoading } = useGetCategoryByNameQuery(category);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!data || data.length === 0)) {
      router.push("/categories"); // 🔁 redirect to /category
    }
  }, [data, isLoading, router]);

  if (isLoading)
    return (
      <div className="flex bg-gray-900 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (error)
    return <p className="text-red-500 text-center">Failed to load articles.</p>;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((articletype) => (
            <Link
              key={articletype._id}
              href={`/articles/${articletype.id}`}
              className="block"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group relative">
                {/* Article Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={articletype.image}
                    alt={articletype.title}
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
                    {articletype.title}
                  </h2>
                  <p className="text-gray-300 text-base mb-4 line-clamp-3">
                    {articletype.excerpt}
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
                      {new Date(articletype.date).toLocaleDateString("en-US", {
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

export default Categorytype;
