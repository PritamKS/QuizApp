import { createSelector } from 'reselect';

const questionLists = state => state.get('dashboardQuestionList');

export const selectQuestionList = () =>
  createSelector(questionLists, questions => questions.get('questionListData'));