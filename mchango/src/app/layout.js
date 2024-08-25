import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export const metadata = {
  title: 'Mchango - Charitable Donations Platform',
  description: 'An online platform for charitable donations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Image src="/logo.png" alt="Mchango Logo" width={30} height={30} className="logo" />
            <Link href="/">Mchango</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}