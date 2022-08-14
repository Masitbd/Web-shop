import React from 'react';
import DSlider from '../../components/DSlider';
import ProductArray from '../../components/home/ProductArray';

const Home = () => {
  return (
    <div>
      <main>
        <div className="py-20">
          <DSlider />
        </div>
        <div>
          <ProductArray />
        </div>
      </main>
    </div>
  );
};

export default Home;
