import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

import QuestionBox from '../../components/UI/QuestionBox';

const QuestionList = ({
  questionList,
  userAction,
  sendQuestionHandler,
  player_id,
  token_id,
}) => {
  return (
    <ScrollView style={styles.questionScroll}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Choose 1 Questions to transfer to the other user
        </Text>
        <View style={styles.quiz}>
          {questionList &&
            questionList.map((item, index) => {
              return (
                <QuestionBox
                  key={`quest-${index}`}
                  id={item.question_id}
                  index={index}
                  question={item.question}
                  userAction={userAction}
                  sendQuestionHandler={sendQuestionHandler}
                  player_id={player_id}
                  token_id={token_id}
                  questionIds={item.id}
                  questionStatus={item.answer_status}
                />
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionScroll: {
    height: '100%',
    backgroundColor: '#26509e',
  },
  quiz: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
  },
});

export default QuestionList;
