import fetchProducts from 'actions/products';
import Header from 'components/Header';
import Products from 'components/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductList from './scHome';

const Home = () => {
  const { productsData, isError, isFetching } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

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

  if (isFetching) return <h1>Loading </h1>;
  if (isError) return <h1>Fetching error </h1>;

  const renderProductList = () =>
    productsData.length > 0 &&
    productsData.map((product) => <Products key={product.id} {...product} />);
  console.log('productsData: ', productsData);

  return (
    <>
      <Header />
      <h1>Products</h1>
      <ProductList>{renderProductList}</ProductList>
    </>
  );
};

export default Home;
