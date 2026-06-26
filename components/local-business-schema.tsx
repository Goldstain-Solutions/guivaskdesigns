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
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6159 Sierra Leone Avenue, Cosmo City Ext 06",
        addressLocality: "Randburg",
        postalCode: "2188",
        addressCountry: "ZA",
      },
      areaServed: ["Randburg", "Johannesburg", "Cosmo City", "Roodepoort", "Sandton", "Fourways"],
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
