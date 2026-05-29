'use client';

import { useState } from 'react';
import '../info-page.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <section className="info-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with any questions or special requests.</p>
        </div>
      </section>

      <section className="info-content">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:Pat@1314industries.com">Pat@1314industries.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2Fa631c0a808214b208898804fa34c5073?format=webp&width=800&height=1200" alt="Instagram" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3>Instagram</h3>
                  <p><a href="https://instagram.com/1314Industries" target="_blank" rel="noopener noreferrer">@1314Industries</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2Fdf898e810bbc4b67b7a85c859f89f3cc?format=webp&width=800&height=1200" alt="Facebook" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3>Facebook</h3>
                  <p><a href="https://facebook.com/1314Industries" target="_blank" rel="noopener noreferrer">1314 Industries</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="custom">Custom Order Request</option>
                  <option value="issue">Report an Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you're thinking..."
                  rows={6}
                />
              </div>

              <button type="submit" className="btn-primary btn-large">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
