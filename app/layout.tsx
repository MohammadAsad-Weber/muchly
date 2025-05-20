import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Josefin_Sans } from "next/font/google";
import StoreProvider from "@/redux/StoreProvider";

// Layout components
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

// Google font
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Munchly | Fresh Food Delivery at Your Doorstep",
  description:
    "Munchly is your go-to food delivery app offering fast, reliable, and delicious meals from your favorite local restaurants. Order now and satisfy your cravings instantly.",
  authors: [{ name: "Mohammad Asad", url: "https://munchly-flame.vercel.app/" }],
  openGraph: {
    title: "Munchly | Fresh Food Delivery at Your Doorstep",
    description:
      "Get hot meals delivered fast from your favorite restaurants with Munchly. Easy ordering, real-time tracking, and delicious food — all in one app.",
    url: "https://munchly-flame.vercel.app/",
    siteName: "Munchly",
    images: [
      {
        url: "https://munchly-flame.vercel.app/favicon.ico",
        width: 256,
        height: 256,
        alt: "Munchly - Food Delivered to You",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munchly | Fresh Food Delivery at Your Doorstep",
    description:
      "Hungry? Munchly delivers. Discover a better way to order food online.",
    site: "@IronCodeNagi",
    images: ["https://munchly-flame.vercel.app/favicon.ico"],
  },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      style={{ scrollbarWidth: "thin" }}
      className="scroll-smooth"
    >
      <body
        className={`${josefinSans.className} antialiased bg-[#e6e6e6] *:p-0 *:m-0 *:box-border`}
      >
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;
