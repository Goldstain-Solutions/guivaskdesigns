"use client"

import { ArrowRight, Building2, Hammer, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#090b0f] text-white">
      <img
        src="/images/1.jpg"
        alt="Luxury kitchen and cupboard installation by Guivas & K Design Projects (Pty) Ltd"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,10,15,0.96)_0%,rgba(24,20,14,0.76)_48%,rgba(24,20,14,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(197,147,69,0.34),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(129,93,51,0.28),transparent_26%),linear-gradient(180deg,transparent_58%,rgba(7,10,15,0.96))]" />
      <div className="absolute right-[-4rem] top-24 hidden h-72 w-72 rounded-[42%_58%_64%_36%/38%_34%_66%_62%] border border-primary/35 bg-primary/10 blur-[1px] lg:block animate-float-slow" />
      <div className="absolute bottom-24 right-24 hidden h-44 w-64 rounded-[65%_35%_40%_60%/55%_42%_58%_45%] border border-white/20 bg-white/5 lg:block animate-drift-soft" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-reveal-up">
          <p className="section-kicker text-primary">Premium Construction Johannesburg</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-[0.86] sm:text-7xl lg:text-9xl">
            Building Excellence. Creating Lasting Value.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
            Professional construction, renovations, plumbing, tiling, flooring, painting, carpentry, bathroom design,
            kitchen installation, and commercial building services across Johannesburg and surrounding areas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="magnetic-button sheen group flex w-full items-center justify-center gap-3 bg-primary px-9 py-4 font-black text-[#16120c] hover:bg-white sm:w-auto">
                Get a Free Quote
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/#services">
              <button className="magnetic-button flex w-full items-center justify-center gap-3 border border-white/25 bg-white/10 px-9 py-4 font-bold text-white backdrop-blur-sm hover:border-primary/80 hover:bg-primary/20 sm:w-auto">
                Explore Our Services
                <Building2 size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["NHBRC Registered", ShieldCheck],
            ["Renovation Specialists", Hammer],
            ["Randburg & Johannesburg", Building2],
          ].map(([label, Icon]) => (
            <div
              key={String(label)}
              className="rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-white/[0.13]"
            >
              <Icon className="mb-4 text-primary" size={24} />
              <p className="font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
