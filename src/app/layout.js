import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import SmoothScrollProvider from "@/components/utils/SmoothScroll";
import { ActiveSectionContextProvider } from "@/components/utils/Context/ActiveSectionContext";
import Footer from "@/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Guilherme Barroso Dev",
  description: "Portfólio Guilherme Barroso",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScrollProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer/>
          </ActiveSectionContextProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
