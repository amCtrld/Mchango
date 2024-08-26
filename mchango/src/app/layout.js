import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'Mchango',
  description: 'Charitable Donations Platform',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}