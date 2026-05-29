import Link from 'next/link';
import '../info-page.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Browse & Select',
      description: 'Explore our collection of customizable products',
      icon: '',
    },
    {
      number: '2',
      title: 'Design Your Item',
      description: 'Add your custom text or logo, initials, or personal message to your chosen product.',
      icon: '',
    },
    {
      number: '3',
      title: 'Review & Confirm',
      description: 'Review your design and specifications before adding to cart.',
      icon: '',
    },
    {
      number: '4',
      title: 'Checkout',
      description: 'Secure payment through Stripe with your credit or debit card.',
      icon: '',
    },
    {
      number: '5',
      title: 'Engraving',
      description: 'Our team precisely engraves your custom design on your product.',
      icon: '',
    },
    {
      number: '6',
      title: 'We Ship, You Enjoy',
      description: 'Your personalized item is carefully packaged and shipped to you.',
      icon: '',
    },
  ];

  return (
    <main>
      <section className="info-header">
        <div className="container">
          <h1>How It Works</h1>
          <p>Our simple 6-step process makes creating personalized gifts easy</p>
        </div>
      </section>

      <section className="info-content">
        <div className="container">
          <div className="steps-grid">
            {steps.map((step) => {
              const stepContent = (
                <>
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </>
              );

              if (step.number === '1') {
                return (
                  <Link key={step.number} href="/products" className="step-card">
                    {stepContent}
                  </Link>
                );
              }

              return (
                <div key={step.number} className="step-card">
                  {stepContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does engraving take?</h4>
              <p>Most orders are completed within 5-7 business days, excluding weekends and holidays.</p>
            </div>
            <div className="faq-item">
              <h4>Can I change my order after submitting?</h4>
              <p>Contact us within 24 hours of placing your order. We'll do our best to accommodate changes before engraving begins.</p>
            </div>
            <div className="faq-item">
              <h4>What engraving options do you offer?</h4>
              <p>We offer laser engraving and embossing depending on the material and product.</p>
            </div>
            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>Currently, we ship within the continental United States. Contact us for international shipping inquiries.</p>
            </div>
            <div className="faq-item">
              <h4>What if I'm not satisfied?</h4>
              <p>We offer a 30-day satisfaction guarantee. If you're unhappy, contact us for a return or replacement.</p>
            </div>
            <div className="faq-item">
              <h4>Can you engrave corporate logos?</h4>
              <p>Yes! We specialize in corporate engraving. Contact us for bulk orders and custom quotes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to create something special?</h2>
          <Link href="/products" className="btn-primary btn-large">
            Start Shopping Now
          </Link>
        </div>
      </section>
    </main>
  );
}
