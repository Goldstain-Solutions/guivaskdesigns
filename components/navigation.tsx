"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Our Work" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#17140f]/88 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group">
            <div className="text-xl font-black leading-tight tracking-tight sm:text-2xl">
              Guivas <span className="text-primary">&</span> K
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 group-hover:text-primary">
              Design Projects
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white/75 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:0786940018"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-[#16120c]"
              aria-label="Call Guivas & K Design Projects"
            >
              <Phone size={18} />
            </a>
            <Link href="/contact">
              <button className="magnetic-button bg-primary px-6 py-3 text-sm font-black text-[#16120c] hover:bg-white">
                Get Quote
              </button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Toggle mobile navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 py-5 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 font-bold text-white/80 transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="magnetic-button mt-4 w-full bg-primary px-6 py-3 font-black text-[#16120c]">Get a Free Quote</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
