'use client';

import { useState } from 'react';
import './ProductModal.css';

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productId: string, options: Record<string, string>) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  // Coins options
  const [selectedSize, setSelectedSize] = useState<string>('32mm');
  const [selectedType, setSelectedType] = useState<string>('stainless steel');

  // Tumblers & Koozies options
  const [selectedColor, setSelectedColor] = useState<string>('red');

  if (!isOpen) return null;

  const handleAddToCart = () => {
    const options: Record<string, string> = {};

    if (product.id === '1' || product.id === '4') {
      options.size = selectedSize;
      options.type = selectedType;
    } else if (product.id === '2' || product.id === '3') {
      options.color = selectedColor;
    }

    onAddToCart(product.id, options);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <div className="product-image-placeholder">{product.name}</div>
          </div>

          <div className="modal-details">
            <h2>{product.name}</h2>
            <p className="modal-description">{product.description}</p>

            {(product.id === '1' || product.id === '4') && (
              <>
                <div className="modal-section">
                  <h3>Select Size</h3>
                  <div className="options-group">
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="size"
                        value="32mm"
                        checked={selectedSize === '32mm'}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      />
                      <span>32mm</span>
                    </label>
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="size"
                        value="40mm"
                        checked={selectedSize === '40mm'}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      />
                      <span>40mm</span>
                    </label>
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Select Type</h3>
                  <div className="options-group">
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="type"
                        value="stainless steel"
                        checked={selectedType === 'stainless steel'}
                        onChange={(e) => setSelectedType(e.target.value)}
                      />
                      <span>Stainless Steel</span>
                    </label>
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="type"
                        value="copper"
                        checked={selectedType === 'copper'}
                        onChange={(e) => setSelectedType(e.target.value)}
                      />
                      <span>Copper</span>
                    </label>
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="type"
                        value="brass"
                        checked={selectedType === 'brass'}
                        onChange={(e) => setSelectedType(e.target.value)}
                      />
                      <span>Brass</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {(product.id === '2' || product.id === '3') && (
              <div className="modal-section">
                <h3>Select Color</h3>
                <div className="options-group">
                  <label className="option-radio">
                    <input
                      type="radio"
                      name="color"
                      value="red"
                      checked={selectedColor === 'red'}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <span>Red</span>
                  </label>
                  <label className="option-radio">
                    <input
                      type="radio"
                      name="color"
                      value="black"
                      checked={selectedColor === 'black'}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <span>Black</span>
                  </label>
                  <label className="option-radio">
                    <input
                      type="radio"
                      name="color"
                      value="navy blue"
                      checked={selectedColor === 'navy blue'}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <span>Navy Blue</span>
                  </label>
                </div>
              </div>
            )}

            <div className="modal-footer">
              <span className="modal-price">${product.price}</span>
              <button 
                className="btn-primary btn-small"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
