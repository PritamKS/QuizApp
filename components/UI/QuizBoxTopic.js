import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const QuizBoxTopic = ({
  subject,
  questCount,
  id,
  index,
  amount,
  walletBalance,
}) => {
  const navigation = useNavigation();
  return (
    <View key={id} index={index}>
      <LinearGradient
        style={styles.quizBox}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#5e9cff', '#5e9cff', '#0062ff']}>
        <View style={styles.textInfo}>
          <Text style={styles.topicName}>{subject}</Text>
          <Text style={styles.topicName}>&#8377;{amount}</Text>
          <Text style={styles.questCount}>{questCount} Questions</Text>
        </View>
        <TouchableOpacity
          style={
            walletBalance - amount > 0 ? styles.paybtn : styles.disabledPayBtn
          }
          onPress={() => {
            walletBalance - amount > 0
              ? navigation.navigate('PlayRequestContainer', {
                  quid: id,
                })
              : navigation.navigate('Back to Question', {
                  quid: id,
                });
          }}>
          <Text style={styles.payBtnTxt}>
            {walletBalance - amount > 0 ? 'Pay' : 'Add Money'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
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
    width: '100%',
    height: 110,
    backgroundColor: '#5e9cff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
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
    borderRadius: 10,
    marginRight: 15,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  disabledPayBtn: {
    width: '25%',
    height: '30%',
    backgroundColor: '#34b33e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  payBtnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizBoxTopic;
