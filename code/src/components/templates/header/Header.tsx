"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@public/logo.png";

export const Header = () => {

  return (
    <header className="py-5">
      <nav className="w-full bg-white shadow-md px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">
            <Link href="/" title="Homepage">
              <img src={Logo.src} alt="Logo" className="w-10" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
