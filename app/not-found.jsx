"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-lg text-center bg-white p-10 rounded-3xl shadow-2xl">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl shadow hover:bg-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" />
          Go back home
        </Link>
      </div>
    </div>
  );
}
