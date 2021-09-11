import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View
          style={styles.box}
        >
          <Text style={styles.statsTxt}>Ranked</Text>
        </View>
        <View
          style={styles.box}
        >
          <Text style={styles.statsTxt}>LiveQuiz</Text>
        </View>
        <View
          style={styles.box}
        >
          <Text style={styles.statsTxt}>Rank</Text>
        </View>
      </View>

      <Text style={styles.quizHeading}>Today's Quiz</Text>

      <View style={styles.quiz}>
        <View
          style={styles.quizBox}
        >
          <Text style={styles.statsTxt}>Ranked</Text>
        </View>
        <View
          style={styles.quizBox}
        >
          <Text style={styles.statsTxt}>LiveQuiz</Text>
        </View>
        <View
          style={styles.quizBox}
        >
          <Text style={styles.statsTxt}>Rank</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  stats: {
    width: "100%",
    height: "21%",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: 'red',
  },
  box: {
    width: "25%",
    height: "100%",
    backgroundColor: '#0066cc',
    borderRadius: 20,
  },
  statsTxt: {
    color: 'white',
    alignSelf: 'center',
  },
  quizHeading: {
    color: '#0066cc',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    paddingTop: '5%'
  },
  quiz: {
    width: "100%",
    height: "55%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  quizBox: {
    width: "90%",
    height: "26%",
    backgroundColor: '#0066cc',
    borderRadius: 20,
  },
  statsTxt: {
    color: 'white',
    alignSelf: 'center',
    marginTop: '90%',
  },
});