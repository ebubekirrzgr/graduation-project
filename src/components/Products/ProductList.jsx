import './product.scss';

import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import fetchProducts from '../../actions/products';

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState(location.search);
  const count = useRef(0);
  const [forcePage, setForcePage] = useState(undefined);
  const [paginationButtons, setPaginationButtons] = useState(undefined);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const searchParams =
    decodeURIComponent(location.search.split('=')[1]) ||
    location.search.split('=')[1];

  useEffect(() => {
    setPaginationButtons(document.querySelectorAll('.paginationButtons li'));
  }, [searchParams]);

  useEffect(() => {
    setQuery(searchParams);
  }, [location.search, searchParams]);

  useEffect(() => {
    changePage({ selected: 0 });
    count.current = 0;
  }, [searchParams]);

  useEffect(() => {
    if (pageNumber !== count.current) {
      changePage({ selected: 0 });
      setForcePage(0);
    } else {
      setForcePage(undefined);
    }

    paginationButtons?.forEach((item, index) => {
      item.classList.remove('paginationActive');
      if (index === 1 && paginationButtons.length > 3) {
        item.className = 'paginationActive';
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationButtons, searchParams]);

  useEffect(() => {
    if (products.productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.productsData.length]);

  if (products.isFetching) return <div>Loading...</div>;
  if (products.isError) return <div>Error</div>;

  const filterProductLength = products.productsData.filter((item) =>
    query === 'undefined' ? item : item.category.title === query
  ).length;

  const pageCount = Math.ceil(filterProductLength / productsPerPage);

  return (
    <div className="container">
      <div className="product-list">
        {products.productsData.length > 0 &&
          products.productsData
            .filter((item) =>
              query === 'undefined' ? item : item.category.title === query
            )
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((item) => (
              <Link to={`/ProductDetails/${item.id}`} key={item.id}>
                <div className="productList">
                  <div className="productImg">
                    <img src={item.imageUrl} alt={item.title} />
                  </div>

                  <div className="productDetail">
                    <h5 className="productBrand">{item.brand.title}</h5>
                    <h5 className="productColor">
                      Renk:
                      <span className="hColor">{item.color.title}</span>
                    </h5>
                  </div>

                  <h5 className="productPrice">
                    {item.price
                      .toLocaleString('tr-TR', {
                        style: 'currency',
                        currency: 'TRY',
                      })
                      .slice(1)}{' '}
                    TL
                  </h5>
                </div>
              </Link>
            ))}
      </div>

      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationButtons"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
        forcePage={forcePage}
      />
    </div>
  );
};

export default ProductsList;
