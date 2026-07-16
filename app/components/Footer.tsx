import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h3>Premium Engraving</h3>
          <p>Crafting memories through custom engraving services since 2026.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/products">Shop</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:support@1314industries.com">support@1314industries.com</a></p>
          <p>Instagram: <a href="https://instagram.com/1314industries" target="_blank" rel="noopener noreferrer">@1314industries</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Premium Engraving. All rights reserved.</p>
      </div>
    </footer>
  );
}
