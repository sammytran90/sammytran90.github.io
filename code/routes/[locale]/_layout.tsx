import { Navbar } from "../../islands/Navbar.tsx";
import { PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer/index.tsx";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Layout({Component, state, params}: PageProps) {
  return (
    <>
      <Navbar lng={params.locale} />
      <Component />
      <Footer />
    </>
  )
}