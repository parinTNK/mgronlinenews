import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "ตำรวจไซเบอร์เร่งขยายผล ปิดบัญชีธนาคารและเว็บไซต์พนันออนไลน์เครือข่ายใหญ่รวม 78 แห่ง โยงบริษัท Huione ในกัมพูชา เอี่ยวหลาน “ฮุนเซน”",
  description: "พล.ต.ท.ไตรรงค์ ผิวพรรณ ผู้บัญชาการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี (ผบช.สอท.) เปิดเผยความคืบหน้าจากการสืบสวนในคดีที่มีความเกี่ยวพันกับบริษัท Huione Group ซึ่งถูกสงสัย",
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
        <Footer/>
      </body>
    </html>
  );
}
