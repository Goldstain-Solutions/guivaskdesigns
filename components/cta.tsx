"use client"

import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#17140f] py-28 text-white">
      <img
        src="/images/white-kitchen-1.jpg"
        alt="Kitchen installation project by Guivas & K Design Projects (Pty) Ltd"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(198,148,69,0.24),transparent_30%),linear-gradient(100deg,#17140f_0%,rgba(23,20,15,0.9)_55%,rgba(23,20,15,0.62)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-kicker">Start Your Project</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-7xl">
            Bring in a construction team that treats the finish as seriously as the structure.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Request a free quote for construction, renovations, plumbing, tiling, painting, carpentry, bathroom design,
            or kitchen installation in Randburg and Johannesburg.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="magnetic-button sheen group flex w-full items-center justify-center gap-3 bg-primary px-9 py-4 font-black text-[#16120c] hover:bg-white sm:w-auto">
                Open Contact Page
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <a
              href="https://wa.me/27786940018"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button flex w-full items-center justify-center gap-3 border border-white/20 px-9 py-4 font-black text-white hover:border-primary hover:bg-primary/10 hover:text-primary sm:w-auto"
            >
              <MessageSquare size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <a href="tel:0786940018" className="rounded-[1.5rem] flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-primary/60">
            <Phone className="text-primary" />
            <span className="font-bold">078 694 0018</span>
          </a>
          <a href="mailto:guivaskdesigns@gmail.com" className="rounded-[1.5rem] flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-primary/60">
            <Mail className="text-primary" />
            <span className="font-bold">guivaskdesigns@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
