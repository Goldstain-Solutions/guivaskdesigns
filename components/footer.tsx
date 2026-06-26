"use client"

import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#080a0e] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-3xl font-black">Guivas & K</h3>
            <p className="text-white/65">
              Premium construction, renovations, plumbing, tiling, painting, carpentry, kitchen, and bathroom services
              across Randburg and Johannesburg.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-black uppercase tracking-[0.2em] text-primary">Company</h4>
            <ul className="space-y-3 text-white/68">
              {[
                ["Home", "/#home"],
                ["About", "/#about"],
                ["Services", "/#services"],
                ["Our Work", "/#portfolio"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-black uppercase tracking-[0.2em] text-primary">Services</h4>
            <ul className="space-y-3 text-white/68">
              {["Construction", "Renovations", "Plumbing", "Kitchen Installation", "Bathroom Renovations", "Tiling"].map(
                (service) => (
                  <li key={service}>
                    <a href="/#services" className="transition-colors hover:text-primary">
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-black uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="space-y-4 text-white/68">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-primary" />
                <span>6159 Sierra Leone Avenue, Cosmo City Ext 06, Randburg, 2188</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-primary" />
                <a href="tel:0786940018" className="transition-colors hover:text-primary">
                  078 694 0018
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-primary" />
                <a href="mailto:guivaskdesigns@gmail.com" className="break-all transition-colors hover:text-primary">
                  guivaskdesigns@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 pt-8 md:flex-row">
          <p className="text-sm text-white/55">© 2026 Guivas & K Design Projects (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61567036906319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guivas & K Facebook"
              className="flex h-11 w-11 items-center justify-center border border-white/10 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/guivas-and-k-331939334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guivas & K LinkedIn"
              className="flex h-11 w-11 items-center justify-center border border-white/10 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
