import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import QuizBoxTopic from '../../components/UI/QuizBoxTopic';

const SubCategory = ({subCategoryList, walletBalance}) => {
  return (
    <ScrollView style={styles.scrolls}>
      <View style={styles.container}>
        <View style={styles.quiz}>
          {subCategoryList &&
            subCategoryList.map((item, index) => {
              return (
                <QuizBoxTopic
                  key={`sub-${index}`}
                  id={item.questionUid}
                  amount={item.price}
                  index={index}
                  subject={item.quizname}
                  questCount={item.questioncount}
                  walletBalance={walletBalance}
                />
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrolls: {
    height: '100%',
    backgroundColor: '#26509e',
  },
  container: {
    flex: 1,
  },
  quiz: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#26509e',
  },
});

export default SubCategory;
