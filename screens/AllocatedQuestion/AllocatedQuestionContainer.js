import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import {submitAnswerAction, resetSubmittedAnswerStatus} from './actions';
import {selectSubmittedAnswerStatus} from './selectors';
import AllocatedQuestion from './AllocatedQuestion';

const AllocatedQuestionContainer = props => {
  const navigation = useNavigation();
  const questionData = props.route.params.questionData;
  const userToken = props.route.params.tokenId;
  const playerId = props.route.params.playerId;

  useEffect(() => {
    if (props.submittedAnswerStatus) {
      navigation.navigate('QuestionListContainer', {
        answerSubmitted: props.submittedAnswerStatus,
        token_id: userToken,
        player_id: playerId,
        userAction: 'SEND',
      });
    }
    return () => props.dispatchResetSubmittedAnswerStatus();
  });

  const submitAnswer = (id, tokenId, answerId, time) => {
    props.dispatchSubmitAnswer(id, tokenId, answerId, time);
  };

  return (
    <AllocatedQuestion
      questionData={questionData}
      submitAnswer={submitAnswer}
      userToken={userToken}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  submittedAnswerStatus: selectSubmittedAnswerStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchSubmitAnswer: (id, tokenId, answerId, time) =>
      dispatch(submitAnswerAction(id, tokenId, answerId, time)),
    dispatchResetSubmittedAnswerStatus: () =>
      dispatch(resetSubmittedAnswerStatus()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllocatedQuestionContainer);
