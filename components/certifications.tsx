"use client"

export default function Certifications() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-kicker">Trust & Compliance</p>
          <h2 className="mt-5 text-4xl font-bold text-foreground mb-4">Professional Certifications</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We are proudly registered with the National Home Builders Registration Council (NHBRC) and hold a Letter of
            Good Standing from the Department of Labour, demonstrating our commitment to quality, safety, and
            professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* NHBRC Certificate Card */}
          <div className="soft-card group relative overflow-hidden p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Certificate Image */}
              <div className="w-full flex-shrink-0">
                <div className="bg-muted rounded-xl overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <img src="/images/cert1.jpg" alt="NHBRC Certificate" className="w-full h-auto object-cover" />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Verified Registration
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">NHBRC Registered Builder</h3>
                <p className="text-sm font-semibold text-primary mb-3">Registration Number: 4000015765</p>

                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                  GERALDES AND FAMILY ENTERPRISE (PTY) LTD is officially registered with the National Home Builders
                  Registration Council.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">Consumer protection compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">Professional quality assurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">Valid through 20/12/2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Department of Labour Certificate Card */}
          <div className="soft-card group relative overflow-hidden p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Certificate Image */}
              <div className="w-full flex-shrink-0">
                <div className="bg-muted rounded-xl overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="/images/whatsapp-20image-202025-12-11-20at-2008.jpeg"
                    alt="Department of Labour Letter of Good Standing"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Good Standing</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">Department of Labour Certificate</h3>
                <p className="text-sm font-semibold text-accent mb-3">Certificate Number: 2020152120</p>

                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                  Letter of Good Standing certifying compliance with the Compensation for Occupational Injuries and
                  Diseases Act 130 of 1993.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground/80 text-sm">Occupational health & safety compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground/80 text-sm">Worker protection & compensation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground/80 text-sm">Building, electrical, roof construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/60">
            Trust us with your next project. Our professional certifications ensure compliance, safety, and your peace
            of mind.
          </p>
        </div>
      </div>
    </section>
  )
}
