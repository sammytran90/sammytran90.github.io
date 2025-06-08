import { Navbar } from "../../islands/Navbar.tsx";
import { PageProps } from "$fresh/server.ts";

export default function EnLayout({Component, state}: PageProps) {
  return (
    <>
      <Navbar lng="en" />
      <Component />
    </>
  )
}