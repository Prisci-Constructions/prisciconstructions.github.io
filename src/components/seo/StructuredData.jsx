const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Prisci Constructions',
  description:
    'Expert waterproofing, structural repairs, building diagnostics, injection grouting, epoxy flooring and architecture & interior solutions across AP, Telangana, Karnataka and Maharashtra.',
  url: 'https://prisciconstructions.github.io',
  telephone: '+919000126099',
  email: 'info@prisciconstructions.com',
  foundingDate: '1999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#302, SRK Apartments, Ameerpet',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500073',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'State', name: 'Andhra Pradesh' },
    { '@type': 'State', name: 'Telangana' },
    { '@type': 'State', name: 'Karnataka' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction & Rehabilitation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waterproofing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building Diagnostics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Injection Grouting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Epoxy Flooring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architecture & Interiors' } },
    ],
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
