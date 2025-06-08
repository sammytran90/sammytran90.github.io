import { PageProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";
export default function EnLayout({Component, state}: PageProps) {
  return (
    <>
      <Navbar lng="en" />
      <Component />
    </>
  )
}