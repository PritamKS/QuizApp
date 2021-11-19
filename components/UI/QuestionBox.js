import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const QuestionBox = ({
  id,
  question,
  index,
  sendQuestionHandler,
  player_id,
  token_id,
  questionIds,
  userAction,
  questionStatus,
}) => {
  return (
    <View key={id} index={index} style={styles.quizBox}>
      <View style={styles.textInfo}>
        <Text style={styles.topicName}>{question}</Text>
      </View>
      <TouchableOpacity
        style={
          userAction == 'SEND' && questionStatus === 'PENDING'
            ? styles.paybtn
            : styles.disabledPaybtn
        }
        disabled={
          userAction == 'SEND' && questionStatus === 'PENDING' ? false : true
        }
        onPress={() => {
          sendQuestionHandler(questionIds, player_id, token_id);
        }}>
        <Text style={styles.payBtnTxt}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topicName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#26509e',
  },
  quizBox: {
    width: '90%',
    height: 120,
    backgroundColor: '#5e9cff',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paybtn: {
    width: '30%',
    height: '30%',
    backgroundColor: '#26509e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  disabledPaybtn: {
    width: '30%',
    height: '30%',
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  payBtnTxt: {
    color: 'white',
  },
});

export default QuestionBox;
