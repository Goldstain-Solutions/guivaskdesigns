"use client"

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
      "@id": "https://newguivaskdesigns.netlify.app/#business",
      name: "Guivas & K Design Projects (Pty) Ltd",
      alternateName: "Guivas and K",
      url: "https://newguivaskdesigns.netlify.app/",
      telephone: "+27 78 694 0018",
      email: "guivaskdesigns@gmail.com",
      image: "https://newguivaskdesigns.netlify.app/images/1.jpg",
      logo: "https://newguivaskdesigns.netlify.app/icon.svg",
      priceRange: "$$",
      currenciesAccepted: "ZAR",
      paymentAccepted: "Cash, EFT",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6159 Sierra Leone Avenue, Cosmo City Ext 06",
        addressLocality: "Randburg",
        postalCode: "2188",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.0207,
        longitude: 27.9306,
      },
      hasMap:
        "https://www.google.com/maps?q=6159%20Sierra%20Leone%20Avenue%20Cosmo%20City%20Ext%2006%20Randburg%202188",
      areaServed: ["Randburg", "Johannesburg", "Cosmo City", "Roodepoort", "Sandton", "Fourways", "Midrand"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      serviceType: [
        "Construction Company Randburg",
        "Builders Johannesburg",
        "Home Renovations Johannesburg",
        "Bathroom Renovations Randburg",
        "Plumbing Services Randburg",
        "Kitchen Installation Randburg",
        "Tiling Contractors Johannesburg",
      ],
      makesOffer: [
        "Building & Construction",
        "Home Renovations",
        "Bathroom Renovations",
        "Kitchen & Cupboard Installation",
        "Plumbing",
        "Tiling",
        "Painting",
        "Carpentry",
        "Flooring",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: "Randburg and Johannesburg",
        },
      })),
    },
    {
      "@type": "Organization",
      "@id": "https://newguivaskdesigns.netlify.app/#organization",
      name: "Guivas & K Design Projects (Pty) Ltd",
      url: "https://newguivaskdesigns.netlify.app/",
      email: "guivaskdesigns@gmail.com",
      telephone: "+27 78 694 0018",
      logo: "https://newguivaskdesigns.netlify.app/icon.svg",
    },
    {
      "@type": "WebSite",
      "@id": "https://newguivaskdesigns.netlify.app/#website",
      url: "https://newguivaskdesigns.netlify.app/",
      name: "Guivas & K Design Projects",
      publisher: {
        "@id": "https://newguivaskdesigns.netlify.app/#organization",
      },
    },
  ],
}

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema),
      }}
    />
  )
}
