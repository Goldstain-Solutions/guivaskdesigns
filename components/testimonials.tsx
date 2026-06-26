"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Thabo Mthembu",
    role: "Homeowner",
    image: "/placeholder.svg?height=100&width=100",
    text: "Guivas & K Design Projects (Pty) Ltd transformed our home beyond our expectations. Their attention to detail and professional service made the entire process smooth and enjoyable.",
    rating: 5,
  },
  {
    name: "Sipho Dlamini",
    role: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    text: "We hired them for our commercial space and couldn't be happier. On-time, within budget, and exceptional quality. Highly recommended!",
    rating: 5,
  },
  {
    name: "Nomvula Khumalo",
    role: "Real Estate Developer",
    image: "/placeholder.svg?height=100&width=100",
    text: "Working with Guivas & K Design Projects (Pty) Ltd on multiple projects has been consistently excellent. They're reliable, skilled, and truly care about their work.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="section-kicker">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied customers across our portfolio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
