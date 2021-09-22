import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  questionListData: [],
  downloadData: [],
  errorMessage: '',
  successMessage: '',
});

const getQuestionListReducer = (
  state = initialState,
  { type, success, error, data }
) => {
  switch (type) {
    case 'getQuestionListDisplayDataSuccess':
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('questionListData', data);
    case 'getQuestionListDisplayDataError':
      return state.set('errorMessage', error).set('loading', false);
    default:
      return state;
  }
};

export default getQuestionListReducer;
