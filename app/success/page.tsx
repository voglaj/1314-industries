import Link from 'next/link';
import './success.css';

export default function SuccessPage() {
  return (
    <main className="success-container">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="success-message">Thank you for your order. We'll start engraving your items right away.</p>
        
        <div className="success-details">
          <div className="detail-item">
            <span className="detail-label">📧 Confirmation</span>
            <span className="detail-value">Check your email for order details</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">⏱️ Turnaround</span>
            <span className="detail-value">5-7 business days</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">📦 Shipping</span>
            <span className="detail-value">Tracking info will be sent via email</span>
          </div>
        </div>

        <div className="success-actions">
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
          <Link href="/" className="btn-secondary">
            Return to Home
          </Link>
        </div>

        <div className="need-help">
          <p>Need help? <Link href="/contact">Contact our team</Link></p>
        </div>
      </div>
    </main>
  );
}
