import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Construction Company Randburg",
  description:
    "Contact Guivas & K Design Projects (Pty) Ltd for construction, renovations, plumbing, tiling, painting, carpentry, bathroom design, and kitchen installation in Randburg and Johannesburg.",
  alternates: {
    canonical: "https://newguivaskdesigns.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Guivas & K Design Projects",
    description:
      "Request a professional quote for construction, renovation, plumbing, tiling, painting, carpentry, bathroom, and kitchen installation services.",
    url: "https://newguivaskdesigns.netlify.app/contact",
    images: ["/images/polished-floor.jpg"],
  },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
