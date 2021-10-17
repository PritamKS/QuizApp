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
import {getAnswerSentMessage} from '../AllocatedQuestion/selectors';

const QuestionListContainer = props => {
  const navigation = useNavigation();
  const [userStatus, setUserStatus] = useState(props.route.params.userAction);
  const tokenId = props.route.params.token_id;
  const playerId = props.route.params.player_id;
  const userAction = props.route.params.userAction;
  const answerSubmitted = props.route.params.answerSubmitted;
  const questionParams = props.route.params;

  const allotedQuestion =
    props.allocatedQuestion &&
    props.allocatedQuestion.filter(arr => arr.answer_status === 'ASK');

  console.log('pritam', props.answerSentMessage);
  console.log('pritam1', answerSubmitted);

  useEffect(() => {
    props.dispatchGetQuestions(questionParams);
  }, [answerSubmitted, props.answerSentMessage]);

  useEffect(() => {
    setUserStatus(props.route.params.userAction);
  }, [props.route.params.userAction]);

  useEffect(() => {
    if (answerSubmitted) {
      props.dispatchCleanPreviousAllocatedQuestion();
    }
  }, [answerSubmitted]);

  // useEffect(() => {
  //   if (props.answerSentMessage === 'answer completed') {
  //     props.dispatchGetQuestions(questionParams);
  //   }
  // });

  useEffect(() => {
    let apiTimer;
    if (
      userStatus === 'RECEIVE' &&
      allotedQuestion &&
      (allotedQuestion.length === 0 || allotedQuestion.size === 0)
    ) {
      apiTimer = setInterval(() => {
        props.dispatchQuestionsAlloted(playerId, tokenId);
      }, 5000);
    } else if (
      userStatus === 'RECEIVE' &&
      allotedQuestion &&
      allotedQuestion.length > 0
    ) {
      setUserStatus('SEND');
      navigation.navigate('AllocatedQuestionContainer', {
        questionData: allotedQuestion[0],
        tokenId: tokenId,
        playerId: playerId,
        userAction: userAction,
      });
    }
    return () => clearInterval(apiTimer);
  });

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
  answerSentMessage: getAnswerSentMessage(),
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
