import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalContextProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "Algorithm Visulizer",
  description: "Created by Jaimeen M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` max-h-dvh h-dvh background text-offWhite titanium px-4 pt-14 pb-3`}
      >
        <GlobalContextProvider>
          <Navbar />
          <div className=" h-full scrollBar glassLight overflow-y-auto px-3 border rounded-md border-gray-500">
            {children}
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
