import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const QuizBoxCard = ({ subject }) => {
  return (
    <TouchableOpacity
      style={styles.quizBox}
    >
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
      <View style={styles.quizBoxImage} />
      <Text style={styles.quizBoxDetails}>{subject}</Text>
      <View style={styles.playIcon}>
        <Icon name="play" color="#900" size={30} />
      </View>
      {/* </LinearGradient> */}
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
    backgroundColor: '#0066cc',
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
    height: "50%"
  },
  playIcon: {
  }
});

export default QuizBoxCard