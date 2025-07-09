"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Logo from "@public/logo.png";
import { LanguageSelector } from "@src/components/features/language-selector";
import { Container } from "@src/components/shared/container";

export const Header = (props: { locale: string }) => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav className="w-full bg-white shadow-md px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="font-bold text-xl">
            <Link href="/" title={t('common.homepage')}>
              <img src={Logo.src} alt="Logo" className="w-[100px]" />
            </Link>
            <LanguageSelector />
          </div>

   
        </div>
     
      </nav>
    </header>
  );
};
