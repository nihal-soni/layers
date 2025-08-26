import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Layers | Impactful designs created effortlessly",
  description:
    "Design tools shouldn't slow you down . Layers combines powerful features with an intutive interface that keeps you in your creative flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
