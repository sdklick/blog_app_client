"use client";

import { useState } from "react";
import { useSendContactMutation } from "@/redux/services/contactApi";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sendContact, { isLoading, isSuccess, isError, error, reset }] = useSendContactMutation();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset();
    try {
      await sendContact(form).unwrap();
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {}
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 font-inter selection:bg-indigo-500/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 border border-slate-800 animate-fade-in-up">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 animate-fade-in-up delay-200">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto animate-fade-in-up delay-400">
            Have a question, feedback, or just want to say hello? Fill out the form and we'll get back to you shortly.
          </p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {isError && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center">
            {error?.data?.message || "Something went wrong. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up delay-500">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 transition-all duration-300 focus:bg-slate-800"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 transition-all duration-300 focus:bg-slate-800"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 transition-all duration-300 focus:bg-slate-800"
              placeholder="Regarding a blog post..."
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 resize-y transition-all duration-300 focus:bg-slate-800"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center items-center py-3 px-10 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.1s; }
        .delay-400 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default ContactPage;
