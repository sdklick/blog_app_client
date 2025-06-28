import Image from "next/image";
import Link from "next/link";
import { FcApproval, FcPrevious } from "react-icons/fc";
async function getArticle(id) {
  const res = await fetch(`${process.env.API_BASE_URL}/articles/${id}`, {
    cache: "no-store", // ensures fresh data every time (like getServerSideProps)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}

const Singlepage = async (props) => {
  const id = await props.params;
  const postData = await getArticle(id.singlepage);
  console.log(postData.image);

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
            {postData.tags && postData.tags.length > 0 && (
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
};

export default Singlepage;
