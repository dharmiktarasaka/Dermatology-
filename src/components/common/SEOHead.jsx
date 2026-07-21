import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ 
  title = 'Dermatologist in Ahmedabad | Aurelia Skin & Hair Institute',
  description = 'Explore medical dermatology, hair and scalp care, aesthetic treatments, laser services, skin concerns, and consultation experiences at Aurelia Skin & Hair Institute in Ahmedabad.',
  canonical = 'https://aurelia-dermatology.demo',
  keywords = 'dermatologist in Ahmedabad, skin clinic Ahmedabad, hair specialist Ahmedabad, acne treatment Ahmedabad, pigmentation laser, aesthetic dermatology',
  schemaData = null
}) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Aurelia Skin & Hair Institute",
    "alternateName": "Aurelia Dermatology & Hair Clinic",
    "description": description,
    "url": canonical,
    "logo": "https://aurelia-dermatology.demo/logo.png",
    "medicalSpecialty": ["Dermatology", "Trichology", "LaserSurgery"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "402 Aurelia Pinnacle, Off S.G. Highway, Satellite",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "telephone": "+91-79-4000-8899",
    "priceRange": "$$$",
    "openingHours": "Mo-Sa 10:00-19:30"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" />
      
      {/* Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
    </Helmet>
  );
}
