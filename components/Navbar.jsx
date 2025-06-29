"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname for active link styling in App Router

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Initialize usePathname

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="inline-block">
          <Image
            src="/favicon.png"
            alt="WordNext Logo"
            width={80}
            height={80}
            priority
            className="inline-block transform hover:scale-150 transition-transform duration-200"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <NavLink href="/" text="Home" isActive={isActive("/")} />
          <NavLink
            href="/articles"
            text="Articles"
            isActive={isActive("/articles")}
          />
          <NavLink
            href="/categories"
            text="Categories"
            isActive={isActive("/categories")}
          />
          <NavLink
            href="/contact"
            text="Contact"
            isActive={isActive("/contact")}
          />
          
          {/* Optional: Call to Action Button */}
          <Link
            href="/writeblog"
            className="ml-8 px-5 py-2 bg-white text-indigo-700 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Write
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-md hover:bg-indigo-600 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-indigo-800 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-3"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <MobileNavLink
          href="/"
          text="Home"
          onClick={() => setIsMobileMenuOpen(false)}
          isActive={isActive("/")}
        />
        <MobileNavLink
          href="/articles"
          text="Articles"
          onClick={() => setIsMobileMenuOpen(false)}
          isActive={isActive("/articles")}
        />
        <MobileNavLink
          href="/categories"
          text="Categories"
          onClick={() => setIsMobileMenuOpen(false)}
          isActive={isActive("/categories")}
        />
        <MobileNavLink
          href="/contact"
          text="Contact"
          onClick={() => setIsMobileMenuOpen(false)}
          isActive={isActive("/contact")}
        />
        <MobileNavLink
          href="/subscribe"
          text="Subscribe"
          onClick={() => setIsMobileMenuOpen(false)}
          isButton
        />
      </div>
    </nav>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={`text-lg relative group transition-all duration-300 ${
      isActive ? "font-bold text-white" : "text-gray-200 hover:text-white"
    }`}
  >
    {text}
    <span
      className={`absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out ${
        isActive ? "w-full" : ""
      }`}
    ></span>
  </Link>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ href, text, onClick, isActive, isButton = false }) => (
  <Link
    href={href}
    className={`block py-3 px-6 text-xl transition-colors duration-200 ${
      isButton
        ? "mt-2 mx-4 text-center bg-white text-indigo-700 rounded-full font-semibold shadow-md hover:bg-gray-100"
        : `text-white hover:bg-indigo-700 ${
            isActive ? "font-bold bg-indigo-700" : ""
          }`
    }`}
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;
