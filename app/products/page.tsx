'use client';

import { useState, useEffect } from 'react';
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
  { id: '1', name: 'Coins', price: 25, category: 'gifts', image: '', description: 'Custom engraved coins for collections and gifts' },
  { id: '2', name: 'Tumblers', price: 55, category: 'gifts', image: '', description: 'Personalized tumblers with custom engraving' },
  { id: '3', name: 'Koozies', price: 35, category: 'gifts', image: '', description: 'Custom engraved koozies for beverages' },
  { id: '4', name: 'Ball Markers', price: 10, category: 'gifts', image: '', description: 'Custom golf ball markers with engraved designs' },
  { id: '5', name: 'Inquire Here', price: 0, category: 'corporate', image: '', description: "Don't see what you are looking for? Contact us for custom product questions and bulk orders" },
];

interface CartItem {
  id: string;
  quantity: number;
  price: number;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('cart');
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (e) {
        setCart([]);
      }
    }
  }, []);

  const filteredProducts = categoryFilter === 'all'
    ? products
    : products.filter(p => p.category === categoryFilter);

  const addToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    let updated: CartItem[];

    if (existing) {
      updated = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { id: productId, quantity: 1, price: product.price }];
    }

    setCart(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
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
        <div className="products-main">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  {product.price > 0 && <span className="product-price">${product.price}</span>}
                  {product.id === '5' ? (
                    <Link href="/contact" className="btn-primary btn-small">
                      Contact Us
                    </Link>
                  ) : (
                    <button
                      className="btn-primary btn-small"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                  )}
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
