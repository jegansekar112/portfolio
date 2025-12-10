import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import VisitorTracker from '@/components/VisitorTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jegan-portfolio.vercel.app'),
  title: 'Jegan Sekar - Full Stack Developer | Portfolio',
  description: 'Portfolio of Jegan Sekar, a Full Stack Developer with 2+ years of experience specializing in React.js, Next.js, Python, Flask, and cloud technologies. Open to relocate. Based in Chennai, India.',
  keywords: 'Full Stack Developer, React, Node.js, Next.js, Python, JavaScript, Dart, Flutter, AWS, Docker, Kubernetes, System Architecture, Chennai, India',
  authors: [{ name: 'Jegan Sekar' }],
  creator: 'Jegan Sekar',
  openGraph: {
    title: 'Jegan Sekar - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in React.js, Next.js, Python, and cloud technologies. Open to relocate.',
    url: 'https://jegan-portfolio.vercel.app',
    siteName: 'Jegan Sekar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jegan Sekar - Full Stack Developer',
    description: 'Experienced Full Stack Developer | React.js | Next.js | Python | AWS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VisitorTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

