import Link from "next/link";
import { SiGmail } from "react-icons/si";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const ModernFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center relative z-10">
        {/* About Section */}
        {/* Changed items-start to items-center for full centering on all screens */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-inner border border-gray-700">
          <h3 className="text-2xl font-extrabold text-white mb-5 border-b-2 border-blue-500 pb-2 inline-block">
            WordNext Blog
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Your premier source for insightful articles, cutting-edge tech
            tutorials, and lifestyle inspirations. We're dedicated to enriching
            your knowledge and sparking curiosity.
          </p>
        </div>

        {/* Quick Links Section */}
        {/* Changed items-start to items-center for full centering on all screens */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-inner border border-gray-700">
          <h3 className="text-2xl font-extrabold text-white mb-5 border-b-2 border-blue-500 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/articles"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base flex items-center"
              >
                <span className="mr-2 text-blue-500">&gt;</span> Articles
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base flex items-center"
              >
                <span className="mr-2 text-blue-500">&gt;</span> Categories
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base flex items-center"
              >
                <span className="mr-2 text-blue-500">&gt;</span> About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base flex items-center"
              >
                <span className="mr-2 text-blue-500">&gt;</span> Contact
              </Link>
            </li>
            {/* Add a Privacy Policy or Terms of Service link */}
          </ul>
        </div>

        {/* Contact Section - Modified to fit footer structure better */}
        <div className="lg:col-span-2 flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-inner border border-gray-700">
          <h3 className="text-2xl font-extrabold text-blue-400 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
            Get In Touch
          </h3>

          {/* Gmail */}
          <div className="flex items-center gap-4 mb-4 text-gray-300 hover:text-white transition-colors duration-200">
            <SiGmail className="text-red-500 text-2xl flex-shrink-0" />
            <p className="text-base font-medium">sumantad827@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 mb-6 text-gray-300 hover:text-white transition-colors duration-200">
            <FaPhoneAlt className="text-green-400 text-xl flex-shrink-0" />
            <p className="text-base font-medium">+91 8637073059</p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mt-6 w-full">
            {" "}
            {/* Removed md:justify-start */}
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-sky-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-500 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-600 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-sm text-gray-500 relative z-10">
        <p>&copy; {currentYear} WordNext Blog. All rights reserved.</p>
        <p className="mt-2 text-gray-400">
          Developed with <span className="text-red-500 animate-pulse">❤️</span>{" "}
          by Sumanta Das
        </p>
      </div>
    </footer>
  );
};

export default ModernFooter;
