import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import QuestionList from './QuestionList';
import {
  getQuestions,
  sendQuestion,
  getAllocatedQuestion,
  cleanAllocatedQuestion,
} from './actions';
import {
  selectQuestionList,
  selectSentQuestionStatus,
  getAllocatedQuestionList,
} from './selectors';

const QuestionListContainer = props => {
  const [userStatus, setUserStatus] = useState(props.route.params.userAction);

  useEffect(() => {
    if (props.route.params.answerSubmitted) {
      props.dispatchCleanPreviousAllocatedQuestion();
    }
  }, [props.route.params.answerSubmitted]);

  const navigation = useNavigation();
  if (props.allocatedQuestion && userStatus === 'RECEIVE') {
    navigation.navigate('AllocatedQuestionContainer', {
      questionData: props.allocatedQuestion,
      tokenId: props.route.params.token_id,
      playerId: props.route.params.player_id,
      userAction: userStatus,
    });
  }
  useEffect(() => {
    const questionParams = props.route.params;
    props.dispatchGetQuestions(questionParams);
  }, []);

  useEffect(() => {
    let apiTimer;
    if (
      userStatus === 'RECEIVE' &&
      !props.allocatedQuestion &&
      !props.allocatedQuestion[0]
    ) {
      apiTimer = setInterval(() => {
        props.dispatchQuestionsAlloted(
          props.route.params.player_id,
          props.route.params.token_id,
        );
      }, 5000);
    }
    return () => clearInterval(apiTimer);
  }, [props.allocatedQuestion, userStatus]);

  const sendQuestionHandler = (questionId, playerId, tokenId) => {
    props.dispatchSendQuestion(questionId, playerId, tokenId);
    props.dispatchCleanPreviousAllocatedQuestion();
    setUserStatus('RECEIVE');
  };

  return (
    <QuestionList
      questionList={props.questionList}
      userAction={userStatus}
      player_id={props.route.params.player_id}
      token_id={props.route.params.token_id}
      sendQuestionHandler={sendQuestionHandler}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  questionList: selectQuestionList(),
  sentQuestStatus: selectSentQuestionStatus(),
  allocatedQuestion: getAllocatedQuestionList(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchGetQuestions: questionParams =>
      dispatch(getQuestions(questionParams)),
    dispatchSendQuestion: (questionId, playerId, tokenId) =>
      dispatch(sendQuestion(questionId, playerId, tokenId)),
    dispatchQuestionsAlloted: (playerId, tokenId) =>
      dispatch(getAllocatedQuestion(playerId, tokenId)),
    dispatchCleanPreviousAllocatedQuestion: () =>
      dispatch(cleanAllocatedQuestion()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionListContainer);
