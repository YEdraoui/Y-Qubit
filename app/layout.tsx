import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ["latin"], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Y-Qubit Solutions | AI & Digital Transformation in MENA",
  description: "Leading AI and digital transformation consultancy in Morocco, UAE, and MENA. Expert AI solutions, business intelligence, software development, and consulting services. 98.7% AI accuracy, proven results.",
  keywords: ["AI solutions Morocco", "digital transformation MENA", "machine learning UAE", "business intelligence Morocco", "AI consulting", "software development Morocco", "WhatsApp chatbot integration", "predictive analytics"],
  authors: [{ name: "Y-Qubit Solutions" }],
  creator: "Y-Qubit Solutions",
  publisher: "Y-Qubit Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yqubit.ma",
    siteName: "Y-Qubit Solutions",
    title: "Y-Qubit Solutions | AI & Digital Transformation in MENA",
    description: "Leading AI and digital transformation consultancy serving Morocco, UAE, and MENA region with 98.7% AI accuracy.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Y-Qubit Solutions - AI & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Y-Qubit Solutions | AI & Digital Transformation in MENA",
    description: "Expert AI solutions, business intelligence, and digital transformation consulting in MENA.",
    images: ["/logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://yqubit.ma",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#6A1B9A" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
