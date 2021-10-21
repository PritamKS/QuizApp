import {fromJS} from 'immutable';
import {GET_RESULT_SUCCESS, GET_RESULT_ERROR} from './constants';

const initialState = fromJS({
  resultData: [],
  errorMessage: '',
});

const resultReducer = (state = initialState, {type, data, error}) => {
  switch (type) {
    case GET_RESULT_SUCCESS:
      return state.set('resultData', data.response);
    case GET_RESULT_ERROR:
      return state.set('errorMessage', error);
    default:
      return state;
  }
};

export default resultReducer;
