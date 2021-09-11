import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './welcomePageStyle';

const WelcomePage2 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/welcome2.png')} style={styles.img} />
      <View style={styles.textArea}>
        <Text style={styles.heading}>Introduction of Games</Text>
        <Text style={styles.message}>
          India's first cricket derivatives trading platform. Buy and sell future contract of your favourite cricket team.
          Play Gaming quiz with real players for real money.
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomePage2