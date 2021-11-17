import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyAccount = () => {
  return (
    <View style={styles.accmain}>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/images/dp.png')}
          style={styles.profilePhoto}
        />
        <View style={styles.edit}>
          <Icon name="pencil" color="#fff" size={25} style={styles.editIcon} />
        </View>
      </View>
      <Text style={styles.profileName}>Pritam Singh</Text>
      <Text style={styles.emailId}>spiderman@gmail.com</Text>
      <View style={styles.playerDetails}>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>4.8</Text>
          <Text style={styles.playerDetailsBlockSubHeading}>Ranking</Text>
        </View>

        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>50</Text>
          <Text style={styles.playerDetailsBlockSubHeading}>Games Played</Text>
        </View>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>&#x20B9;1000</Text>
          <Text style={styles.playerDetailsBlockSubHeading}>Wallet</Text>
        </View>
      </View>
      <Text style={styles.aboutHeading}>About</Text>
      <Text style={styles.aboutBody}>
        Engineer and Developer with years of experience in Web and an App
        developing with lots of exposure around web and mobile technologies.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: '15%',
    position: 'relative',
    position: 'relative',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  accmain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#5e9cff',
  },
  edit: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 25,
    bottom: 5,
    right: 12,
    backgroundColor: '#17aaff',
    borderWidth: 4,
    borderColor: 'white',
  },
  profileName: {
    marginTop: '5%',
    fontSize: 26,
    fontWeight: '600',
  },
  emailId: {
    marginTop: '1%',
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  playerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: '10%',
  },
  playerDetailsBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerDetailsBlockHeading: {
    fontSize: 26,
    fontWeight: '600',
  },
  playerDetailsBlockSubHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  aboutBody: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    textAlign: 'center',
    color: '#2e313b',
  },
  aboutHeading: {
    fontSize: 26,
    fontWeight: '600',
  },
});

export default MyAccount;
