import UPLOAD_IMAGE from 'constants/uploadImage';

const initialState = {
  uploadImageData: { url: '' },
  isFetching: false,
  isError: false,
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_PENDING:
      return {
        ...state,
        isfetching: true,
        uploadImageData: { url: '' },
        isError: false,
      };
    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageData: action.payload,
        isfetching: false,
        isError: false,
      };
    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_DELETE:
      return {
        ...state,
        isFetching: false,
        isError: false,
        uploadImageData: { url: '' },
      };
    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        isfetching: false,
        uploadImageData: { url: '' },
        isError: true,
      };
    default:
      return state;
  }
};

export default uploadImageReducer;
