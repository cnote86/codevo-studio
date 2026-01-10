"use client";

import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-stone-800 py-10 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-gray-600 text-sm font-mono">
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61580391928169"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebook size={22} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Mario Campos| CodevoStudio All rights reserved.</p>
      </div>
    </footer>
  );
}