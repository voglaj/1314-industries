'use client';

import { useEffect, useState } from 'react';
import './CartToast.css';

interface Toast {
  id: number;
  productName: string;
  quantity: number;
}

export default function CartToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleCartUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ productName: string; quantity: number }>;
      const { productName, quantity } = customEvent.detail;
      
      const id = Date.now();
      const newToast: Toast = { id, productName, quantity };
      
      setToasts(prev => [...prev, newToast]);

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('itemAddedToCart', handleCartUpdate);
    return () => window.removeEventListener('itemAddedToCart', handleCartUpdate);
  }, []);

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast-notification">
          <div className="toast-content">
            <span className="toast-icon">✓</span>
            <div className="toast-text">
              <p className="toast-title">Added to cart</p>
              <p className="toast-details">
                {toast.quantity}x {toast.productName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
