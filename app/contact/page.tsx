"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LocalBusinessSchema from "@/components/local-business-schema"
import { Mail, MapPin, MessageSquare, Phone, Send, Clock3, Route } from "lucide-react"
import { useState } from "react"

const services = [
  "Building & Construction",
  "Painting",
  "Plastering",
  "Carpentry",
  "Brickwork",
  "Door Fitting",
  "Bathroom Design",
  "Flooring",
  "Tiling",
  "Kitchen & Cupboard Installation",
  "Plumbing",
  "General Renovation & Maintenance",
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://newguivaskdesigns.netlify.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://newguivaskdesigns.netlify.app/contact",
    },
  ],
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    description: "",
  })

  const quoteMessage = [
    "New quote request for Guivas & K Design Projects (Pty) Ltd",
    `Full Name: ${formData.fullName}`,
    `Phone Number: ${formData.phone}`,
    `Email: ${formData.email}`,
    `Service Required: ${formData.service}`,
    `Project Location: ${formData.location}`,
    `Project Description: ${formData.description}`,
  ].join("\n")

  const whatsappHref = `https://wa.me/27786940018?text=${encodeURIComponent(quoteMessage)}`
  const mailHref = `mailto:guivaskdesigns@gmail.com?subject=${encodeURIComponent("Quote request for Guivas & K Design Projects")}&body=${encodeURIComponent(quoteMessage)}`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = whatsappHref
  }

  return (
    <>
      <LocalBusinessSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <main className="bg-background">
        <section className="relative overflow-hidden bg-[#17140f] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
          <img
            src="/images/polished-floor.jpg"
            alt="Polished flooring project by Guivas & K Design Projects (Pty) Ltd"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(198,148,69,0.22),transparent_30%),linear-gradient(96deg,#17140f_0%,rgba(23,20,15,0.87)_62%,rgba(23,20,15,0.58)_100%)]" />
          <div className="relative mx-auto max-w-7xl">
            <p className="section-kicker">Contact</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight lg:text-7xl">
              Request a professional quote for your next build or renovation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Contact Guivas & K Design Projects (Pty) Ltd for construction, renovations, plumbing services, bathroom
              renovations, kitchen installation, tiling, painting, carpentry, and maintenance across Randburg and
              Johannesburg.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="space-y-6">
              <div className="soft-card p-7">
                <h2 className="text-3xl font-bold">Business Information</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold">Guivas & K Design Projects (Pty) Ltd</p>
                      <p className="text-muted-foreground">
                        6159 Sierra Leone Avenue
                        <br />
                        Cosmo City Ext 06
                        <br />
                        Randburg, 2188
                      </p>
                    </div>
                  </div>
                  <a href="tel:0786940018" className="flex gap-4 text-foreground transition-colors hover:text-primary">
                    <Phone className="shrink-0 text-primary" />
                    <span className="font-bold">078 694 0018</span>
                  </a>
                  <a
                    href="mailto:guivaskdesigns@gmail.com"
                    className="flex gap-4 text-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="shrink-0 text-primary" />
                    <span className="font-bold">guivaskdesigns@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="soft-card p-7">
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold">
                  <Clock3 className="text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex justify-between gap-4">
                    <span>Monday - Friday</span>
                    <strong className="text-foreground">08:00 - 17:00</strong>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <strong className="text-foreground">08:00 - 13:00</strong>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <strong className="text-foreground">Closed</strong>
                  </p>
                </div>
              </div>

              <div className="soft-card p-7">
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold">
                  <Route className="text-primary" />
                  Service Areas
                </h3>
                <p className="text-muted-foreground">
                  Randburg, Cosmo City, Johannesburg, Roodepoort, Sandton, Fourways, Midrand, and surrounding areas.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="tel:0786940018"
                  className="magnetic-button flex items-center justify-center gap-2 bg-[#17140f] px-4 py-4 font-black text-white"
                >
                  <Phone size={18} />
                  Call
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-button flex items-center justify-center gap-2 bg-primary/90 px-4 py-4 font-black text-[#16120c]"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
                <a
                  href={mailHref}
                  className="magnetic-button flex items-center justify-center gap-2 border border-primary/70 px-4 py-4 font-black text-primary hover:bg-primary/10"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>

            <div className="soft-card p-6 sm:p-8">
              <h2 className="text-3xl font-bold">Quote Form</h2>
              <p className="mt-2 text-muted-foreground">
                Submit the form and your completed details will open in WhatsApp for quick sending.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-bold">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-bold">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-bold">
                    Project Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-bold">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="magnetic-button sheen flex w-full items-center justify-center gap-3 bg-primary px-8 py-4 font-black text-[#16120c] hover:bg-[#17140f] hover:text-white"
                >
                  Send Quote Request via WhatsApp
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_90px_rgba(42,34,23,0.1)]">
            <iframe
              title="Guivas & K Design Projects Google Map"
              src="https://www.google.com/maps?q=6159%20Sierra%20Leone%20Avenue%20Cosmo%20City%20Ext%2006%20Randburg%202188&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
