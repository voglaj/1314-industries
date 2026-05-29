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
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2F1c50e5cbce564585a04576fc45186917?format=webp&width=800&height=1200" alt="1314 Industries" style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }} />
              <h2>Our Story</h2>
              <p>1314 Industries was founded by Pat Engelbride and Matt Bievenue. They have been working together long before this business ever existed. Their partnership started over a decade ago in high school, where they played hockey together on the same line for three straight seasons—learning firsthand the value of trust, communication, and accountability while developing a shared mindset centered around discipline, consistency, and performing under pressure.<br/><br/>Years later, they have taken that same chemistry and work ethic into building something of their own. What started as a friendship has grown into a business rooted in reliability, attention to detail, and a shared commitment to doing things the right way.</p>
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
              <p className="member-bio">Pat enjoys traveling, hunting, hiking, and exploring the outdoors. Having lived and worked throughout the Northeast and Mid-Atlantic regions before ultimately settling in Northern Virginia, he has developed a strong appreciation for travel and adventure. Pat has visited 39 states and numerous national parks, with a particular appreciation for the American West and the Adirondack Mountains.<br/>Professionally, Pat is a CPA based in Arlington, Virginia, where he specializes in corporate, partnership, and individual taxation. He earned his Bachelors degree in Accounting from the University of Maryland and his Masters degree in Accounting from Siena College. He also holds a certification in Fraud and Digital Forensics.</p>
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
