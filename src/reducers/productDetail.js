import PRODUCTDETAIL from 'constants/productDetail';

const initialState = {
  productDetailData: {},
  isFetching: true,
  isError: false,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_PENDING:
      return {
        ...state,
        productDetailData: {},
        isFetching: true,
        isError: false,
      };
    case PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetailData: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTDETAIL.FETCH_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        productDetailData: {},
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
