import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://newguivaskdesigns.netlify.app'),
  title: 'Guivas & K Design Projects | Construction & Renovation Services in Randburg',
  description: 'Guivas & K Design Projects (Pty) Ltd offers premium construction, home renovations, plumbing, painting, tiling, carpentry, bathroom renovations, kitchen installation, and commercial building services in Randburg and Johannesburg.',
  keywords: 'Guivas & K Design Projects, Guivas and K, Construction Company Randburg, Builders Johannesburg, Construction Company Johannesburg, Home Renovations Johannesburg, Bathroom Renovations Randburg, Plumbing Services Randburg, Kitchen Installation Randburg, Tiling Contractors Johannesburg, Building Contractors Near Me',
  alternates: {
    canonical: 'https://newguivaskdesigns.netlify.app/',
  },
  openGraph: {
    title: 'Guivas & K Design Projects | Construction & Renovation Services in Randburg',
    description: 'Premium construction, renovation, plumbing, painting, tiling, carpentry, bathroom design, kitchen installation, and commercial building services across Johannesburg.',
    url: 'https://newguivaskdesigns.netlify.app/',
    siteName: 'Guivas & K Design Projects',
    type: 'website',
    locale: 'en_ZA',
    images: [
      {
        url: '/images/1.jpg',
        width: 1080,
        height: 1080,
        alt: 'Premium kitchen installation by Guivas & K Design Projects (Pty) Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guivas & K Design Projects | Construction & Renovation Services in Randburg',
    description: 'Premium building contractors for construction, renovations, kitchens, bathrooms, plumbing, tiling, painting, and carpentry in Johannesburg.',
    images: ['/images/1.jpg'],
  },
  generators: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
