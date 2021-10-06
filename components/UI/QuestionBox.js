import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const QuestionBox = ({
  id,
  question,
  index,
  sendQuestionHandler,
  player_id,
  token_id,
}) => {
  return (
    <View key={id} index={index} style={styles.quizBox}>
      <View style={styles.textInfo}>
        <Text style={styles.topicName}>{question}</Text>
      </View>
      <TouchableOpacity
        style={styles.paybtn}
        onPress={() => {
          console.log('call an API to send the question');
          sendQuestionHandler(id, player_id, token_id);
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
  },
  quizBox: {
    width: '90%',
    height: 150,
    backgroundColor: '#1C39BB',
    borderRadius: 25,
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  payBtnTxt: {
    color: 'white',
  },
});

export default QuestionBox;
