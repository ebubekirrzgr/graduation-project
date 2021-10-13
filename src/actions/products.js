import PRODUCTS from 'constants/products';

export const fetchSuccess = (data) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const fetchPending = () => ({
  type: PRODUCTS.FETCH_PRODUCTS_PENDING,
});

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('http://bootcampapi.techcs.io/api/fe/v1/product/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchProducts;
