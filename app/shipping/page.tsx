import Link from 'next/link';
import '../info-page.css';

export default function ShippingPage() {
  return (
    <div className="info-page">
      <section className="info-header">
        <div className="container">
          <h1>Shipping Information</h1>
        </div>
      </section>

      <section className="info-content container">
        <div className="info-text">
          <p>
            All products are custom engraved and typically ship within 3–7 business days. Tracking information will be provided once your order ships. Delivery times may vary based on carrier performance and destination. Please ensure your shipping address is accurate, as customers are responsible for any additional shipping costs resulting from incorrect address information.
          </p>

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
