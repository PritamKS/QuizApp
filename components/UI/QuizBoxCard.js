import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizBoxCard = ({ index, subject, questCount }) => {
  return (
    <TouchableOpacity id={index}>
      <LinearGradient style={styles.quizBox} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2a1bfa', '#0420db', '#2a1bfa']}>
        <Image source={require('../../assets/quiz.png')} style={styles.quizBoxImage} />
        <View style={styles.infoElementStyle} >
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.questCount}>{questCount} Questions</Text>
          <View style={styles.iconView}>
            <Icon name="play-circle" color="#fff" size={35} style={styles.playIcon} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizBox: {
    width: "95%",
    height: 90,
    marginTop: "5%",
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: '#0015ff',
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    position: "relative"
  },
  quizBoxImage: {
    width: "20%",
    height: "50%",
    resizeMode: 'contain',
  },
  subject: {
    color: "white",
    fontWeight: '600',
    fontSize: 16
  },
  questCount: {
    color: 'white',
  },
  elementStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green"
  },
  infoElementStyle: {
    flex: 1,
    paddingLeft: "5%"
  },
  playIcon: {
    color: "#ff0a27",
  },
  iconView: {
    position: "absolute",
    backgroundColor: "white",
    width: 30,
    height: 33,
    top: "50%",
    right: "15%",
    borderRadius: 50,
  }
});

export default QuizBoxCard