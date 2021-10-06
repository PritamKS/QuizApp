import {createSelector} from 'reselect';
import {QUESTIONS_STATE} from './constants';

const questionsState = state => state.get(QUESTIONS_STATE);

export const selectQuestionList = () =>
  createSelector(questionsState, questions => questions.get('questions'));

export const selectLoadingStatus = () =>
  createSelector(questionsState, loading => loading.get('loading'));
