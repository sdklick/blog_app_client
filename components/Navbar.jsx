"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiEdit } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 font-inter ${scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg py-3" : "bg-slate-950 py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex justify-center items-center w-10 h-10 overflow-hidden rounded-xl border border-slate-700 group-hover:border-indigo-500 transition-colors duration-300">
            <Image
              src="/favicon.png"
              alt="WordNext Logo"
              width={40}
              height={40}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            WordNext
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-slate-900/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-800/50">
            <NavLink href="/" text="Home" isActive={isActive("/")} />
            <NavLink href="/aboutus" text="About Us" isActive={isActive("/aboutus")} />
            <NavLink href="/articles" text="Articles" isActive={isActive("/articles")} />
            <NavLink href="/categories" text="Categories" isActive={isActive("/categories")} />
            <NavLink href="/contact" text="Contact" isActive={isActive("/contact")} />
          </div>

          <Link
            href="/writeblog"
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
          >
            <FiEdit className="w-4 h-4" />
            Write
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <MobileNavLink href="/" text="Home" onClick={() => setIsMobileMenuOpen(false)} isActive={isActive("/")} />
          <MobileNavLink href="/aboutus" text="About Us" onClick={() => setIsMobileMenuOpen(false)} isActive={isActive("/aboutus")} />
          <MobileNavLink href="/articles" text="Articles" onClick={() => setIsMobileMenuOpen(false)} isActive={isActive("/articles")} />
          <MobileNavLink href="/categories" text="Categories" onClick={() => setIsMobileMenuOpen(false)} isActive={isActive("/categories")} />
          <MobileNavLink href="/contact" text="Contact" onClick={() => setIsMobileMenuOpen(false)} isActive={isActive("/contact")} />

          <div className="pt-4 mt-2 border-t border-slate-800">
            <Link
              href="/writeblog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-500 text-white rounded-xl font-medium"
            >
              <FiEdit className="w-4 h-4" />
              Write Article
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
      }`}
  >
    {text}
    {isActive && (
      <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-indigo-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
    )}
  </Link>
);

const MobileNavLink = ({ href, text, onClick, isActive }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? "bg-indigo-500/10 text-indigo-400" : "text-slate-300 hover:bg-slate-900 hover:text-white"
      }`}
  >
    {text}
  </Link>
);

export default Navbar;
