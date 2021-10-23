import axios from 'axios';
import UPLOAD_IMAGE from 'constants/uploadImage';

const uploadImagePending = () => ({
  type: UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_PENDING,
});

const uploadImageSuccess = (message) => ({
  type: UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_SUCCESS,
  payload: message,
});

export const uploadImageDelete = () => ({
  type: UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_DELETE,
});

const uploadImageError = (err) => ({
  type: UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_ERROR,
  payload: err,
});

const uploadImageProgress = (progress) => ({
  type: UPLOAD_IMAGE.UPLOAD_IMAGE_PROGRESS,
  payload: progress,
});

const postUploadImage = (data) => async (dispatch) => {
  const image = new FormData();
  image.append('file', data);
  dispatch(uploadImagePending());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/file/upload/image', image, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        dispatch(
          uploadImageProgress(
            Math.floor((progressEvent.loaded * 100) / progressEvent.total)
          )
        );
      },
    })
    .then((message) => dispatch(uploadImageSuccess(message.data)))
    .catch((err) => dispatch(uploadImageError(err)));
};

export default postUploadImage;
