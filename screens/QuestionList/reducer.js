import {fromJS} from 'immutable';
import {
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  CLEAR_QUESTIONS_DATA,
  SEND_QUESTIONS_SUCCESS,
  GET_ALLOCATED_QUESTIONS_SUCCESS,
  CLEAN_ALLOCATED_QUESTIONS,
} from './constants';

const initialState = fromJS({
  loading: true,
  questions: {},
  errorMessage: '',
  successMessage: '',
  sentQuestionStatus: false,
  allocatedQuestion: '',
});

const questionsReducer = (state = initialState, {type, error, data}) => {
  switch (type) {
    case GET_QUESTIONS_SUCCESS:
      return state.set('loading', false).set('questions', data);
    case GET_QUESTIONS_ERROR:
      return state.set('errorMessage', error).set('loading', false);
    case CLEAR_QUESTIONS_DATA:
      return state.set('questions', []);
    case SEND_QUESTIONS_SUCCESS:
      return state.set('sentQuestionStatus', true);
    case GET_ALLOCATED_QUESTIONS_SUCCESS:
      return state.set('allocatedQuestion', data);
    case CLEAN_ALLOCATED_QUESTIONS:
      return state.set('allocatedQuestion', '');
    default:
      return state;
  }
};

export default questionsReducer;
