import axios from 'axios';
import PURCHASE from 'constants/purchase';
import { toast } from 'react-toastify';

import fetchProductDetail from './productDetail';

const fetchSuccess = (data) => ({
  type: PURCHASE.FETCH_PURCHASE_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: PURCHASE.FETCH_PURCHASE_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: PURCHASE.FETCH_PURCHASE_PENDING,
});

const fetchPurchase = (productId) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${productId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => {
      dispatch(fetchSuccess(data));
      toast.success('Satın alındı', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((error) => {
      dispatch(fetchError(error));
      toast.error('Ürün zaten satılmış veya kendi ürününüzü alamazsınız!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .then(() => dispatch(fetchProductDetail(productId)));
};

export default fetchPurchase;
