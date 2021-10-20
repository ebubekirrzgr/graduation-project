import './navbar.scss';

import fetchCategories from 'actions/categories';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
  return (
    <nav>
      <ul>
        <Link to="/Home">
          <li>Hepsi</li>
        </Link>
        {categories.categoriesData.length > 0 &&
          categories.categoriesData.map((item) => (
            <Link
              to={{
                pathname: `/Home`,
                search: `?sort=${item.title}`,
              }}
              key={item.id}
            >
              <li key={item.id}>{item.title}</li>
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
