import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StatsCard from '../../components/UI/StatsCard';
import QuizBoxCard from '../../components/UI/QuizBoxCard';
import SubjectWiseQuestionBox from '../subjectwiseQuestion/subjectwiseQuestionBox';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <StatsCard text="Ranked" />
        <StatsCard text="LiveQuiz" />
        <StatsCard text="Rank" />
      </View>
      <Text style={styles.quizHeading}>Today's Quiz</Text>
      <View style={styles.quiz}>
        <QuizBoxCard subject="Science" />
        <QuizBoxCard subject="Science" />
        <QuizBoxCard subject="Science" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stats: {
    width: "100%",
    height: "21%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quizHeading: {
    color: '#1C39BB',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    paddingTop: '5%'
  },
  quiz: {
    width: "100%",
    height: "55%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: 'center',
  }
});

export default Dashboard