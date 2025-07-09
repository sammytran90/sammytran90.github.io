"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@public/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="w-full px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">
            <Link href="/" title="Homepage">
              <Image src={Logo} alt="Logo" className="w-[100px]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/get-in-touch" className="text-gray-800 hover:text-blue-600 transition duration-300">Get in touch</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link href="/get-in-touch" className="text-gray-800 hover:text-blue-600 transition duration-300">Get in touch</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
