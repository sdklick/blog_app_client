"use client";

import { useState } from "react";
import { useWriteBlogMutation } from "@/redux/services/writeblogApi"; // adjust path

export default function CreateArticle() {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    title: "",
    excerpt: "",
    category: "",
    tags: "",
  });

  const [message, setMessage] = useState({ type: "", content: "" });
  const [writeBlog, { isLoading }] = useWriteBlogMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: "", content: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((val) => val.trim() === "")) {
      setMessage({ type: "error", content: "All fields are required." });
      return;
    }

    const articleData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await writeBlog(articleData).unwrap();
      setMessage({ type: "success", content: res.message || "Article created successfully!" });
      setFormData({ id: "", username: "", title: "", excerpt: "", category: "", tags: "" });
    } catch (err) {
      setMessage({
        type: "error",
        content: err.data?.message || "Error submitting article.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-inter selection:bg-indigo-500/30 relative overflow-hidden py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-indigo-400 text-sm font-medium shadow-sm backdrop-blur-sm">
            <span>✍️</span> Share your thoughts
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Create New Article
          </h1>
          <p className="text-slate-400 text-lg">
            Craft your next masterpiece and share it with the world.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {message.content && (
              <div className={`p-4 rounded-xl text-sm font-medium border backdrop-blur-sm transition-all duration-300 ${
                message.type === "error" 
                  ? "bg-red-500/10 border-red-500/20 text-red-400" 
                  : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              }`}>
                {message.content}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Article ID", name: "id", placeholder: "e.g., intro-to-ai" },
                { label: "Username", name: "username", placeholder: "e.g., johndoe" },
              ].map(({ label, name, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 ml-1">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 ml-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., A Beginner's Guide to AI"
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 ml-1">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of your article..."
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 resize-none h-32 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Category", name: "category", placeholder: "e.g., Technology" },
                { label: "Tags (comma separated)", name: "tags", placeholder: "e.g., ai, tech, future" },
              ].map(({ label, name, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 ml-1">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full group relative inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </>
                  ) : "Publish Article"}
                </span>
                {!isLoading && (
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
