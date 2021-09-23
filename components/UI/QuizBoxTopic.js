import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const QuizBoxTopic = children => {
  return (
    <View style={styles.quizBox}>
      <TouchableOpacity style={styles.textInfo}>
        <Text style={styles.topicName}>{children.topic}</Text>
        <Text style={styles.topicName}>{children.amount}</Text>
        <Text style={styles.questCount}>{children.questionCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paybtn} onPress={console.log('pay')}>
        <Text style={styles.payBtnTxt}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topicName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  questCount: {
    color: 'white',
    fontSize: 17,
  },
  quizBox: {
    width: '90%',
    height: '26%',
    backgroundColor: '#1C39BB',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInfo: {
    width: '60%',
    height: '80%',
    left: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paybtn: {
    width: '30%',
    height: '30%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  payBtnTxt: {
    color: 'white',
  },
});

export default QuizBoxTopic;
