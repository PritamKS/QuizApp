import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const Header = ({ points }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="bars" color="#fff" size={35} style={styles.bars} />
      </TouchableOpacity>

      <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f75769', '#f52a67', '#ff0a27']}>
        <Text style={styles.buttonText}>{points} Points</Text>
      </LinearGradient>
    </View >
  );
}
const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  bars: {
    marginLeft: 20,
    color: "#1C39BB"
  },
  linearGradient: {
    width: "35%",
    borderRadius: 30,
    height: "70%",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: 20,
    backgroundColor: "red",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
  },

});

export default Header