import React from 'react';
import useAPI from '../../../hooks/useAPI';
import ProductService from '../../../services/Product.service';
import DSlider from '../../components/DSlider';
import ProductArray from '../../components/home/ProductArray';

const Home = () => {
  /* const [products, setProducts] = useState<[] | IProduct[]>([]);

  useEffect(() => {
    productService
      .getAllProduct()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []); */
  const { data: products } = useAPI<IProduct[]>(ProductService.getAllProduct);
  return (
    <div>
      <main>
        <div className="py-20">
          <DSlider />
        </div>
        <div>{products && <ProductArray products={products} />}</div>
      </main>
    </div>
  );
};

export default Home;
