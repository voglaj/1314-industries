'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (mobileMenuOpen) {
      timeoutRef.current = setTimeout(() => {
        setMobileMenuOpen(false);
      }, 2000);
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

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
          <Link href="/products" className="nav-link" onClick={closeMenu}>
            Shop Products
          </Link>
          <Link href="/how-it-works" className="nav-link" onClick={closeMenu}>
            How It Works
          </Link>
          <Link href="/faq" className="nav-link" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/cart" className="nav-link nav-cart" onClick={closeMenu}>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
