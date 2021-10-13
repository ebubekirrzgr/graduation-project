import PRODUCTS from 'constants/products';

const initialState = {
  productsData: [],
  isFetching: false,
  isError: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.FETCH_PRODUCTS_PENDING:
      return { ...state, isFetching: true, productsData: [], isError: false };
    case PRODUCTS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.FETCH_PRODUCTS_ERROR:
      return { ...state, isFetching: false, productsData: [], isError: true };
    default:
      return state;
  }
};

export default productsReducer;
