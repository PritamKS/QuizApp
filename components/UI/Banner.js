import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
const Banner = ({ infoString }) => {
  return (
    <View style={styles.banner}>
      <View style={styles.elementStyle}>
        <View style={styles.infoElementStyle} >
          <Text style={styles.infoString}>{infoString}</Text>
          <TouchableOpacity style={styles.getNowButton} onPress={() => { console.log("banner pressed") }}>
            <Text style={styles.getNowText}>Get Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/quiz.png')} style={styles.quizBoxImage} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get('window').width - 30,
    height: 150,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  quizBoxImage: {
    width: "25%",
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',

  },
  infoString: {
    width: "60%",
    height: "80%",
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  elementStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    flex: 1,

  },
  infoElementStyle: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "90%",
  },
  getNowButton: {
    width: "50%",
    borderRadius: 5,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  getNowText: {
    fontSize: 17,
    color: '#91b4ed',
    fontWeight: 'bold',


  }
});

export default Banner