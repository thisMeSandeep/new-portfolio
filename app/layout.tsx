import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Sandeep Singh Nayal - Full Stack Developer | MERN Stack",
  description: "Full Stack Developer specializing in MERN stack, Next.js, and React Native. Available for projects and opportunities.",
  openGraph: {
    type: "website",
    url: "https://sandeepsinghnayal.dev",
    title: "Sandeep Singh Nayal - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, and React Native.",
    siteName: "Sandeep Singh Nayal Portfolio",
    images: [
      {
        url: "/fevicon.ico", 
        width: 64,
        height: 64,
        alt: "Sandeep Singh Nayal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sandeep Singh Nayal - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, and React Native.",
    images: ["/fevicon.ico"], 
  },
  icons: {
    icon: "/fevicon.ico",
    shortcut: "/fevicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://sandeepsinghnayal.dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sandeep Singh Nayal",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, and React Native.",
    url: "https://sandeepsinghnayal.dev",
    image: "https://sandeepsinghnayal.dev/fevicon.ico", 
    email: "sandeepnayal50@gmail.com",
    sameAs: [
      "https://github.com/sandeepsinghnayal",
      "https://linkedin.com/in/sandeepsinghnayal",
      "https://twitter.com/sandeepnayal",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <LenisWrapper>
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
