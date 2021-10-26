import './home.scss';

import fetchProducts from 'actions/products';
import Header from 'components/Header';
import Navbar from 'components/Navbar/Navbar';
import ProductsList from 'components/Products/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../../assets/images/Banner.png';
import spinner from '../../assets/loading.svg';

const Home = () => {
  const { isError, isFetching } = useSelector((state) => state.products);
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

  if (isFetching)
    return (
      <div className="spinner">
        <img src={spinner} alt="spinner" />
      </div>
    );
  if (isError) return <h1>Fetching error </h1>;

  return (
    <>
      <Header />
      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
      <div className="nav">
        <Navbar />
      </div>
      <ProductsList />
    </>
  );
};

export default Home;
