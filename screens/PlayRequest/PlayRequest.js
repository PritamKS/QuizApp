import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PlayRequest = () => {
  return (
    <View style={styles.accmain}>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/images/waiting.png')}
          style={styles.profilePhoto}
        />
      </View>
      <Text style={styles.profileName}>WAITING</Text>
      <View style={styles.actionArea}>
        <Text style={styles.emailId}>Don't want to play right now?</Text>
        <TouchableOpacity
          style={styles.paybtn}
          onPress={() => console.log('exit pressed')}>
          <Text style={styles.payBtnTxt}>Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: '15%',
    position: 'relative',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    backgroundColor: '#b3edff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  accmain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  profileName: {
    marginTop: '5%',
    fontSize: 26,
    fontWeight: '600',
    color: '#1C39BB',
  },
  emailId: {
    marginTop: '1%',
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    paddingRight: 10,
  },
  paybtn: {
    width: '30%',
    height: '30%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  payBtnTxt: {
    color: 'white',
  },
  actionArea: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default PlayRequest;
