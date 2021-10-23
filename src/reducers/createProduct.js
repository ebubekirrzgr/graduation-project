import CREATE_PRODUCT from 'constants/createProduct';

const initialState = {
  createProductData: {},
  isFetching: false,
  isError: false,
  error: '',
};

function createProduct(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT.CREATE_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
        isError: false,
        createProductData: {},
      };
    case CREATE_PRODUCT.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createProductData: action.payload,
        isFetching: false,
        isError: false,
      };
    case CREATE_PRODUCT.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        createProductData: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
export default createProduct;
