import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StatsCard = children => {
  return (
    <LinearGradient
      style={styles.box}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#2a1bfa', '#0420db', '#2a1bfa']}>
      <Image
        source={require('../../assets/images/smileys.png')}
        style={styles.statsAPI}
      />
      <Text style={styles.statsTxt}>{children.text}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '30%',
    height: '100%',
    backgroundColor: '#1C39BB',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#0420db',
    borderWidth: 1,
  },
  statsTxt: {
    color: 'white',
    fontWeight: '600',
  },
  statsAPI: {
    backgroundColor: 'red',
    width: '30%',
    height: '30%',
  },
});

export default StatsCard;
