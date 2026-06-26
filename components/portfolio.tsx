"use client"

import { ExternalLink, Maximize2, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Luxury Kitchen Installation",
    category: "Kitchen",
    image: "/images/1.jpg",
    description: "Premium kitchen and cupboard installation with marble finishes and dark cabinetry.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Custom Entertainment Wall",
    category: "Carpentry",
    image: "/images/8.jpg",
    description: "Warm timber feature wall with integrated shelving, lighting, and TV installation.",
    span: "",
  },
  {
    id: 3,
    title: "Bathroom Renovation",
    category: "Bathroom",
    image: "/images/remodeling-1.jpg",
    description: "Bathroom renovation with tiling, fixture placement, and clean finishing.",
    span: "",
  },
  {
    id: 4,
    title: "Precision Floor Tiling",
    category: "Tiling",
    image: "/images/floor-tiling.jpg",
    description: "Floor tiling with leveling systems for a durable, clean installation.",
    span: "md:col-span-2",
  },
  {
    id: 5,
    title: "Residential Build",
    category: "Construction",
    image: "/images/construction-1.jpg",
    description: "Residential construction work with exterior finishing and architectural detail.",
    span: "",
  },
  {
    id: 6,
    title: "Polished Flooring",
    category: "Flooring",
    image: "/images/polished-floor.jpg",
    description: "High-gloss floor finishing for a premium, light-reflective interior.",
    span: "",
  },
  {
    id: 7,
    title: "Kitchen Renovation",
    category: "Renovation",
    image: "/images/white-kitchen-1.jpg",
    description: "Modern white kitchen with custom cabinets, island work, and lighting.",
    span: "md:col-span-2",
  },
  {
    id: 8,
    title: "Custom Wardrobes",
    category: "Carpentry",
    image: "/images/5.jpg",
    description: "Built-in bedroom cupboard system with integrated storage and desk space.",
    span: "",
  },
]

const categories = ["All", "Kitchen", "Carpentry", "Bathroom", "Tiling", "Construction", "Flooring", "Renovation"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Our Work</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Real project photos, crafted into spaces people use every day.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-primary bg-primary text-[#16120c] shadow-[0_14px_36px_rgba(166,123,55,0.2)]"
                    : "border-border bg-card/80 text-foreground hover:border-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-4">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-[2.2rem] bg-[#17140f] shadow-[0_24px_90px_rgba(42,34,23,0.12)] ${project.span}`}
            >
              <img
                src={project.image}
                alt={`${project.title} by Guivas & K Design Projects (Pty) Ltd`}
                className="image-bloom h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-primary">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-white/72">{project.description}</p>
              </div>
              <button
                onClick={() => setActiveProject(project)}
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/14 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-primary hover:text-[#16120c] group-hover:opacity-100"
                aria-label={`Open ${project.title} preview`}
              >
                <Maximize2 size={18} />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <button className="magnetic-button inline-flex items-center gap-3 bg-[#17140f] px-9 py-4 font-black text-white hover:bg-primary hover:text-[#16120c]">
              View Full Portfolio
              <ExternalLink size={18} />
            </button>
          </Link>
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActiveProject(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#16120c]"
            aria-label="Close project preview"
          >
            <X size={22} />
          </button>
          <div className="max-h-[90vh] max-w-5xl">
            <img
              src={activeProject.image}
              alt={`${activeProject.title} large preview`}
              className="max-h-[78vh] w-full object-contain"
            />
            <div className="rounded-b-[2rem] bg-white p-5 text-[#16120c]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">{activeProject.category}</p>
              <h3 className="mt-1 text-2xl font-bold">{activeProject.title}</h3>
              <p className="mt-2 text-muted-foreground">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
