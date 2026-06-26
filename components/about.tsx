"use client"

import { Check, HardHat, Ruler, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24 overflow-hidden">
      <div className="absolute left-0 top-20 h-72 w-1/3 bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative min-h-[560px]">
          <img
            src="/images/construction-1.jpg"
            alt="Residential construction by Guivas & K Design Projects (Pty) Ltd in Johannesburg"
            className="h-[520px] w-full object-cover shadow-2xl"
          />
          <div className="absolute bottom-0 right-0 max-w-sm bg-[#10141b] p-8 text-white shadow-2xl">
            <p className="font-mono text-5xl font-black text-primary">50+</p>
            <p className="mt-2 font-bold uppercase tracking-[0.2em] text-white/70">Projects completed</p>
          </div>
          <div className="absolute -left-6 top-10 hidden h-32 w-32 border border-primary/60 lg:block" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker">About Guivas & K</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground lg:text-6xl">
            Construction and renovation work with a premium finish.
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted-foreground">
            Guivas & K Design Projects (Pty) Ltd is a professional construction company serving Randburg, Johannesburg,
            and surrounding areas. The team delivers residential construction, commercial construction, renovations,
            plumbing, bathroom renovations, kitchen installation, tiling, flooring, painting, carpentry, and maintenance
            work with a focus on safety, reliable delivery, and client satisfaction.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Reliable delivery", HardHat],
              ["Measured workmanship", Ruler],
              ["Safety minded", ShieldCheck],
            ].map(([label, Icon]) => (
              <div key={String(label)} className="border border-border bg-card p-5">
                <Icon className="mb-4 text-primary" size={24} />
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 space-y-4">
            {[
              "Residential and commercial project capability",
              "Experienced team for construction, renovations, and finishing",
              "Clear communication from consultation to handover",
              "NHBRC registration and professional compliance focus",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check className="mt-1 text-primary" size={20} />
                <p className="font-semibold text-foreground">{feature}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="mt-10 inline-block">
            <button className="bg-[#10141b] px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-primary hover:text-[#10141b]">
              Request a Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
