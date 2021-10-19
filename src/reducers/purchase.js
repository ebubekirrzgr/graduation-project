import PURCHASE from 'constants/purchase';

const initialState = {
  isFetching: false,
  isError: false,
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE.FETCH_PURCHASE_PENDING:
      return { ...state, isFetching: true, isError: false };
    case PURCHASE.FETCH_PURCHASE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case PURCHASE.FETCH_PURCHASE_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};

export default purchaseReducer;
