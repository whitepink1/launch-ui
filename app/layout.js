import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Launch UI",
  description:
    'Launch UI is a modern, customizable UI kit built with React and Tailwind CSS. Created by Whitepink as a personal portfolio project.',
  keywords: [
    'React landing page',
    'Tailwind CSS UI kit',
    'Frontend portfolio',
    'Whitepink developer',
    'Responsive website components',
    'Modern UI design',
    'Launch UI',
  ],
  authors: [{ name: 'Whitepink', url: 'https://github.com/whitepink1' }],
  creator: 'Whitepink',
  metadataBase: new URL('https://launch-ui-showcase.netlify.app/en'),
  openGraph: {
    title: 'Launch UI – Build Beautiful Landing Pages Fast',
    description:
      'A free and open-source UI kit for building stunning, responsive landing pages with React and Tailwind.',
    url: 'https://launch-ui-showcase.netlify.app/en', 
    siteName: 'Launch UI',
    images: [
      {
        url: '/images/dash.png',
        width: 1200,
        height: 630,
        alt: 'Launch UI Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch UI – React + Tailwind CSS Kit',
    description:
      'Created by Whitepink, this portfolio UI kit helps you build stunning landing pages fast.',
    images: ['/images/dash.png'],
  },
  icons: {
    icon: '/icons/logo_dark.svg',
    shortcut: '/icons/logo_dark.svg',
    apple: '/icons/logo_dark.svg',
  },
};

export default async function RootLayout({ children, params}) {
  return (
    <html lang={params?.locale} suppressHydrationWarning>
      <link rel="icon" href="/icons/logo_dark.svg"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
