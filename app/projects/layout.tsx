import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Construction & Renovation Projects Johannesburg",
  description:
    "View Guivas & K Design Projects portfolio of kitchen installations, bathroom renovations, tiling, flooring, carpentry, plumbing, and residential construction projects in Johannesburg.",
  alternates: {
    canonical: "https://newguivaskdesigns.netlify.app/projects",
  },
  openGraph: {
    title: "Guivas & K Design Projects Portfolio",
    description:
      "Real project photos from construction, renovation, kitchen, bathroom, tiling, flooring, plumbing, and carpentry work across Johannesburg.",
    url: "https://newguivaskdesigns.netlify.app/projects",
    images: ["/images/1.jpg"],
  },
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
