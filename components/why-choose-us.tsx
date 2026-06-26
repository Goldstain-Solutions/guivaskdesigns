"use client"

import { BadgeCheck, Clock3, HandCoins, ShieldCheck, Sparkles, UsersRound } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    value: "Premium",
    title: "Quality Workmanship",
    text: "Clean finishes, durable materials, and careful detail across every phase of work.",
  },
  {
    icon: UsersRound,
    value: "Experienced",
    title: "Skilled Professionals",
    text: "A practical team for building, renovations, carpentry, plumbing, tiling, and finishing.",
  },
  {
    icon: ShieldCheck,
    value: "Reliable",
    title: "Trusted Service",
    text: "Clear communication, organized project delivery, and respect for client spaces.",
  },
  {
    icon: HandCoins,
    value: "Fair",
    title: "Affordable Pricing",
    text: "Transparent quotes that balance cost, durability, and a premium finished result.",
  },
  {
    icon: BadgeCheck,
    value: "98%",
    title: "Customer Satisfaction",
    text: "Every project is handled with care, accountability, and pride in the final handover.",
  },
  {
    icon: Clock3,
    value: "On Time",
    title: "Dependable Delivery",
    text: "Realistic scheduling and steady progress from consultation to completion.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#10141b] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(201,151,72,0.16),transparent_34%,rgba(255,255,255,0.06))]" />
      <div className="absolute -right-24 top-16 h-72 w-72 border border-primary/25 rotate-45 animate-float-slow" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Why Choose Us</p>
          <h2 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight">
            Built for clients who expect the work to be done properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.title}
                className="group border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm hover:bg-white/[0.08] hover:border-primary/60 transition-all duration-300 animate-reveal-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="h-12 w-12 bg-primary text-[#11151b] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-2xl font-bold text-primary">{reason.value}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
