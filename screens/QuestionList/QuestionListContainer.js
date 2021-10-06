import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import QuestionList from './QuestionList';
import {getQuestions, sendQuestion} from './actions';
import {selectQuestionList} from './selectors';

const QuestionListContainer = props => {
  const [userActions, setUserAction] = useState(props.route.params.userAction);

  useEffect(() => {
    const questionParams = props.route.params;
    props.dispatchGetQuestions(questionParams);
  }, []);

  const sendQuestionHandler = (playerId, tokenId, questionId) => {
    props.dispatchSendQuestion(playerId, tokenId, questionId);
    console.log('sendQuestionHandler', userActions);
    if (userActions == 'RECEIVE') {
      setUserAction('SEND');
    } else {
      setUserAction('RECEIVE');
    }
  };

  return (
    <QuestionList
      questionList={props.questionList}
      userAction={props.route.params.userAction}
      player_id={props.route.params.player_id}
      token_id={props.route.params.token_id}
      sendQuestionHandler={sendQuestionHandler}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  questionList: selectQuestionList(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchGetQuestions: questionParams =>
      dispatch(getQuestions(questionParams)),
    dispatchSendQuestion: (player_id, question_id, token_id) =>
      dispatch(sendQuestion(player_id, question_id, token_id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionListContainer);
