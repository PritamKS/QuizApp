import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatsCard from '../../components/UI/StatsCard';
import QuizBoxCard from '../../components/UI/QuizBoxCard';
import Banner from '../../components/UI/Banner';
import Header from '../../components/UI/Header';

const Dashboard = ({questionList}) => {
  return (
    <View style={styles.main}>
      <Header points="1K" />
      <ScrollView>
        <View style={styles.quiz}>
          <Banner infoString="50% Off Get Premium!" />
        </View>
        <View style={styles.stats}>
          <StatsCard text="Ranked" />
          <StatsCard text="LiveQuiz" />
          <StatsCard text="Rank" />
        </View>
        <Text style={styles.quizHeading}>Today's Quiz</Text>
        <View style={styles.quiz}>
          {questionList &&
            questionList.map((item, index) => {
              return (
                <QuizBoxCard
                  key={item.id}
                  subject={item.quizname}
                  questCount={item.questioncount}
                  price={item.price}
                  index={index}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  quizHeading: {
    color: '#1C39BB',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    marginTop: '5%',
  },
  quiz: {
    alignItems: 'center',
  },
  main: {
    paddingBottom: '14%',
    backgroundColor: 'white',
  },
});

export default Dashboard;
