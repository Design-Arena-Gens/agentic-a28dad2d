export default function SchemaOrg() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mithila Makhana - Premium Roasted Lotus Seeds',
    image: [
      'https://images.unsplash.com/photo-1615485737658-2c4bfc4a82f3?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Healthy, crunchy, protein-rich roasted makhana from Mithilanchal.',
    brand: {
      '@type': 'Brand',
      name: 'Mithila Makhana'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '199',
      availability: 'https://schema.org/InStock'
    }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
