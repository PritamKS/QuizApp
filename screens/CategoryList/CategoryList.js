import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const CategoryList = ({subject, questCount, id, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      index={index}
      key={id}
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <LinearGradient
        style={styles.quizBox}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#5e9cff', '#0062ff', '#0062ff']}>
        <Image
          source={require('../../assets/images/quizimage.gif')}
          style={styles.quizBoxImage}
        />
        <View style={styles.infoElementStyle}>
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.questCount}>{questCount} Questions</Text>
          <View style={styles.iconView}>
            <Icon name="play-circle" size={35} style={styles.playIcon} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizBox: {
    width: '93%',
    height: 80,
    marginTop: '5%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    position: 'relative',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
  },
  quizBoxImage: {
    width: '20%',
    height: '50%',
    resizeMode: 'contain',
    borderRadius: 600,
  },
  subject: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  questCount: {
    color: 'white',
  },
  elementStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  infoElementStyle: {
    flex: 1,
    paddingLeft: '5%',
  },
  playIcon: {
    color: '#ff0a27',
    top: -1,
  },
  iconView: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 32,
    height: 32,
    top: '50%',
    right: '15%',
    borderRadius: 50,
  },
});

export default CategoryList;
