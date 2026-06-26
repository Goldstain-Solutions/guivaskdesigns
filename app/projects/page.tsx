"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"

const projects = [
  // Design & Remodeling Projects
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "Kitchen Design",
    image: "/images/1.jpg",
    description: "Luxury kitchen with marble countertops and dark cabinetry",
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    category: "Kitchen Design",
    image: "/images/2.jpg",
    description: "Bright and airy kitchen with modern appliances",
  },
  {
    id: 3,
    title: "Bar Room & Wine Collection",
    category: "Interior Design",
    image: "/images/3.jpg",
    description: "Custom bar room with wine storage and gold accents",
  },
  {
    id: 4,
    title: "Marble TV Wall Feature",
    category: "Interior Design",
    image: "/images/4.jpg",
    description: "Statement TV wall with marble backdrop",
  },
  {
    id: 5,
    title: "Light Wood Wardrobes",
    category: "Carpentry",
    image: "/images/5.jpg",
    description: "Custom built-in wardrobes with light wood finish",
  },
  {
    id: 6,
    title: "Modern Kitchen & Living",
    category: "Kitchen Design",
    image: "/images/6.jpg",
    description: "Contemporary kitchen with living space integration",
  },
  {
    id: 7,
    title: "Bedroom Wardrobe Installation",
    category: "Carpentry",
    image: "/images/7.jpg",
    description: "Custom wardrobe installation for bedroom",
  },
  {
    id: 8,
    title: "Wood Entertainment Unit",
    category: "Carpentry",
    image: "/images/8.jpg",
    description: "Custom wooden TV entertainment center",
  },
  // Construction Projects
  {
    id: 9,
    title: "Residential Construction",
    category: "Construction",
    image: "/images/construction-1.jpg",
    description: "Modern house construction project",
  },
  {
    id: 10,
    title: "Luxury Pool Installation",
    category: "Construction",
    image: "/images/construction-2.jpg",
    description: "Professional pool installation with blue tile mosaic",
  },
  {
    id: 11,
    title: "Construction Team at Work",
    category: "Construction",
    image: "/images/construction-3.jpg",
    description: "On-site construction crew during project phase",
  },
  {
    id: 21,
    title: "Swimming Pool Installation",
    category: "Construction",
    image: "/images/pool.jpg",
    description: "Luxury pool with blue tile mosaic and professional finishing",
  },
  {
    id: 22,
    title: "Modern House Construction",
    category: "Construction",
    image: "/images/modern-house.jpg",
    description: "Modern residential construction with professional landscaping",
  },
  // Repairs & Renovations
  {
    id: 12,
    title: "Modern Kitchen Renovation",
    category: "Kitchen Repair",
    image: "/images/repairs-2.jpg",
    description: "Kitchen renovation with copper pendant lighting",
  },
  {
    id: 13,
    title: "Kitchen Installation In Progress",
    category: "Kitchen Repair",
    image: "/images/repairs-1.jpg",
    description: "Kitchen cabinetry and island installation",
  },
  {
    id: 14,
    title: "Wardrobe Assembly",
    category: "Carpentry",
    image: "/images/repairs-3.jpg",
    description: "Light wood wardrobe installation and finishing",
  },
  // Remodeling Projects
  {
    id: 15,
    title: "Bathroom Fixture Installation",
    category: "Remodeling",
    image: "/images/remodeling-1.jpg",
    description: "Modern bathroom with freestanding tub",
  },
  {
    id: 16,
    title: "Herringbone Tile Work",
    category: "Remodeling",
    image: "/images/remodeling-2.jpg",
    description: "Professional herringbone pattern tile installation",
  },
  {
    id: 17,
    title: "Modern Housing Development",
    category: "Construction",
    image: "/images/remodeling-3.jpg",
    description: "Multi-unit modern townhouses construction",
  },
  // Design Projects
  {
    id: 18,
    title: "Commercial Flooring",
    category: "Design",
    image: "/images/design-3.jpg",
    description: "Large-scale marble flooring installation",
  },
  {
    id: 19,
    title: "Tile Flooring Installation",
    category: "Design",
    image: "/images/design-1.jpg",
    description: "Professional flooring layout with spacers",
  },
  {
    id: 20,
    title: "Kitchen Renovation Design",
    category: "Design",
    image: "/images/design-2.jpg",
    description: "Complete kitchen redesign with mosaic backsplash",
  },
  {
    id: 23,
    title: "Precision Floor Tiling",
    category: "Flooring",
    image: "/images/floor-tiling.jpg",
    description: "Professional tile installation with precision leveling systems",
  },
  {
    id: 24,
    title: "Plumbing Installation",
    category: "Plumbing",
    image: "/images/plumbing-work.jpg",
    description: "Expert plumbing installation on brick walls",
  },
  {
    id: 25,
    title: "Marble Staircase",
    category: "Interior Design",
    image: "/images/marble-stairs.jpg",
    description: "Elegant marble staircase with modern black trim",
  },
  {
    id: 26,
    title: "High-Gloss Flooring",
    category: "Flooring",
    image: "/images/polished-floor.jpg",
    description: "Premium high-gloss polished flooring installation",
  },
  {
    id: 27,
    title: "Modern White Kitchen",
    category: "Kitchen Design",
    image: "/images/white-kitchen-1.jpg",
    description: "Contemporary white kitchen with custom cabinetry and spiral lighting",
  },
  {
    id: 28,
    title: "White Kitchen Renovation",
    category: "Kitchen Design",
    image: "/images/white-kitchen-2.jpg",
    description: "Sleek white kitchen with modern appliances and countertops",
  },
  {
    id: 29,
    title: "Professional Plastering",
    category: "Brickwork",
    image: "/images/plastering-work.jpg",
    description: "Expert plastering and brickwork services",
  },
  {
    id: 30,
    title: "Modern Staircase Design",
    category: "Interior Design",
    image: "/images/modern-stairs.jpg",
    description: "Contemporary staircase with white tiles and glass railings",
  },
  {
    id: 31,
    title: "Construction Process Video",
    category: "Construction",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-05%20at%2012.41.38-2QiFZj8u5bqHOnXaSdfw4grVOMPnEh.mp4",
    description: "Live construction work in progress - video showcase",
    isVideo: true,
  },
  {
    id: 32,
    title: "Project Walkthrough",
    category: "Construction",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-05%20at%2012.41.42-stHsEMtgE0JKaeVqfs7NZUMdBqDR0D.mp4",
    description: "Complete project walkthrough video",
    isVideo: true,
  },
]

const categories = [
  "All",
  "Kitchen Design",
  "Interior Design",
  "Carpentry",
  "Construction",
  "Kitchen Repair",
  "Remodeling",
  "Design",
  "Flooring",
  "Plumbing",
  "Brickwork",
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Header */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Our Complete Portfolio</h1>
            <p className="text-xl text-foreground/70 max-w-2xl text-pretty">
              Explore our extensive collection of {projects.length} finished projects showcasing our expertise in
              construction, design, carpentry, and renovations.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-lg"
                >
                  {/* Image or Video */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    {project.isVideo ? (
                      <video src={project.video} className="w-full h-full object-cover" controls preload="metadata" />
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{project.title}</h3>
                    <p className="text-sm text-foreground/60">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact Guivas & K Design Projects (Pty) Ltd today for a free consultation and see how we can transform your space.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
