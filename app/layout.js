import './globals.css';
import SchemaOrg from './components/SchemaOrg';

export const metadata = {
  title: 'Mithila Makhana - Premium Lotus Seeds',
  description: 'Healthy, crunchy, and delicious Mithila Makhana straight from the farms of Mithilanchal. High-protein, gluten-free, perfect for snacking.',
  alternates: { canonical: 'https://agentic-a28dad2d.vercel.app' },
  openGraph: {
    title: 'Mithila Makhana - Premium Lotus Seeds',
    description: 'Healthy, crunchy, and delicious Mithila Makhana straight from the farms of Mithilanchal.',
    url: 'https://agentic-a28dad2d.vercel.app',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithila Makhana',
    description: 'Premium, crunchy, and healthy lotus seeds from Mithila.'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0f14'
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <nav className="site">
          <div className="container inner">
            <div className="brand">
              <div className="brand-badge">MM</div>
              <div>Mithila Makhana</div>
            </div>
            <div style={{display:'flex', gap:12}}>
              <a href="#benefits" className="btn secondary">Benefits</a>
              <a href="#shop" className="btn">Buy Now</a>
            </div>
          </div>
        </nav>
        {children}
        <SchemaOrg />
      </body>
    </html>
  );
}
