import ACCEPT_OFFERS from 'constants/acceptOffers';

const initialState = {
  acceptOffersData: {},
  isFetching: false,
  isError: false,
};

const acceptOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCEPT_OFFERS.ACCEPT_OFFERS_PENDING:
      return {
        ...state,
        isFetching: true,
        acceptOffersData: {},
        isError: false,
      };

    case ACCEPT_OFFERS.ACCEPT_OFFERS_SUCCESS:
      return {
        ...state,
        acceptOffersData: action.payload,
        isFetching: false,
        isError: false,
      };

    case ACCEPT_OFFERS.ACCEPT_OFFERS_ERROR:
      return {
        ...state,
        isFetching: false,
        acceptOffersData: {},
        isError: true,
      };

    default:
      return state;
  }
};

export default acceptOffersReducer;
