import Link from 'next/link';
import '../info-page.css';

export default function FAQ() {
  const faqs = [
    {
      id: '1',
      question: 'How long does engraving take?',
      answer: 'Most orders are completed within 5-7 business days, excluding weekends and holidays.',
    },
    {
      id: '2',
      question: 'Can I change my order after submitting?',
      answer: 'Contact us within 24 hours of placing your order. We\'ll do our best to accommodate changes before engraving begins.',
    },
    {
      id: '3',
      question: 'What engraving options do you offer?',
      answer: 'We offer laser engraving and embossing depending on the material and product.',
    },
    {
      id: '4',
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within the continental United States. Contact us for international shipping inquiries.',
    },
    {
      id: '5',
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re unhappy, contact us for a return or replacement.',
    },
    {
      id: '6',
      question: 'Can you engrave corporate logos?',
      answer: 'Yes! We specialize in corporate engraving. Contact us for bulk orders and custom quotes.',
    },
  ];

  return (
    <main>
      <section className="info-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our engraving services</p>
        </div>
      </section>

      <section className="info-content">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Still have questions?</h2>
          <Link href="/contact" className="btn-primary btn-large">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
