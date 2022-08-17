import React from 'react';
import ProductCard from '../common/ProductCard';

const ProductArray = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductArray;
