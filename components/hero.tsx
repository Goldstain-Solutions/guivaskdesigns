"use client"

import { ArrowDown, ArrowRight, Building2, Hammer, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#090b0f] text-white">
      <img
        src="/images/1.jpg"
        alt="Luxury kitchen and cupboard installation by Guivas & K Design Projects (Pty) Ltd"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,15,0.96)_0%,rgba(7,10,15,0.74)_42%,rgba(7,10,15,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(202,153,77,0.28),transparent_28%),linear-gradient(180deg,transparent_65%,rgba(7,10,15,0.95))]" />
      <div className="absolute right-8 top-28 hidden h-44 w-44 border border-primary/40 lg:block animate-float-slow" />
      <div className="absolute right-28 bottom-24 hidden h-28 w-28 border border-white/20 rotate-45 lg:block animate-float-slow" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-reveal-up">
          <p className="section-kicker text-primary">Premium Construction Johannesburg</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-8xl">
            Building Excellence. Creating Lasting Value.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
            Professional construction, renovations, plumbing, tiling, flooring, painting, carpentry, bathroom design,
            kitchen installation, and commercial building services across Johannesburg and surrounding areas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="group flex w-full items-center justify-center gap-3 bg-primary px-8 py-4 font-bold text-[#10141b] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto">
                Get a Free Quote
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/#services">
              <button className="flex w-full items-center justify-center gap-3 border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/20 sm:w-auto">
                Explore Our Services
                <Building2 size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["NHBRC Registered", ShieldCheck],
            ["Renovation Specialists", Hammer],
            ["Randburg & Johannesburg", Building2],
          ].map(([label, Icon]) => (
            <div key={String(label)} className="border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md">
              <Icon className="mb-4 text-primary" size={24} />
              <p className="font-bold">{label}</p>
            </div>
          ))}
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-primary lg:flex"
        >
          Scroll
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
