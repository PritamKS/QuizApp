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
  const navigation = useNavigation();
  const [userStatus, setUserStatus] = useState(props.route.params.userAction);
  const tokenId = props.route.params.token_id;
  const playerId = props.route.params.player_id;
  const questionParams = props.route.params;

  useEffect(() => {
    props.dispatchGetQuestions(questionParams);
  }, [props.route.params.answerSubmitted]);

  useEffect(() => {
    setUserStatus(props.route.params.userAction);
  }, [props.route.params.userAction]);

  useEffect(() => {
    if (props.route.params.answerSubmitted) {
      props.dispatchCleanPreviousAllocatedQuestion();
    }
  }, [props.route.params.answerSubmitted]);

  useEffect(() => {
    let apiTimer;
    if (userStatus === 'RECEIVE' && !props.allocatedQuestion) {
      apiTimer = setInterval(() => {
        props.dispatchQuestionsAlloted(playerId, tokenId);
      }, 5000);
    } else if (props.allocatedQuestion && userStatus === 'RECEIVE') {
      setUserStatus('SEND');
      const {allocatedQuestion} = props;
      navigation.navigate('AllocatedQuestionContainer', {
        questionData: allocatedQuestion,
        tokenId: tokenId,
        playerId: playerId,
        userAction: userStatus,
      });
    }
    return () => clearInterval(apiTimer);
  });

  // if (props.allocatedQuestion && userStatus === 'RECEIVE') {
  //   const {allocatedQuestion} = props;
  //   navigation.navigate('AllocatedQuestionContainer', {
  //     questionData: allocatedQuestion,
  //     tokenId: tokenId,
  //     playerId: playerId,
  //     userAction: userStatus,
  //   });
  // }

  const sendQuestionHandler = (questionId, playerId, tokenId) => {
    props.dispatchSendQuestion(questionId, playerId, tokenId);
    props.dispatchCleanPreviousAllocatedQuestion();
    setUserStatus('RECEIVE');
  };

  return (
    <QuestionList
      sendQuestionHandler={sendQuestionHandler}
      questionList={props.questionList}
      userAction={userStatus}
      player_id={playerId}
      token_id={tokenId}
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
