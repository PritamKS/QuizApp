import React from 'react';
import { View, StyleSheet } from 'react-native';

import QuizBoxTopic from './QuizBoxTopic';

const SubjectwiseQuestionBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.quiz}>
        <QuizBoxTopic topic="Science Quiz" amount="20.00" questionCount="4 Questions" />
        <QuizBoxTopic topic="Science Quiz" amount="20.00" questionCount="4 Questions" />
        <QuizBoxTopic topic="Science Quiz" amount="20.00" questionCount="4 Questions" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quiz: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: 'center',
  }
});

export default SubjectwiseQuestionBox