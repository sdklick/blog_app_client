"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetArticleByIdQuery } from "@/redux/services/singleArticleApi";
import { FcApproval, FcPrevious } from "react-icons/fc";

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
      <div className="flex bg-gray-900 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (error) return <p className="text-red-500">Failed to load Category.</p>;
  if (!postData) return null;

  return (
    <div className="container-fluid font-sans text-white bg-gray-950">
      <article className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        {postData.image && (
          <div className="relative w-full h-72">
            <Image
              src={postData.image}
              alt={postData.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-t-xl"
            />
          </div>
        )}

        <div className="p-6 md:p-10">
          <div className="text-gray-400 text-sm mb-8 flex flex-wrap items-center space-x-3 md:space-x-5">
            {postData.category && (
              <span className="bg-blue-900 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                {postData.category}
              </span>
            )}
            <span>&bull;</span>
            <span>Published:</span>
            <span>
              <FcApproval />
            </span>
            {postData.tags?.length > 0 && (
              <>
                <span>&bull;</span>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {postData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-white text-xs font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/articles">
                  <FcPrevious size={25} />
                </Link>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {postData.title}
          </h1>

          <p className="text-lg text-gray-300 mb-6 italic">
            {postData.excerpt}
          </p>
        </div>
      </article>
    </div>
  );
}
