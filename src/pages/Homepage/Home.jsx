/* eslint-disable import/no-duplicates */
import fetchProducts from 'actions/products';
import Products from 'components/Products';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import ProductList from './scHome';

const Home = () => {
  const dispatch = useDispatch();
  const { productsData, isError, isFetching } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(fetchProducts);
    }

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  console.log('productsData: ', productsData);

  if (isError) return <h1>Fetchin error </h1>;
  if (isFetching) return <h1>Loading </h1>;

  const renderProductList = () =>
    productsData.length > 0 &&
    productsData.map((product) => <Products key={product.id} {...product} />);
  return (
    <>
      <h1>Products</h1>

      <ProductList>{renderProductList}</ProductList>
    </>
  );
};

export default Home;
