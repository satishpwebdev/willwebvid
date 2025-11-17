import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "./components/Test";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { structuredData } from "@/lib/schemas";
import WilloChatBot from "./components/chatbot";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Willowood™ | Agri-inputs Company | Crop Protection Products",
  description:
    "Willowood is a leading Agri-inputs Company in India, offering best crop protection products, plant growth promoters, fungicides, herbicides, bio pesticides, etc.",
  keywords: [
    "Agri-inputs Company",
    "Crop Protection Products",
    "Plant Growth Promoters",
    "Fungicides",
    "Herbicides",
    "Bio Pesticides",
  ],
  openGraph: {
    title: "Willowood™ | Agri-inputs Company | Crop Protection Products",
    description:
      "WilloWood is a leading Agri-inputs Company in India, offering best crop protection products, plant growth promoters, fungicides, herbicides, bio pesticides, etc.",
    url: "https://www.willowood.com/",
    images: [
      {
        url: "https://www.willowood.com/assets/images/logo.svg",
        width: 800,
        height: 600,
        alt: "Willowood Logo",
      },
    ],
    siteName: "Willowood",
  },
  twitter: {
    card: "summary_large_image",
    title: "WilloWood™ | Agri-inputs Company",
    description: "Leading provider of crop protection products...",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.willowood.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={syne.className}>
        <ScrollToTop />
        {/* <Header /> */}
        <Header />
        {children}
        <WilloChatBot/>
        <Footer />
        <StructuredData schemas={structuredData} />
      </body>
    </html>
  );
}
