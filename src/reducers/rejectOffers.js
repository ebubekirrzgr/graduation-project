import REJECT_OFFERS from 'constants/rejectOffers';

const initialState = {
  rejectOffersData: {},
  isFetching: false,
  isError: false,
};

const rejectOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REJECT_OFFERS.REJECT_OFFERS_PENDING:
      return {
        ...state,
        isFetching: true,
        rejectOffersData: {},
        isError: false,
      };
    case REJECT_OFFERS.REJECT_OFFERS_SUCCESS:
      return {
        ...state,
        rejectOffersData: action.payload,
        isFetching: false,
        isError: false,
      };
    case REJECT_OFFERS.REJECT_OFFERS_ERROR:
      return {
        ...state,
        isFetching: false,
        rejectOffersData: {},
        isError: true,
      };
    default:
      return state;
  }
};

export default rejectOffersReducer;
