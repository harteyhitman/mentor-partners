// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Favicon from '../components/Favicon/Favicon';
import '../styles/globals.scss';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-primary',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Mentor Partners - The Upskilling Marketplace',
  description: 'Connect with expert mentors to elevate your skills and advance your career.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Favicon />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}