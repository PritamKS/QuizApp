import {fromJS} from 'immutable';
import {
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  CLEAR_QUESTIONS_DATA,
} from './constants';

const initialState = fromJS({
  loading: true,
  questions: {},
  errorMessage: '',
  successMessage: '',
});

const questionsReducer = (state = initialState, {type, error, data}) => {
  switch (type) {
    case GET_QUESTIONS_SUCCESS:
      return state.set('loading', false).set('questions', data);
    case GET_QUESTIONS_ERROR:
      return state.set('errorMessage', error).set('loading', false);
    case CLEAR_QUESTIONS_DATA:
      return state.set('questions', []);
    default:
      return state;
  }
};

export default questionsReducer;
