import Link from "next/link";
export default function NoArticles() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-center px-4">
      <div className="bg-white p-10 rounded-xl shadow-md max-w-md w-full">
        <img
          src="https://placehold.co/200x150/E0E7FF/3730A3?text=No+Data"
          alt="No Articles"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h2>
        <p className="text-gray-600 mb-4">
          Looks like there are no articles published yet. Please check back later.
        </p>
        <Link
          href="/writeblog"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
        >
          Write Your First Article
        </Link>
      </div>
    </div>
  );
}
