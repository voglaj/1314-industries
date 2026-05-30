import Link from 'next/link';
import './home.css';

export default function Home() {
  const categories = [
    {
      id: 'jewelry',
      name: 'Jewelry',
      icon: '💍',
      description: 'Custom engraved bracelets, necklaces, and more',
    },
    {
      id: 'awards',
      name: 'Awards & Trophies',
      icon: '🏆',
      description: 'Professional recognition plaques and awards',
    },
    {
      id: 'gifts',
      name: 'Custom Gifts',
      icon: '🎁',
      description: 'Personalized gifts for any occasion',
    },
    {
      id: 'corporate',
      name: 'Corporate Items',
      icon: '💼',
      description: 'Branded merchandise and promotional products',
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text">
            <h1>Personalize Coins, Tumblers, Ball Markers & More</h1>
            <p>Create meaningful, custom engraved products that tell your story or shop our standard designs</p>
            <div className="hero-buttons">
              <Link href="/products" className="btn-primary">
                Start Shopping
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                Learn How It Works
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              ✨ Premium Engraving ✨
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Special?</h2>
            <p>Browse our collection and start personalizing today</p>
            <Link href="/products" className="btn-primary btn-large">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
