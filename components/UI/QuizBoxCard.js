import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const QuizBoxCard = ({ index, subject, questCount }) => {
  return (
    <TouchableOpacity style={styles.quizBox} id={index}>
      <View style={styles.elementStyle}>
        <Image source={require('../../assets/quiz.png')} style={styles.quizBoxImage} />
        <View style={styles.infoElementStyle} >
          <Text style={styles.quizBoxDetails}>{subject}</Text>
          <Text style={styles.quizBoxDetails}>{questCount} Questions</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizBox: {
    width: Dimensions.get('window').width - 30,
    height: 90,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  quizBoxImage: {
    width: "25%",
    height: 50,
    resizeMode: 'contain',
  },
  quizBoxDetails: {
    width: "60%",
    height: "50%",
    color: 'white',
  },
  elementStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  infoElementStyle: {
    width: "70%"
  }
});

export default QuizBoxCard