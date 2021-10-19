import REGISTER from 'constants/register';

const initialState = {
  registerData: {},
  isFetching: false,
  isError: false,
  error: '',
};

function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER.REGISTER_REQUEST:
      return { ...state, isFetching: true, registerData: {}, isError: false };
    case REGISTER.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        registerData: action.payload,
        isError: false,
      };
    case REGISTER.REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        registerData: {},
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default registration;
