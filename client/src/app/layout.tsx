import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PrismAI',
  description: 'Empowering hotels, simplifying travel.',
  keywords:
    'hotel, travel, booking, management, PrismAI, hospitality, technology, OTA',
  authors: [{ name: 'Kirill Heitzler' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://PrismAI.com/',
    title: 'PrismAI - Empowering hotels, simplifying travel.',
    description: 'Empowering hotels, simplifying travel.',
    siteName: 'PrismAI',
    images: [
      {
        url: 'https://voyada.com/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'PrismAI - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrismAI - Empowering hotels, simplifying travel.',
    description: 'Empowering hotels, simplifying travel.',
    images: ['https://voyada.com/opengraph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
