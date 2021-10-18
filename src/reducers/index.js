import { combineReducers } from 'redux';

import BrandsReducer from './brands';
import categoriesReducer from './categories';
import ProductDetailReducer from './productDetail';
import ProductsReducer from './products';

export default combineReducers({
  products: ProductsReducer,
  brands: BrandsReducer,
  categories: categoriesReducer,
  productDetail: ProductDetailReducer,
});
