import CATEGORIES from 'constants/categories';

const fetchSuccess = (data) => ({
  type: CATEGORIES.FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: CATEGORIES.FETCH_CATEGORIES_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: CATEGORIES.FETCH_CATEGORIES_PENDING,
});

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data.results)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchCategories;
