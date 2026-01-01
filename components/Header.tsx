"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav
        className="mx-auto flex h-16 max-w-4xl items-center justify-between px-8"
        aria-label="Main"
      >
        <div className="font-bold text-lg">
          <Link href="/" onClick={close} className="hover:text-gray-600 transition-colors">
            Mario Campos| CodevoStudio
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-sm font-mono">
          <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-3 py-1.5 text-sm hover:border-gray-400 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-gray-200 bg-white">
          <ul className="flex flex-col px-8 py-4 text-sm font-mono">
            <li className="py-2"><Link href="/portfolio" onClick={close} className="hover:text-blue-600">Portfolio</Link></li>
            <li className="py-2"><Link href="/about" onClick={close} className="hover:text-blue-600">About</Link></li>
            <li className="py-2"><Link href="/contact" onClick={close} className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}