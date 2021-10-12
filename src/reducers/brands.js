import BRANDS from 'constants/brands';

const initialState = {
  brandsData: {},
  isFetching: false,
  isError: false,
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANDS.FETCH_BRANDS_PENDING:
      return { ...state, isfetching: true, brandsData: {}, isError: false };
    case BRANDS.FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        brandsData: action.payload,
        isfetching: false,
        isError: false,
      };
    case BRANDS.FETCH_BRANDS_ERROR:
      return { ...state, isfetching: false, brandsData: {}, isError: true };
    default:
      return state;
  }
};

export default brandsReducer;
