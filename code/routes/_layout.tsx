import { PageProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";
import Footer from "../components/Footer/index.tsx";

export default function EnLayout({Component, state}: PageProps) {
  return (
    <>
      <Navbar lng="en" />
      <Component />
      <Footer />
    </>
  )
}