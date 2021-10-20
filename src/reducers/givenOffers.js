import GIVEN_OFFERS from 'constants/givenOffers';

const initialState = {
  givenOffersData: [],
  isFetching: false,
  isError: false,
};

const givenOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVEN_OFFERS.GIVEN_OFFERS_PENDING:
      return {
        ...state,
        isFetching: true,
        givenOffersData: [],
        isError: false,
      };
    case GIVEN_OFFERS.GIVEN_OFFERS_SUCCESS:
      return {
        ...state,
        givenOffersData: action.payload,
        isFetching: false,
        isError: false,
      };
    case GIVEN_OFFERS.GIVEN_OFFERS_ERROR:
      return {
        ...state,
        isFetching: false,
        givenOffersData: [],
        isError: true,
      };
    default:
      return state;
  }
};

export default givenOffersReducer;
