import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const carterOne = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Edgar Quintero',
  description: "Edgar Quintero's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${carterOne.className} antialiased`}>{children}</body>
    </html>
  );
}
