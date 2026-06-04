'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import '../product-detail.css';

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
];

const ballMarkerImages = [
  'https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2Fcc778232df1e431287e2207691cc743d?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2Fa9cd9068cd31419ba82b48ce6c30f6b8%2Fe41049927fbc4a13ba21446609412e7f?format=webp&width=800&height=1200',
];

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);

  // Coins & Ball Markers options
  const [selectedSize, setSelectedSize] = useState<string>('32mm');
  const [selectedType, setSelectedType] = useState<string>('stainless steel');

  // Tumblers & Koozies options
  const [selectedColor, setSelectedColor] = useState<string>('red');

  // Design type
  const [selectedDesign, setSelectedDesign] = useState<string>('standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
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

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="not-found-container">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const getAdjustedPrice = () => {
    const customDesignPrices: Record<string, number> = {
      '1': 35, // Coins custom
      '2': 65, // Tumblers custom
      '3': 45, // Koozies custom
    };

    if ((product.id === '1' || product.id === '2' || product.id === '3') && selectedDesign === 'custom') {
      return customDesignPrices[product.id] || product.price;
    }

    return product.price;
  };

  const handleAddToCart = () => {
    const existing = cart.find(item => item.id === productId);
    let updated: CartItem[];

    if (existing) {
      updated = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      updated = [...cart, { id: productId, name: product.name, quantity, price: getAdjustedPrice() }];
    }

    setCart(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
    setQuantity(1);
  };

  return (
    <div className="product-detail-page">
      <section className="product-detail-container">
        <div className="product-detail-header">
          <Link href="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>

        <div className="product-detail-content">
          <div className="product-image-section">
            {productId === '4' && selectedSize === '40mm' && selectedType === 'brass' ? (
              <div className="image-gallery">
                <div className="gallery-main">
                  <img
                    src={ballMarkerImages[currentImageIndex]}
                    alt="Ball Marker Example"
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-thumbnails">
                  {ballMarkerImages.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="product-image-large">{product.image}</div>
            )}
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>

            {(product.id === '1' || product.id === '4') && (
              <>
                <div className="option-section">
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

                <div className="option-section">
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
              <>
                <div className="option-section">
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

                <div className="option-section">
                  <h3>Design Type</h3>
                  <div className="options-group">
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="design"
                        value="standard"
                        checked={selectedDesign === 'standard'}
                        onChange={(e) => setSelectedDesign(e.target.value)}
                      />
                      <span>Standard Design</span>
                    </label>
                    <label className="option-radio">
                      <input
                        type="radio"
                        name="design"
                        value="custom"
                        checked={selectedDesign === 'custom'}
                        onChange={(e) => setSelectedDesign(e.target.value)}
                      />
                      <span>Custom Design</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {product.id === '1' && (
              <div className="option-section">
                <h3>Design Type</h3>
                <div className="options-group">
                  <label className="option-radio">
                    <input
                      type="radio"
                      name="design"
                      value="standard"
                      checked={selectedDesign === 'standard'}
                      onChange={(e) => setSelectedDesign(e.target.value)}
                    />
                    <span>Standard Design</span>
                  </label>
                  <label className="option-radio">
                    <input
                      type="radio"
                      name="design"
                      value="custom"
                      checked={selectedDesign === 'custom'}
                      onChange={(e) => setSelectedDesign(e.target.value)}
                    />
                    <span>Custom Design</span>
                  </label>
                </div>
              </div>
            )}

            <div className="product-detail-footer">
              <span className="product-detail-price">${getAdjustedPrice()}</span>
              <div className="quantity-selector">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  title="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                />
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  title="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
