import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import QuizBoxTopic from '../../components/UI/QuizBoxTopic';

const SubCategory = ({subCategoryList}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.quiz}>
          {subCategoryList &&
            subCategoryList.map((item, index) => {
              return (
                <QuizBoxTopic
                  key={`sub-${index}`}
                  id={item.questionUid}
                  amount="20.00"
                  index={index}
                  subject={item.quizname}
                  questCount={item.questioncount}
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
