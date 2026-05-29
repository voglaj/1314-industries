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
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2Fcee59e4865bd4b4e8bb5a9f54b04e427?format=webp&width=800&height=1200" alt="1314 Industries" className="logo-image" />
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
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
