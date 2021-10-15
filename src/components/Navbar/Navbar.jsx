import './navbar.scss';

import fetchCategories from 'actions/categories';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.categoriesData.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.categoriesData.length]);

  if (categories.isFetching) return <div>Loading</div>;
  if (categories.isError) return <div>Error</div>;
  console.log(categories.categoriesData);
  return (
    <nav>
      <ul>
        <li>Hepsi</li>
        {categories.categoriesData.length > 0 &&
          categories.categoriesData.map((item) => <li>{item.title}</li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
