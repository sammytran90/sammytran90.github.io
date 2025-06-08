import { Navbar } from "../../islands/Navbar.tsx";
import { PageProps, LayoutConfig } from "$fresh/server.ts";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};
export default function EnLayout({Component, state}: PageProps) {
  return (
    <>
      <Navbar lng="vi" />
      <Component />
    </>
  )
}