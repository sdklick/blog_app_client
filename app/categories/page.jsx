"use client";
import Link from "next/link";
import Image from "next/image";
import { useGetCategoryQuery } from "@/redux/services/categoryApi";
import { FcSalesPerformance } from "react-icons/fc";

const CategoryPage = () => {
  const { data, isLoading, isError } = useGetCategoryQuery();

  const allCategory = data?.category;

  if (isLoading)
    return (
      <div className="flex bg-gray-900 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (isError) return <p className="text-red-500">Failed to load Category.</p>;

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-inter text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 animate-fadeInDown">
          Explore Our Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allCategory?.map((cdata) => (
            <Link key={cdata.category} href={`/categories/${cdata.category}`} className="block group">
              <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 relative cursor-pointer border border-gray-700 hover:border-blue-500">

                {/* Category Image/Icon */}
                <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700">
                  <Image
                    // Consider using a more dynamic or visually appealing image source for categories
                    // For now, keeping your placeholder with enhanced text color for visibility
                    src={`https://placehold.co/600x300/111827/93C5FD?text=${encodeURIComponent(cdata.category)}`}
                    width={600}
                    height={300}
                    alt={`${cdata.category} Category`}
                    className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between h-auto">
                  <h2 className="text-3xl text-center font-extrabold text-blue-300 mb-3 group-hover:text-blue-500 transition-colors duration-300 tracking-wide">
                    {cdata.category}
                  </h2>

                  <div className="flex items-center justify-center text-sm text-gray-400 mt-2">
                    <FcSalesPerformance size={22} className="mr-2 text-blue-400" />
                    <span className="font-medium">{cdata.totalPosts} Posts</span>
                  </div>
                </div>

                {/* Overlay for subtle hover effect */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>

                {/* Optional: Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
