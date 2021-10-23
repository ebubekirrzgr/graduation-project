import LOGIN from 'constants/login';

const initialState = {
  loginData: { access_token: '' },
  isFetching: false,
  isError: false,
  error: '',
};

function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        loginData: { access_token: '' },
        isError: false,
      };
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
        loginData: { access_token: '' },
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default login;
