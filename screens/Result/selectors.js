import {createSelector} from 'reselect';
import {RESULT_STATE} from './constants';

const resultState = state => state.get(RESULT_STATE);

export const finalResultData = () =>
  createSelector(resultState, result => result.get('resultData'));
