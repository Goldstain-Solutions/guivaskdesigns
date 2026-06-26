"use client"

export default function CeoMessage() {
  return (
    <section id="ceo" className="py-20 bg-gradient-to-b from-primary to-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">MESSAGE FROM CEO</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="/images/screenshot-20-2823-29.png"
                alt="Geraldo Esrungo - Chief Executive Officer"
                className="w-full max-w-md h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">CEO Message</h3>

              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We are committed to delivering top-quality construction and design services. With years of experience in
                the industry, we have built a company that prioritizes excellence, safety, and client satisfaction. Our
                focus is on building lasting relationships with our clients while ensuring that every project is
                completed with precision and attention to detail.
              </p>
            </div>

            <div className="text-primary-foreground/80">
              <p className="font-semibold text-xl">Geraldo Esrungo</p>
              <p className="text-primary-foreground/60">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
