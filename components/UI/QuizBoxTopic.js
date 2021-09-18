import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuizBoxTopic = (children) => {
  return (
    <View
      style={styles.quizBox}
    >
      <TouchableOpacity style={styles.textInfo}>
        <Text style={styles.quizBoxDetails}>{children.topic}</Text>
        <Text style={styles.quizBoxDetails}>{children.amount}</Text>
        <Text style={styles.quizBoxDetails}>{children.questionCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={payClickHandler}>
        <Text style={styles.loginTxt}>{children.buttonText}</Text>
      </TouchableOpacity>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizBox: {
    width: "90%",
    height: "26%",
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  textInfo: {
    width: "70%",
    height: "80%",
    backgroundColor: "red"
  },
  loginBtn: {
    width: "30%",
    height: "80%"
  },
});

export default QuizBoxTopic