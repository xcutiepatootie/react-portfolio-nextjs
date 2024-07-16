import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FramerMotionProvider } from "@/utils/providers/FramerMotionProvider";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calabia - Portfolio",
  description: "Using Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`h-screen ${roboto_condensed.className}`}>
        <div className="flex h-full flex-col">
          <Header />
          <main className="flex-grow overflow-hidden">
            <FramerMotionProvider>{children}</FramerMotionProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
