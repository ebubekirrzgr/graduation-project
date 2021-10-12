import CATEGORIES from 'constants/categories';

const initialState = {
  categoriesData: {},
  isFetching: false,
  isError: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES.FETCH_CATEGORIES_PENDING:
      return { ...state, isfetching: true, categoriesData: {}, isError: false };
    case CATEGORIES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload,
        isfetching: false,
        isError: false,
      };
    case CATEGORIES.FETCH_CATEGORIES_ERROR:
      return { ...state, isfetching: false, categoriesData: {}, isError: true };
    default:
      return state;
  }
};

export default categoriesReducer;
