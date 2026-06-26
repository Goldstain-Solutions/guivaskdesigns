import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://newguivaskdesigns.netlify.app'),
  applicationName: 'Guivas & K Design Projects',
  title: {
    default: 'Guivas & K Design Projects | Construction & Renovation Services in Randburg',
    template: '%s | Guivas & K Design Projects',
  },
  description: 'Guivas & K Design Projects (Pty) Ltd offers premium construction, home renovations, plumbing, painting, tiling, carpentry, bathroom renovations, kitchen installation, and commercial building services in Randburg and Johannesburg.',
  keywords: [
    'Guivas & K Design Projects',
    'Guivas and K',
    'Construction Company Randburg',
    'Builders Johannesburg',
    'Construction Company Johannesburg',
    'Home Renovations Johannesburg',
    'Bathroom Renovations Randburg',
    'Plumbing Services Randburg',
    'Kitchen Installation Randburg',
    'Tiling Contractors Johannesburg',
    'Building Contractors Near Me',
  ],
  authors: [{ name: 'Guivas & K Design Projects (Pty) Ltd' }],
  creator: 'Guivas & K Design Projects (Pty) Ltd',
  publisher: 'Guivas & K Design Projects (Pty) Ltd',
  category: 'Construction',
  verification: {
    google: 'kYtMZgFk0snTW9mt1x44J5NlAFZIfRdHYKKiS_sZUvo',
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guivas & K Design Projects | Construction & Renovation Services in Randburg',
    description: 'Premium building contractors for construction, renovations, kitchens, bathrooms, plumbing, tiling, painting, and carpentry in Johannesburg.',
    images: ['/images/1.jpg'],
  },
  manifest: '/manifest.webmanifest',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
