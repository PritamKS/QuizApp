import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatsCard from '../../components/UI/StatsCard';
import CategoryList from '../CategoryList/CategoryList';
import Banner from '../../components/UI/Banner';
import Header from '../../components/UI/Header';

const Dashboard = ({categoryList}) => {
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
          {categoryList &&
            categoryList.map((item, index) => {
              return (
                <CategoryList
                  key={`cat-${index}`}
                  id={item.questionUid}
                  subject={item.quizname}
                  questCount={item.questioncount}
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  quizHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    marginTop: '5%',
  },
  quiz: {
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
  },
  main: {
    paddingBottom: '10%',
    backgroundColor: '#26509e',
  },
});

export default Dashboard;
