"use client"

export default function ProfessionalAffiliations() {
  return (
    <section className="py-24 bg-[#17140f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-kicker">Industry Readiness</p>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary mb-6">Professional Affiliations</h2>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            As a leader in the construction sector, Guivas & K Design Projects (Pty) Ltd is committed to understanding and
            meeting the requirements of the regulatory frameworks that govern the industry. The company's leadership
            team are active members across a spectrum of relevant associations and regulatory bodies.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="relative mb-12">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-8 animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 shrink-0">
                {/* SACPCMP */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-[#2f261a]">SACPCMP</div>
                  </div>
                </div>

                {/* SAICE */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-[#2f261a]">SAICE</div>
                  </div>
                </div>

                {/* City Badge */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-[#2f261a]">CITY</div>
                  </div>
                </div>

                {/* CIDB */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-[#2f261a]">CIDB</div>
                  </div>
                </div>

                {/* NHBRC */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">NHBRC</div>
                    <div className="text-[8px] text-[#6a5740]">REGISTRATION COUNCIL</div>
                  </div>
                </div>

                {/* CETA */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-accent font-bold text-sm">CETA</div>
                    <div className="text-[8px] text-[#6a5740]">Construction Education</div>
                  </div>
                </div>

                {/* MBSA */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">MBSA</div>
                    <div className="text-[8px] text-[#6a5740]">Master Builders SA</div>
                  </div>
                </div>

                {/* MBA North */}
                <div className="bg-[#f8f0e1] p-4 rounded-[1.35rem] w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">MBA NORTH</div>
                    <div className="text-[8px] text-[#6a5740]">Master Builders</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
