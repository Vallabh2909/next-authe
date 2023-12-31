import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Newnav from "@/components/Newnav";
import NFooter from "@/components/Nfooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Auth System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Newnav />
      {children}
      <NFooter />
    </>
  );
}
