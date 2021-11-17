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
          source={require('../../assets/images/quiz.png')}
          style={styles.quizBoxImage}
        />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  banner: {
    width: '93%',
    height: 130,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
  },
  quizBoxImage: {
    width: '25%',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  infoString: {
    width: '60%',
    height: '80%',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  elementStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  infoElementStyle: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90%',
  },
  getNowButton: {
    width: '50%',
    borderRadius: 5,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  getNowText: {
    fontSize: 17,
    color: '#176ffc',
  },
});

export default Banner;
