import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
        colors={['#5e9cff', '#3a6ec2', '#3a6ec2']}>
        <Image
          source={require('../../assets/images/quizimage.png')}
          style={styles.quizBoxImage}
        />
        <View style={styles.infoElementStyle}>
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.questCount}>{questCount} Questions</Text>
          <View style={styles.iconView}>
            <Image
              source={require('../../assets/images/playIcon.png')}
              style={styles.playIcon}
            />
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
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    position: 'relative',
    marginBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopWidth: 2,
    borderColor: '#1d5bbf',
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
  infoElementStyle: {
    flex: 1,
  },
  playIcon: {
    width: 23,
    height: 23,
  },
  iconView: {
    position: 'absolute',
    borderRadius: 50,
    right: 45,
    top: 40,
  },
});

export default CategoryList;
