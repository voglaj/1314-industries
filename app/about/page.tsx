import Link from 'next/link';
import '../info-page.css';

export default function About() {
  return (
    <main>
      <section className="info-header">
        <div className="container">
          <h1>About Premium Engraving</h1>
          <p>Crafting meaningful memories since 2024</p>
        </div>
      </section>

      <section className="info-content">
        <div className="container">
          <div className="about-sections">
            <div className="about-section">
              <h2>Our Story</h2>
              <p>1314 Industries was founded by Pat Engelbride and Matt Bievenue. They have been building together long before this business ever existed. Their partnership started over a decade ago in high school, where they played hockey together on the same line for three straight seasons—learning firsthand the value of trust, communication, and accountability while developing a shared mindset centered around discipline, consistency, and performing under pressure.</p>
              <p>Years later, they have taken that same chemistry and work ethic into building something of their own. What started as a friendship has grown into a business rooted in reliability, attention to detail, and a shared commitment to doing things the right way.</p>
            </div>


          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-intro">Two friends with a shared goal</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Matt Bievenue</h3>
              <p className="member-bio">20+ years of engraving experience across all materials.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Pat Engelbride</h3>
              <p className="member-bio">Creates custom designs that bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Start Your Custom Order Today</h2>
          <Link href="/products" className="btn-primary btn-large">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
