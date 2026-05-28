'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import '../products.css';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  { id: '1', name: 'Leather Bracelet', price: 34.99, category: 'jewelry', image: '⌚', description: 'Premium leather with custom engraving' },
  { id: '2', name: 'Silver Necklace', price: 54.99, category: 'jewelry', image: '⛓️', description: 'Sterling silver personalized pendant' },
  { id: '3', name: 'Crystal Award', price: 89.99, category: 'awards', image: '🏆', description: 'Elegant crystal trophy with custom text' },
  { id: '4', name: 'Wooden Plaque', price: 49.99, category: 'awards', image: '📜', description: 'Premium wood recognition plaque' },
  { id: '5', name: 'Personalized Mug', price: 14.99, category: 'gifts', image: '☕', description: 'Ceramic mug with custom photo/text' },
  { id: '6', name: 'Custom Keychain', price: 9.99, category: 'gifts', image: '🔑', description: 'Metal keychain with engraved initials' },
  { id: '7', name: 'Branded Water Bottle', price: 24.99, category: 'corporate', image: '🍶', description: 'Stainless steel with company logo' },
  { id: '8', name: 'Engraved Pen Set', price: 39.99, category: 'corporate', image: '✒️', description: 'Premium pen set for corporate gifts' },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="products-container">
      <section className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Explore our collection of customizable items perfect for any occasion</p>
        </div>
      </section>

      <section className="products-content container">
        <aside className="filters">
          <h3>Categories</h3>
          <div className="filter-group">
            <Link 
              href="/products" 
              className={`filter-link ${categoryFilter === 'all' ? 'active' : ''}`}
            >
              All Products
            </Link>
            <Link 
              href="/products?category=jewelry" 
              className={`filter-link ${categoryFilter === 'jewelry' ? 'active' : ''}`}
            >
              Jewelry
            </Link>
            <Link 
              href="/products?category=awards" 
              className={`filter-link ${categoryFilter === 'awards' ? 'active' : ''}`}
            >
              Awards & Trophies
            </Link>
            <Link 
              href="/products?category=gifts" 
              className={`filter-link ${categoryFilter === 'gifts' ? 'active' : ''}`}
            >
              Custom Gifts
            </Link>
            <Link 
              href="/products?category=corporate" 
              className={`filter-link ${categoryFilter === 'corporate' ? 'active' : ''}`}
            >
              Corporate Items
            </Link>
          </div>
        </aside>

        <div className="products-main">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button 
                    className="btn-primary btn-small"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      {cart.length > 0 && (
        <div className="cart-notification">
          <p>{cart.length} item(s) in cart</p>
          <Link href="/cart" className="btn-primary btn-small">
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
}
