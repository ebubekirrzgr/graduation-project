import COLORS from 'constants/colors';

const initialState = {
  colorsData: [],
  isFetching: false,
  isError: false,
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORS.FETCH_COLORS_PENDING:
      return { ...state, isfetching: true, colorsData: [], isError: false };
    case COLORS.FETCH_COLORS_SUCCESS:
      return {
        ...state,
        colorsData: action.payload,
        isfetching: false,
        isError: false,
      };
    case COLORS.FETCH_COLORS_ERROR:
      return { ...state, isfetching: false, colorsData: [], isError: true };
    default:
      return state;
  }
};

export default colorsReducer;
