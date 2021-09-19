import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const StatsCard = (children) => {
  return (
    <View style={styles.box}>
      <Image source={require('../../assets/smileys.png')} style={styles.statsAPI} />
      <Text style={styles.statsTxt}>{children.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: "25%",
    height: "100%",
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: "column",
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
  statsTxt: {
    color: 'white',
  },
  statsAPI: {
    backgroundColor: "red",
    width: "30%",
    height: "30%",
  },
});

export default StatsCard