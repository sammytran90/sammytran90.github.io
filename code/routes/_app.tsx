import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anh Trung Tran website</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Navbar />
        <Component />
      </body>
    </html>
  );
}
