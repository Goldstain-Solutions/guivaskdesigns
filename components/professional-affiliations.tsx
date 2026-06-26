"use client"

export default function ProfessionalAffiliations() {
  return (
    <section className="py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-kicker">Industry Readiness</p>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#c4d82e] mb-6">PROFESSIONAL AFFILIATIONS</h2>
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
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800">SACPCMP</div>
                  </div>
                </div>

                {/* SAICE */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800">SAICE</div>
                  </div>
                </div>

                {/* City Badge */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800">CITY</div>
                  </div>
                </div>

                {/* CIDB */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800">CIDB</div>
                  </div>
                </div>

                {/* NHBRC */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">NHBRC</div>
                    <div className="text-[8px] text-gray-600">REGISTRATION COUNCIL</div>
                  </div>
                </div>

                {/* CETA */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-orange-500 font-bold text-sm">CETA</div>
                    <div className="text-[8px] text-gray-600">Construction Education</div>
                  </div>
                </div>

                {/* MBSA */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">MBSA</div>
                    <div className="text-[8px] text-gray-600">Master Builders SA</div>
                  </div>
                </div>

                {/* MBA North */}
                <div className="bg-white p-4 rounded-lg w-40 h-24 flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-[#003366] font-bold text-sm">MBA NORTH</div>
                    <div className="text-[8px] text-gray-600">Master Builders</div>
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
