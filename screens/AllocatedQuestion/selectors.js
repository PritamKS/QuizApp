import {createSelector} from 'reselect';
import {SUBMIT_ANSWER_STATE} from './constant';

const submitAnswerState = state => state.get(SUBMIT_ANSWER_STATE);

export const selectSubmittedAnswerStatus = () =>
  createSelector(submitAnswerState, submittedAnswerStatus =>
    submittedAnswerStatus.get('answerSubmitted'),
  );
