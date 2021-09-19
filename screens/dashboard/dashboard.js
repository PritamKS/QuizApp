import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import StatsCard from '../../components/UI/StatsCard';
import QuizBoxCard from '../../components/UI/QuizBoxCard';
import Banner from '../../components/UI/Banner';
import Header from '../../components/UI/Header';

const DATA = [
  {
    id: 1,
    subject: 'Maths',
    questCount: 1,
  },
  {
    id: 2,
    subject: 'Science',
    questCount: 2,
  },
  {
    id: 3,
    subject: 'English',
    questCount: 3,
  },
  {
    id: 4,
    subject: 'Hindi',
    questCount: 4,
  },
  {
    id: 5,
    subject: 'Maths',
    questCount: 5,
  },
  {
    id: 6,
    subject: 'Science',
    questCount: 6,
  },
  {
    id: 7,
    subject: 'English',
    questCount: 7,
  },
  {
    id: 8,
    subject: 'Hindi',
    questCount: 4,
  },
];

const Dashboard = () => {
  return (
    <View style={styles.main}>
      <Header points="1K" />
      <ScrollView style={styles.container}>
        <View style={styles.quiz}>
          <Banner infoString="50% Off Get Premium" />
        </View>
        <View style={styles.stats}>
          <StatsCard text="Ranked" />
          <StatsCard text="LiveQuiz" />
          <StatsCard text="Rank" />
        </View>
        <Text style={styles.quizHeading}>Today's Quiz</Text>
        <View style={styles.quiz}>
          {DATA.map((element, index) => {
            return <QuizBoxCard key={element.id} subject={element.subject} questCount={element.questCount} index={index} />
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stats: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  quizHeading: {
    color: '#1C39BB',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    marginTop: 20,
  },
  quiz: {
    marginTop: 5,
    alignItems: 'center',
  },
  main: {
    paddingBottom: 80
  }
});

export default Dashboard