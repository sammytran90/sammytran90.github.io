import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@src/components/templates/footer";
import { Header } from "@src/components/templates/header";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export async function generateStaticParams(): Promise<LayoutProps[]> {
  return [];
}

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

const allowedOriginList = [
  "https://app.contentful.com",
  "https://app.eu.contentful.com",
];

interface LayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </head>

      <body>
        <main className={`${urbanist.variable} font-sans`}>
          <Header />
          {children}
          <Footer />
        </main>
        <div id="portal" className={`${urbanist.variable} font-sans`} />
      </body>
    </html>
  );
}
