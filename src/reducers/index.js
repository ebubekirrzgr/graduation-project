import { combineReducers } from 'redux';

import BrandsReducer from './brands';
import categoriesReducer from './categories';
import givenOffersReducer from './givenOffers';
import LoginReducer from './login';
import OfferReducer from './offer';
import ProductDetailReducer from './productDetail';
import ProductsReducer from './products';
import PurchaseReducer from './purchase';
import receivedOffersReducer from './receivedOffers';
import RegisterReducer from './register';

export default combineReducers({
  products: ProductsReducer,
  brands: BrandsReducer,
  categories: categoriesReducer,
  productDetail: ProductDetailReducer,
  register: RegisterReducer,
  login: LoginReducer,
  purchase: PurchaseReducer,
  offer: OfferReducer,
  receivedOffers: receivedOffersReducer,
  givenOffers: givenOffersReducer,
});
