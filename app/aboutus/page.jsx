import Link from "next/link";
import { FiTarget, FiUsers, FiHeart, FiTrendingUp, FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-inter selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sky-400 text-sm font-medium mb-4 shadow-sm backdrop-blur-sm">
            <span>✨</span> Discover our story
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Welcome to WordNext
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            We believe in the power of storytelling. Whether you're here for cutting-edge <strong className="text-slate-200 font-medium">tech</strong>, inspiring <strong className="text-slate-200 font-medium">lifestyle</strong> insights, or continuous <strong className="text-slate-200 font-medium">self-growth</strong> — you've found your tribe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-24">
          {/* Card 1 */}
          <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FiTarget className="w-7 h-7 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              To deliver content that genuinely inspires, informs, and empowers you to thrive in the complex intersection of the digital and real world.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FiUsers className="w-7 h-7 text-sky-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              We are a passionate collective of creators, coders, and forward-thinkers dedicated to sharing valuable ideas that create real-world impact.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FiHeart className="w-7 h-7 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Topics We Love</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 text-sm group/item">
                <FiTrendingUp className="w-4 h-4 mr-3 text-purple-500/50 group-hover/item:text-purple-400 transition-colors" />
                <span className="group-hover/item:text-slate-200 transition-colors">Tech & Programming</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm group/item">
                <FiTrendingUp className="w-4 h-4 mr-3 text-purple-500/50 group-hover/item:text-purple-400 transition-colors" />
                <span className="group-hover/item:text-slate-200 transition-colors">Mindfulness & Growth</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm group/item">
                <FiTrendingUp className="w-4 h-4 mr-3 text-purple-500/50 group-hover/item:text-purple-400 transition-colors" />
                <span className="group-hover/item:text-slate-200 transition-colors">Trends & Inspiration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900/80 backdrop-blur-md border border-slate-800 p-10 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Subtle CTA Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to collaborate?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We’d love to connect with like-minded individuals. Whether you want to share a story, pitch an idea, or just say hello—our inbox is always open.
            </p>
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get in Touch
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
