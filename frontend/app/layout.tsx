import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Epilogue } from "next/font/google";
import { Clash_Display } from "@/public/fonts/fonts";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QuickHire - Find Your Dream Job",
  description:
    "QuickHire is a job portal that connects job seekers with their dream jobs. We provide a platform for employers to post job openings and for job seekers to find and apply for jobs that match their skills and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${Clash_Display.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
