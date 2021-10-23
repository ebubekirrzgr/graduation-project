import UPLOAD_IMAGE from 'constants/uploadImage';

const initialState = {
  uploadImageData: { url: '' },
  isFetching: false,
  isError: false,
  uploadProgress: 0,
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_PENDING:
      return {
        ...state,
        isFetching: true,
        uploadImageData: { url: '' },
        isError: false,
        uploadProgress: 0,
      };

    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageData: action.payload,
        isFetching: false,
        isError: false,
        uploadProgress: 0,
      };

    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_DELETE:
      return {
        ...state,
        isFetching: false,
        isError: false,
        uploadImageData: { url: '' },
        uploadProgress: 0,
      };

    case UPLOAD_IMAGE.FETCH_UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        isFetching: false,
        uploadImageData: { url: '' },
        isError: true,
        uploadProgress: 0,
      };

    case UPLOAD_IMAGE.UPLOAD_IMAGE_PROGRESS:
      return {
        ...state,
        isFetching: true,
        uploadImageData: { url: '' },
        isError: false,
        uploadProgress: action.payload,
      };

    default:
      return state;
  }
};

export default uploadImageReducer;
