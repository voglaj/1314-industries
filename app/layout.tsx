import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Premium Engraving Services - Custom Gifts & Products',
  description: 'Professional engraving services for jewelry, awards, gifts, and more. Custom designs, fast turnaround.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
