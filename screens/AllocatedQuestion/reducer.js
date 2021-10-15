import {fromJS} from 'immutable';
import {SUBMIT_ANSWER_SUCCESS, SUBMIT_ANSWER_ERROR} from './constant';

const initialState = fromJS({
  answerSubmitted: false,
  errorMessage: '',
});

const submitAnswerReducer = (state = initialState, {type, error, status}) => {
  switch (type) {
    case SUBMIT_ANSWER_SUCCESS:
      return state.set('answerSubmitted', status);
    case SUBMIT_ANSWER_ERROR:
      return state.set('answerSubmitted', false).set('errorMessage', error);
    default:
      return state;
  }
};

export default submitAnswerReducer;
