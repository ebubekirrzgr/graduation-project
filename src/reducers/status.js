import STATUS from 'constants/status';

const initialState = {
  statusData: [],
  isFetching: false,
  isError: false,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS.FETCH_STATUS_PENDING:
      return { ...state, isfetching: true, statusData: [], isError: false };
    case STATUS.FETCH_STATUS_SUCCESS:
      return {
        ...state,
        statusData: action.payload,
        isfetching: false,
        isError: false,
      };
    case STATUS.FETCH_STATUS_ERROR:
      return { ...state, isfetching: false, statusData: [], isError: true };
    default:
      return state;
  }
};

export default statusReducer;
