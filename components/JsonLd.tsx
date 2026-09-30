import React from 'react'

const data = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tayo Opeyemi",
  "email": "mailto:opeyemitecharchitect@gmail.com",
  "url": "https://your-domain.vercel.app"
}

export default function JsonLd(){
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
