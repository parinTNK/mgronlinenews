import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "MGR Online",
  description: "ข่าวสารล่าสุดจาก MGR Online",
  icons: {
    icon: [
      {
        url: "/MGRM.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: "/MGRM.png",
    apple: {
      url: "/MGRM.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-visible">
      <body className="relative overflow-visible">
        <Nav/>
        {children}
        
      </body>
    </html>
  );
}
