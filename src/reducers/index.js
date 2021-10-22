import { combineReducers } from 'redux';

import BrandsReducer from './brands';
import CategoriesReducer from './categories';
import ColorsReducer from './color';
import GivenOffersReducer from './givenOffers';
import LoginReducer from './login';
import OfferReducer from './offer';
import ProductDetailReducer from './productDetail';
import ProductsReducer from './products';
import PurchaseReducer from './purchase';
import ReceivedOffersReducer from './receivedOffers';
import RegisterReducer from './register';
import StatusReducer from './status';
import UploadImageReducer from './uploadImage';

export default combineReducers({
  products: ProductsReducer,
  brands: BrandsReducer,
  categories: CategoriesReducer,
  productDetail: ProductDetailReducer,
  register: RegisterReducer,
  login: LoginReducer,
  purchase: PurchaseReducer,
  offer: OfferReducer,
  receivedOffers: ReceivedOffersReducer,
  givenOffers: GivenOffersReducer,
  status: StatusReducer,
  colors: ColorsReducer,
  uploadImage: UploadImageReducer,
});
