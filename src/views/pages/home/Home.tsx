import React, { useEffect, useState } from 'react';
import productService from '../../../services/Product.service';
import DSlider from '../../components/DSlider';
import ProductArray from '../../components/home/ProductArray';

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>();

  useEffect(() => {
    productService
      .getAllProduct()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <main>
        <div className="py-20">
          <DSlider />
        </div>
        <div>
          <ProductArray products={products} />
        </div>
      </main>
    </div>
  );
};

export default Home;
