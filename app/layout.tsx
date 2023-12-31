import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import Sidebar from "@/components/navigation/Sidebar";
import SearchModal from "@/components/modals/SearchModal";
import CartModal from "@/components/modals/CartModal";
import React from "react";
import { ReduxProvider } from "@/redux/provider";
import AppContextProvider from "@/contexts";
import AppThemeprovider from "./AppThemeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dope Drapes",
  description: "Step into the World of Dope Drapes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <body>
        <div className="relative">
          <ReduxProvider>
            <AppContextProvider>
              <AppThemeprovider>
                <Sidebar />
                <Navbar />
                <SearchModal />
                <CartModal />
                <div className=" pt-32">{children}</div>
                <Footer />
              </AppThemeprovider>
            </AppContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
