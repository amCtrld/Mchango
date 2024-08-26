import Link from 'next/link';
import '../styles/globals.css';

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
            <Link href="/">Mchango</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}