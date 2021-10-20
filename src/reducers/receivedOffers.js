import RECEIVED_OFFERS from 'constants/receivedOffers';

const initialState = {
  receivedOffersData: [],
  isFetching: false,
  isError: false,
};

const receivedOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_OFFERS.RECEIVED_OFFERS_PENDING:
      return {
        ...state,
        isFetching: true,
        receivedOffersData: [],
        isError: false,
      };
    case RECEIVED_OFFERS.RECEIVED_OFFERS_SUCCESS:
      return {
        ...state,
        receivedOffersData: action.payload,
        isFetching: false,
        isError: false,
      };
    case RECEIVED_OFFERS.RECEIVED_OFFERS_ERROR:
      return {
        ...state,
        isFetching: false,
        receivedOffersData: [],
        isError: true,
      };
    default:
      return state;
  }
};

export default receivedOffersReducer;
