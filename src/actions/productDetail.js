import PRODUCTDETAIL from 'constants/productDetail';

export const fetchSuccess = (data) => ({
  type: PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_ERROR,
  payload: error,
});

export const fetchPending = () => ({
  type: PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_PENDING,
});

const fetchProductDetail = (productId) => async (dispatch) => {
  dispatch(fetchPending());
  return fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/${productId}`)
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchProductDetail;
