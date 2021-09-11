import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './welcomePageStyle';

const WelcomePage3 = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/welcome3.png")} style={styles.img} />
      <View style={styles.textArea}>
        <Text style={styles.heading}>Payments & Withdrawals</Text>
        <Text style={styles.message}>
          Deposit and withdrawal your winning within few seconds with Paytm, UPI etc.
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomePage3
