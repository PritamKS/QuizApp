import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  subCategoryData: [],
  errorMessage: '',
  successMessage: '',
});

const subCategoryReducer = (
  state = initialState,
  {type, success, error, data},
) => {
  switch (type) {
    case 'getSubCategorySuccess':
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('subCategoryData', data);
    case 'getSubCategoryError':
      return state.set('errorMessage', error).set('loading', false);
    case 'clearCategoryQuestionsData':
      return state.set('subCategoryData', []);
    default:
      return state;
  }
};

export default subCategoryReducer;
