import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { MainContextProvider } from '@/context/MainContext';
import { Playfair_Display, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://anntoursandtravel.com'), // Replace with your actual domain
  title: {
    default: 'Ann Tours and Travel - Unforgettable African Journeys',
    template: '%s | Ann Tours and Travel',
  },
  description: 'Your ultimate guide to African safaris and adventures in Uganda, Kenya, Tanzania, Zanzibar, and Rwanda. Discover destinations, attractions, hotels, and plan your dream trip.',
  keywords: ['African safari', 'tours', 'travel', 'Uganda', 'Kenya', 'Tanzania', 'Zanzibar', 'Rwanda', 'gorilla trekking', 'wildlife', 'safari packages'],
  openGraph: {
    title: 'Ann Tours and Travel',
    description: 'Your ultimate guide to African safaris and adventures.',
    url: 'https://anntoursandtravel.com', // Replace with your actual domain
    siteName: 'Ann Tours and Travel',
    images: [
      {
        url: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/49/d5/a1.jpg',
        width: 674,
        height: 446,
        alt: 'African Safari Adventure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ann Tours and Travel',
    description: 'Your ultimate guide to African safaris and adventures.',
    images: ['https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/49/d5/a1.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        poppins.variable,
        playfairDisplay.variable
      )}>
        <MainContextProvider>
          <div className="relative flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </MainContextProvider>
      </body>
    </html>
  );
}
