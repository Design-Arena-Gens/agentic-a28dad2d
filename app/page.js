import Image from 'next/image';

function Hero(){
  return (
    <header className="hero">
      <div className="container">
        <div className="panel">
          <div>
            <h1>Premium Mithila Makhana ? Healthy. Crunchy. Authentic.</h1>
            <p>Handpicked in Mithilanchal, popped to perfection. Protein-packed, gluten-free, and roasted without compromise. Snack better, live better.</p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="#shop" className="btn">Shop Fresh Packs</a>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20order%20Mithila%20Makhana" target="_blank" className="btn secondary" rel="noreferrer">Order on WhatsApp</a>
            </div>
            <div className="badges">
              <span className="badge">Gluten-free</span>
              <span className="badge">High protein</span>
              <span className="badge">No preservatives</span>
              <span className="badge">Roasted, not fried</span>
            </div>
          </div>
          <div className="imgwrap">
            <Image src="https://images.unsplash.com/photo-1604908554235-00bcf31c0f96?q=80&w=1200&auto=format&fit=crop" alt="Bowl of roasted makhana" width={1200} height={900} style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
        </div>
      </div>
    </header>
  );
}

function BenefitCards(){
  const items = [
    { title: 'Pure & Authentic', text: 'Sourced from trusted farmers in Mithila; no mixing, no shortcuts.' },
    { title: 'Nutritious Snack', text: 'Rich in protein, iron, and fiber. Ideal for kids and adults.' },
    { title: 'Versatile', text: 'Snack straight, toss in salads, or cook delightful curries and kheer.' }
  ];
  return (
    <section id="benefits" className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Why Mithila Makhana?</h2>
        <div className="cards">
          {items.map((i, idx)=> (
            <div className="card" key={idx}>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product(){
  return (
    <section id="shop" className="section">
      <div className="container product">
        <div className="imgwrap" style={{aspectRatio:'1/1'}}>
          <Image src="https://images.unsplash.com/photo-1615485737658-2c4bfc4a82f3?q=80&w=1200&auto=format&fit=crop" alt="Premium Mithila Makhana pack" width={1000} height={1000} style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div>
          <h2 style={{marginTop:0}}>Premium Roasted Makhana</h2>
          <p style={{color:'var(--muted)'}}>Crunchy roasted foxnuts seasoned lightly with Himalayan salt. Sealed for freshness.</p>
          <div className="price">?199 <span style={{color:'var(--muted)', fontSize:16}}>/ 100g pack</span></div>
          <div style={{display:'flex', gap:12, marginTop:14, flexWrap:'wrap'}}>
            <a className="btn" href="https://wa.me/919999999999?text=Order%20100g%20Mithila%20Makhana%20pack" target="_blank" rel="noreferrer">Buy via WhatsApp</a>
            <a className="btn secondary" href="mailto:orders@mithilamakhana.com?subject=Order%20Enquiry">Enquire via Email</a>
          </div>
          <ul style={{marginTop:14, paddingLeft:18, color:'var(--muted)'}}>
            <li>100% Natural, Vegan</li>
            <li>Vacuum sealed freshness</li>
            <li>COD available in select locations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  const quotes = [
    { by: 'Ananya, Delhi', text: 'Crispiest makhana I?ve had. Perfect with evening tea!' },
    { by: 'Rahul, Patna', text: 'Authentic taste reminds me of home. Great for fasting too.' },
    { by: 'Priya, Mumbai', text: 'Healthy snack for my kids. They love it!' }
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Loved by Snackers Nationwide</h2>
        <div className="testimonials">
          {quotes.map((q, i)=> (
            <div className="quote" key={i}>
              <p>?{q.text}?</p>
              <div className="by">? {q.by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const list = [
    { q: 'Is it roasted or fried?', a: 'Our makhana is hot-air roasted. No frying oil used.' },
    { q: 'Shelf life?', a: 'Best before 6 months from packing. Store in airtight container.' },
    { q: 'Do you take bulk orders?', a: 'Yes, we supply to retailers and events. Contact us on WhatsApp.' }
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>FAQ</h2>
        <div className="faq">
          {list.map((item, i)=> (
            <div className="q" key={i}>
              <strong>{item.q}</strong>
              <span style={{color:'var(--muted)'}}>{item.a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
        <div>? {new Date().getFullYear()} Mithila Makhana</div>
        <div style={{display:'flex', gap:12}}>
          <a className="btn secondary" href="mailto:hello@mithilamakhana.com">Contact</a>
          <a className="btn secondary" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page(){
  return (
    <main>
      <Hero />
      <BenefitCards />
      <Product />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
