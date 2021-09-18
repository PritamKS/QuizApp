import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuizBoxCard = ({ subject }) => {
  return (
    <TouchableOpacity
      style={styles.quizBox}
    >
      <View style={styles.quizBoxImage} />
      <Text style={styles.quizBoxDetails}>{subject}</Text>
    </TouchableOpacity>
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
  quizBoxImage: {
    width: "15%",
    height: "50%",
    backgroundColor: "red"
  },
  quizBoxDetails: {
    width: "60%",
    height: "50%",
    color: 'white',
  },
});

export default QuizBoxCard