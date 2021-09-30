import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import QuizBoxTopic from '../../components/UI/QuizBoxTopic';

const SubCategory = ({subCategoryList}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.quiz}>
          {subCategoryList &&
            subCategoryList.length > 1 &&
            subCategoryList.map((item, index) => {
              return (
                <QuizBoxTopic
                  key={item.questionUid}
                  topic="Science Quiz"
                  amount="20.00"
                  questionCount="4 Questions"
                  index={index}
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
  quiz: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SubCategory;
