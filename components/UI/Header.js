import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const Header = ({ points }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="bars" color="#fff" size={40} style={styles.bars} />
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
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1%",
    paddingBottom: "1%"
  },
  bars: {
    marginLeft: "15%",
    color: "#1C39BB"
  },
  linearGradient: {
    width: "30%",
    borderRadius: 30,
    height: "100%",
    marginRight: "3%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },

});

export default Header