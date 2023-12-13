import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Auth System",
  description: "Generated by create next app",
  name="google-site-verification", content="NINMTEkBWGJuiuF9mpzOTAHN9iWKMdNyLmVaNFyZ9ZI" 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const referer: any = headers();
  const pathname = referer.get("x-url") || "";
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
