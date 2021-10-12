import BRANDS from 'constants/brands';

const fetchSuccess = (data) => ({
  type: BRANDS.FETCH_BRANDS_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: BRANDS.FETCH_BRANDS_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: BRANDS.FETCH_BRANDS_PENDING,
});

const fetchBrands = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data.results)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchBrands;
