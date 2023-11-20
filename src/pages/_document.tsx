import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <div className="flex grow h-screen">
          <Navigation />
          <div className="grow px-16 py-8">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
