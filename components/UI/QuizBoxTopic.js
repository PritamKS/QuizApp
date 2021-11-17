import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const QuizBoxTopic = ({subject, questCount, id, index, amount}) => {
  const navigation = useNavigation();
  return (
    <View key={id} index={index} style={styles.quizBox}>
      <View style={styles.textInfo}>
        <Text style={styles.topicName}>{subject}</Text>
        <Text style={styles.topicName}>{amount}</Text>
        <Text style={styles.questCount}>{questCount} Questions</Text>
      </View>
      <TouchableOpacity
        style={styles.paybtn}
        onPress={() => {
          navigation.navigate('PlayRequestContainer', {
            quid: id,
          });
        }}>
        <Text style={styles.payBtnTxt}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topicName: {
    color: '#26509e',
    fontSize: 22,
    fontWeight: 'bold',
  },
  questCount: {
    color: 'white',
    fontSize: 17,
  },
  quizBox: {
    width: '90%',
    height: 110,
    backgroundColor: '#5e9cff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 15,
  },
  textInfo: {
    width: '60%',
    height: '80%',
    left: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paybtn: {
    width: '25%',
    height: '30%',
    backgroundColor: '#26509e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  payBtnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizBoxTopic;
