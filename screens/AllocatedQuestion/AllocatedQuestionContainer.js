import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import {submitAnswerAction} from './actions';
import {selectSubmittedAnswerStatus} from './selectors';
import AllocatedQuestion from './AllocatedQuestion';

const AllocatedQuestionContainer = props => {
  const questionData = props.route.params.questionData[0];
  const userToken = props.route.params.tokenId;
  const playerId = props.route.params.playerId;
  const navigation = useNavigation();
  if (props.submittedAnswerStatus) {
    navigation.navigate('QuestionListContainer', {
      answerSubmitted: props.submittedAnswerStatus,
      token_id: userToken,
      player_id: playerId,
      userAction: 'SEND',
    });
  }

  const submitAnswer = (id, tokenId, answerId) => {
    props.dispatchSubmitAnswer(id, tokenId, answerId);
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
    dispatchSubmitAnswer: (id, tokenId, answerId) =>
      dispatch(submitAnswerAction(id, tokenId, answerId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllocatedQuestionContainer);
