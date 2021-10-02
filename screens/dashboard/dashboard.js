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
                  key={index}
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
