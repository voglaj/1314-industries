'use client';

import { useEffect, useState } from 'react';
import './CartToast.css';

interface Toast {
  id: number;
  productName: string;
  quantity: number;
}

const singularize = (word: string): string => {
  if (word.endsWith('ies')) {
    return word.slice(0, -3) + 'y';
  }
  if (word.endsWith('s')) {
    return word.slice(0, -1);
  }
  return word;
};

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
      {toasts.map(toast => {
        const displayName = toast.quantity === 1 ? singularize(toast.productName) : toast.productName;
        return (
          <div key={toast.id} className="toast-notification">
            <div className="toast-content">
              <span className="toast-icon">✓</span>
              <div className="toast-text">
                <p className="toast-title">Added to cart</p>
                <p className="toast-details">
                  {toast.quantity}x {displayName}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
