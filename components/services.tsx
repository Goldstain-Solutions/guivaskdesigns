"use client"

import {
  Blocks as Bricks,
  Building2,
  DoorOpen,
  Droplet,
  Hammer,
  Home,
  Paintbrush,
  PanelTop,
  ShowerHead,
  Sparkles,
  Wrench,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Building & Construction",
    image: "/images/construction-1.jpg",
    description: "Residential and commercial building work managed with reliable planning, site control, and quality finishes.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    image: "/images/remodeling-3.jpg",
    description: "Interior and exterior painting that refreshes homes, offices, and rental properties with clean, durable results.",
  },
  {
    icon: Wrench,
    title: "Plastering",
    image: "/images/plastering-work.jpg",
    description: "Wall preparation, plaster repairs, and smooth finishing for renovation and new construction projects.",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    image: "/images/5.jpg",
    description: "Custom cupboards, wardrobes, shelving, entertainment units, and practical timber installations built to fit.",
  },
  {
    icon: Bricks,
    title: "Brickwork",
    image: "/images/plumbing-work.jpg",
    description: "Strong, neat brickwork for walls, repairs, extensions, and structural building improvements.",
  },
  {
    icon: DoorOpen,
    title: "Door Fitting",
    image: "/images/repairs-3.jpg",
    description: "Professional door fitting, alignment, hardware installation, and finishing for residential interiors.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Designs",
    image: "/images/remodeling-1.jpg",
    description: "Bathroom renovation, fixture placement, tiling, and finishing for modern, functional spaces.",
  },
  {
    icon: PanelTop,
    title: "Flooring",
    image: "/images/polished-floor.jpg",
    description: "Floor preparation, installation, polishing, and finishing for beautiful, hard-wearing interior surfaces.",
  },
  {
    icon: Sparkles,
    title: "Tiling",
    image: "/images/floor-tiling.jpg",
    description: "Precision wall and floor tiling with clean lines, proper leveling, and durable installation methods.",
  },
  {
    icon: Home,
    title: "Kitchen & Cupboard Installation",
    image: "/images/white-kitchen-1.jpg",
    description: "Kitchen units, cupboard installation, countertops, storage features, and finishing for everyday use.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    image: "/images/plumbing-work.jpg",
    description: "Plumbing installations, repairs, and maintenance for renovations, bathrooms, kitchens, and building projects.",
  },
  {
    icon: Wrench,
    title: "General Renovation & Maintenance",
    image: "/images/hero-kitchen-install.jpg",
    description: "Practical renovation and maintenance support for homes, complexes, offices, and investment properties.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="section-kicker">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Complete Building & <span className="text-primary">Renovation Support</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guivas & K Design Projects (Pty) Ltd provides professional services for construction, renovations,
            plumbing services, bathroom renovations, kitchen and cupboard installation, tiling services, and painting
            services across Randburg and Johannesburg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group bg-card overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={`${service.title} by Guivas & K Design Projects (Pty) Ltd`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute left-5 bottom-5 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link href="/contact">
                    <button className="w-full bg-primary/10 text-primary px-5 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                      Request Quote
                    </button>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
