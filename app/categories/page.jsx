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
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategory?.map((cdata, id) => (
            <Link key={cdata.category} href={`/categories/${cdata.category}`} className="block">
              <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group relative">
                {/* Category Icon & Background */}
                <div className="p-8 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={`https://placehold.co/400x200/111827/F3F4F6?text=${cdata.category}`}
                    width={400}
                    height={200}
                    alt="WordNext"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold text-[#D4AF37] mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    {cdata.category}
                  </h2>

                  <div className="flex items-center text-sm text-gray-300">
                    <FcSalesPerformance size={20} />
                    <span className="mx-2">{cdata.totalPosts} Posts</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
