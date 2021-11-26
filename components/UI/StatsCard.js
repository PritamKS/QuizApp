import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StatsCard = children => {
  return (
    <LinearGradient
      style={styles.box}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#2256a3', '#2256a3', '#2256a3']}>
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
    width: '28%',
    height: '75%',
    backgroundColor: '#1C39BB',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  statsTxt: {
    color: 'white',
    fontWeight: '600',
  },
  statsAPI: {
    backgroundColor: 'red',
    width: '25%',
    height: '35%',
    borderRadius: 20,
  },
});

export default StatsCard;
