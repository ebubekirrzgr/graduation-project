import CANCEL_OFFER from 'constants/cancelOffer';

const initialState = {
  cancelOfferData: {},
  isFetching: false,
  isError: false,
};

const cancelOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_OFFER.CANCEL_OFFER_PENDING:
      return {
        ...state,
        isFetching: true,
        cancelOfferData: {},
        isError: false,
      };

    case CANCEL_OFFER.CANCEL_OFFER_SUCCESS:
      return {
        ...state,
        cancelOfferData: action.payload,
        isFetching: false,
        isError: false,
      };

    case CANCEL_OFFER.CANCEL_OFFER_ERROR:
      return {
        ...state,
        isFetching: false,
        cancelOfferData: {},
        isError: true,
      };

    default:
      return state;
  }
};

export default cancelOfferReducer;
