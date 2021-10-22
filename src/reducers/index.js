import { combineReducers } from 'redux';

import AcceptOffersReducer from './acceptOffers';
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
import RejectOffersReducer from './rejectOffers';
import StatusReducer from './status';
import UploadImageReducer from './uploadImage';

export default combineReducers({
  register: RegisterReducer,
  login: LoginReducer,

  products: ProductsReducer,
  brands: BrandsReducer,
  categories: CategoriesReducer,
  status: StatusReducer,
  colors: ColorsReducer,

  productDetail: ProductDetailReducer,
  uploadImage: UploadImageReducer,

  offer: OfferReducer,
  purchase: PurchaseReducer,
  givenOffers: GivenOffersReducer,
  receivedOffers: ReceivedOffersReducer,
  rejectOffer: RejectOffersReducer,
  acceptOffer: AcceptOffersReducer,
});
