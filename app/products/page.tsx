import { Suspense } from 'react';
import '../products.css';
import { ProductsContent } from './ProductsClient';

function ProductsLoading() {
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
          <p>Loading products...</p>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="products-container">
      <Suspense fallback={<ProductsLoading />}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
