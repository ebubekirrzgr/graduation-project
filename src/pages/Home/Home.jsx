import './home.scss';

import fetchProducts from 'actions/products';
import Header from 'components/Header';
import Navbar from 'components/Navbar/Navbar';
import ProductsList from 'components/Products/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../../assets/images/Banner.png';

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

  return (
    <>
      <Header />
      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
      <Navbar />
      <ProductsList />
    </>
  );
};

export default Home;
