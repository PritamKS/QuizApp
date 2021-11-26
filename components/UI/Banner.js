import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Banner = ({infoString}) => {
  return (
    <LinearGradient
      style={styles.banner}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#2256a3', '#2256a3', '#2256a3']}>
      <View style={styles.elementStyle}>
        <View style={styles.infoElementStyle}>
          <Text style={styles.infoString}>{infoString}</Text>
          <TouchableOpacity
            style={styles.getNowButton}
            onPress={() => {
              console.log('banner pressed');
            }}>
            <Text style={styles.getNowText}>Get Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/quizimage.png')}
          style={styles.quizBoxImage}
        />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  banner: {
    width: '93%',
    height: 100,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  quizBoxImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    borderRadius: 200,
  },
  infoString: {
    width: '60%',
    height: '80%',
    color: 'white',
    fontSize: 16,
  },
  elementStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
  },
  infoElementStyle: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90%',
  },
  getNowButton: {
    width: '40%',
    borderRadius: 5,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5e9cff',
  },
  getNowText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Banner;
