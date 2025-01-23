import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const carterOne = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Edgar Quintero',
    template: '%s - Edgar Quintero',
  },
  description: "Edgar Quintero's personal website",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carterOne.className} ßantialiased bg-background text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
