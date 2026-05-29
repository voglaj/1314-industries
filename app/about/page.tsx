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

            <div className="about-section">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Quality</h3>
                  <p>We use premium materials and precise engraving techniques to ensure every product exceeds expectations.</p>
                </div>
                <div className="value-card">
                  <h3>Personalization</h3>
                  <p>Each order receives personal attention to ensure your custom design is perfectly executed.</p>
                </div>
                <div className="value-card">
                  <h3>Customer Service</h3>
                  <p>Your satisfaction is our priority. We're here to help with questions and special requests.</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>We continuously improve our processes to offer new products and faster turnaround times.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Why Choose Us?</h2>
              <ul className="features-list">
                <li>Expert engraving team with 20+ years of combined experience</li>
                <li>Wide selection of products across multiple categories</li>
                <li>Fast turnaround times without compromising quality</li>
                <li>Secure online ordering with Stripe payment processing</li>
                <li>All items shipped with care and insurance included</li>
                <li>30-day satisfaction guarantee on all orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-intro">Dedicated professionals committed to your satisfaction</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>John Smith</h3>
              <p className="member-role">Master Engraver</p>
              <p className="member-bio">20+ years of engraving experience across all materials.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Design Specialist</p>
              <p className="member-bio">Creates custom designs that bring your vision to life.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Michael Lee</h3>
              <p className="member-role">Customer Service Lead</p>
              <p className="member-bio">Ensures every customer receives exceptional support.</p>
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
