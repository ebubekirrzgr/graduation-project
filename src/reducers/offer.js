import OFFER from 'constants/offer';

const initialState = {
  offerData: {},
  isFetching: false,
  isError: false,
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFER.FETCH_OFFER_PENDING:
      return { ...state, isFetching: true, offerData: {}, isError: false };
    case OFFER.FETCH_OFFER_SUCCESS:
      return {
        ...state,
        offerData: action.payload,
        isFetching: false,
        isError: false,
      };
    case OFFER.FETCH_OFFER_ERROR:
      return { ...state, isFetching: false, offerData: {}, isError: true };
    default:
      return state;
  }
};

export default offerReducer;
