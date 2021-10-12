/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';

import ProductsReducer from './products';

export default combineReducers({
  products: ProductsReducer,
});

// const INITIAL_STATE = {};
// const reducer = (state = INITIAL_STATE, action) => state;
// export default reducer;
