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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create New Article</h2>

        {message.content && (
          <p
            className={`text-sm font-medium ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.content}
          </p>
        )}

        {[
          { label: "ID", name: "id", placeholder: "intro-to-ai-for-indian" },
          { label: "Username", name: "username", placeholder: "your_username" },
          { label: "Title", name: "title", placeholder: "A Introduction to AI for Indian" },
          { label: "Excerpt", name: "excerpt", placeholder: "Demystifying AI: Basics & Applications…" },
          { label: "Category", name: "category", placeholder: "Technology" },
          { label: "Tags (comma separated)", name: "tags", placeholder: "ai,ml,tech" },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
            {name === "excerpt" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full border rounded px-4 py-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ) : (
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
