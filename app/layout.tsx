import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/lib/assets/Pasby™/Pasby™_default-logo_4.svg";
import Image from "next/image";
import TanstackProvider from "@/provider/tanstackprovider";
import jiji from "@/lib/assets/jigi-app.svg";

export const metadata: Metadata = {
  title: "Jiji Leaderboard",
  description: "Realtime scores of jiji game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={" bg-white font-satoshi"}>
        <header className=" w-full py-3 flex items-center justify-between px-10 border-b-2 border-gray-100">
          <Image src={logo} width={50} height={50} alt="" />
          <p className=" text-lg">
            Scan the qr code to activate your{" "}
            <span className=" font-bold">
              pasby<sup>TM</sup>
            </span>{" "}
            and download the <span className=" font-bold">Jigi</span> app
            through the qr code
          </p>
          <Image src={jiji} width={50} height={50} alt="" />
        </header>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
