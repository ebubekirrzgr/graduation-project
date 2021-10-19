import LOGIN from 'constants/login';

const initialState = {
  loginData: {},
  isFetching: false,
  isError: false,
  error: '',
};

function registration(state = initialState, action) {
  switch (action.type) {
    case LOGIN.LOGIN_REQUEST:
      return { ...state, isFetching: true, loginData: {}, isError: false };
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loginData: action.payload,
        isError: false,
      };
    case LOGIN.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        loginData: {},
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default registration;
