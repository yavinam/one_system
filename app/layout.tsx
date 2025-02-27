import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "@/components/providers/lenis-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OneSystem",
  description: "Biznesingiz kelajagiga bo'lgan ilk qadamni biz bilan boshlang",
  keywords:
    "OneSystem, onesystem, one system, one-system, website, services, website service, mobile app, telegram bot, bot service, flutter, backend, frontend, software development, web development, web application, mobile application, CRM, ERP, SaaS, business automation, cloud solutions, AI, artificial intelligence, chatbot, ecommerce, marketplace, startup, digital transformation, API integration, UX/UI design, software engineering, business solutions, custom software, IT services, IT consulting, digital marketing, SEO, optimization, PWA, Progressive Web App, hybrid apps, cross-platform development, automation, cloud computing, DevOps, scalable solutions, enterprise solutions, innovation, mobile optimization, AI-powered apps, machine learning, AI chatbot, smart automation, cyber security, secure web apps, data analytics, big data, database management, fintech, edtech, healthtech, blockchain, smart contracts, SaaS solutions, MVP development, agile development, SCRUM, digital ecosystem, serverless computing, hosting, domain registration, cloud hosting, VPS, dedicated servers, scalable infrastructure, CI/CD, code deployment, modern web development, headless CMS, Jamstack, SEO-friendly websites, fast loading websites, responsive design, mobile-first design, cloud-native apps.",
  authors: [{ name: "OneSystem" }],
  robots: "index, follow",
  other: {
    "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    title: "OneSystem",
    description:
      "Biznesingiz kelajagiga bo'lgan ilk qadamni biz bilan boshlang",
    url: "https://onesystem.uz",
    siteName: "OneSystem",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Biznesingiz kelajagiga bo'lgan ilk qadamni biz bilan boshlang",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneSystem",
    description:
      "Biznesingiz kelajagiga bo'lgan ilk qadamni biz bilan boshlang",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${dmSans.className} antialiased bg-slate-50/70`}>
          <ToastProvider>
            <Navbar />
            <Toaster />
            {children}
          </ToastProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
