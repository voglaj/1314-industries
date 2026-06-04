import Link from 'next/link';
import '../info-page.css';

export default function ReturnsPage() {
  return (
    <div className="info-page">
      <section className="info-header">
        <div className="container">
          <h1>Returns & Refunds</h1>
        </div>
      </section>

      <section className="info-content container">
        <div className="info-text">
          <p>
            Because our products are custom engraved and made to order, all sales are final. If your order arrives damaged, defective, or incorrect, please contact us within 7 days of delivery with photos of the issue, and we will make it right. Orders may be canceled within 24 hours of purchase, provided production has not yet begun.
          </p>

          <div className="info-spacer"></div>

          <div className="info-actions">
            <Link href="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
