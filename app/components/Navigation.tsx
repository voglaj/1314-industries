'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          Premium Engraving
        </Link>
        
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href="/products" className="nav-link">
            Shop Products
          </Link>
          <Link href="/how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/cart" className="nav-link nav-cart">
            🛒 Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
