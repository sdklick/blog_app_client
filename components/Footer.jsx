import Link from "next/link";
import { SiGmail } from "react-icons/si";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const currentYear = new Date().getFullYear();

const ModernFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-6 sm:px-8 lg:px-12 font-inter relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* About Section */}
        <div className="md:col-span-5 flex flex-col items-start bg-slate-900/40 p-8 rounded-3xl backdrop-blur-xl border border-slate-800/50 shadow-sm">
          <Link href="/" className="inline-block mb-6">
            <h3 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400">
              WordNext
            </h3>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
            Your premier source for insightful articles, cutting-edge tech tutorials, and lifestyle inspirations. We're dedicated to enriching your knowledge and sparking curiosity.
          </p>
          <div className="flex gap-4 mt-auto">
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Linkedin" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaFacebookF className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="md:col-span-3 flex flex-col pt-4">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            Quick Links
            <span className="w-8 h-[2px] bg-indigo-500/50 rounded-full"></span>
          </h3>
          <ul className="space-y-4">
            {[
              { name: 'Articles', path: '/articles' },
              { name: 'Categories', path: '/categories' },
              { name: 'About Us', path: '/aboutus' },
              { name: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="group flex items-center text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <span className="w-5 overflow-hidden flex items-center">
                    <FiArrowRight className="w-4 h-4 -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                  <span className="transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-4 flex flex-col pt-4">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            Get In Touch
            <span className="w-8 h-[2px] bg-sky-500/50 rounded-full"></span>
          </h3>
          
          <div className="space-y-4">
            <a href="mailto:sumantad827@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                <SiGmail className="text-indigo-400 text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Email Us</span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">sumantad827@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918637073059" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-800 hover:border-sky-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                <FaPhoneAlt className="text-sky-400 text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Call Us</span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">+91 8637073059</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 relative z-10">
        <p>&copy; {currentYear} WordNext. All rights reserved.</p>
        <p className="flex items-center gap-1.5 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800/50">
          Developed with <span className="text-red-500 text-base animate-pulse mx-1">❤️</span> by <span className="font-semibold text-slate-300 ml-1 hover:text-indigo-400 transition-colors cursor-pointer">Sumanta Das</span>
        </p>
      </div>
    </footer>
  );
};

export default ModernFooter;
