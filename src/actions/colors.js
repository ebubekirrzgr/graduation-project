import COLORS from 'constants/colors';

const fetchSuccess = (data) => ({
  type: COLORS.FETCH_COLORS_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: COLORS.FETCH_COLORS_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: COLORS.FETCH_COLORS_PENDING,
});

const fetchColors = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/color/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchColors;
