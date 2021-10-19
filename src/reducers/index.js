import { combineReducers } from 'redux';

import BrandsReducer from './brands';
import categoriesReducer from './categories';
import LoginReducer from './login';
import ProductDetailReducer from './productDetail';
import ProductsReducer from './products';
import PurchaseReducer from './purchase';
import RegisterReducer from './register';

export default combineReducers({
  products: ProductsReducer,
  brands: BrandsReducer,
  categories: categoriesReducer,
  productDetail: ProductDetailReducer,
  register: RegisterReducer,
  login: LoginReducer,
  purchase: PurchaseReducer,
});
