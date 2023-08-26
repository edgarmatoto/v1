import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio by Edgar',
  description: 'my portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-[#1c1c1c]`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
          {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}
