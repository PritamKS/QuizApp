import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './welcomePageStyle';

const WelcomePage1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/welcome1.png')} style={styles.img} />
      <View style={styles.textArea}>
        <Text style={styles.heading}>Welcome to AlphaZ</Text>
        <Text style={styles.message}>
          India's best peer to peer gaming platform.
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomePage1