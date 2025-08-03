import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   metadataBase: new URL('https://noteduco342.ir'),
  title: 'Mahan - Developer & Engineer',
  description: 'Crafting innovative solutions where hardware meets software.',
  openGraph: {
    title: 'Mahan - Developer & Engineer',
    description: 'Crafting innovative solutions where hardware meets software.',
    url: 'https://noteduco342.ir', // Your final domain
    siteName: 'Mahan\'s Portfolio',
    images: [
      {
        url: '/og-image.png', // The path to your new image in the /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// --- ADD THIS SCHEMA MARKUP SCRIPT ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahan Faraji',
  url: 'https://NotEduCo342.iR', // TODO: Replace with your actual domain when you deploy
  jobTitle: 'Mechatronics Engineer and Developer Also known as NotEduCo342',
  // You can add more details like links to your social profiles
  sameAs: [
    'https://github.com/NotEduCo342', // TODO: Replace with your GitHub URL
    'https://linkedin.com/in/NotEduCo342', // TODO: Replace with your LinkedIn URL
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Add the JSON-LD script to the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Header />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}