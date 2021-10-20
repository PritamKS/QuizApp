import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = ({onChangeNumber, phoneNumber, logInPress, userLoggedIn}) => {
  const navigation = useNavigation();
  if (userLoggedIn) {
    navigation.navigate('OtpVerificationContainer', {
      phoneNumber: phoneNumber,
    });
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/login.png')}
        style={styles.image}>
        <View style={styles.actionArea}>
          <TextInput
            keyboardType="numeric"
            style={styles.phoneInput}
            value={phoneNumber}
            onChange={onChangeNumber}
            placeholder="Phone No."
            placeholderTextColor="#1C39BB"
            maxLength={10}
          />
          <TouchableOpacity
            disabled={phoneNumber.length === 10 ? false : true}
            style={
              phoneNumber.length === 10
                ? styles.actionButton
                : styles.disabledActionButton
            }
            onPress={() => logInPress(phoneNumber)}>
            <Text style={styles.actionButtonTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={console.log('register clicked')}>
            <Text style={styles.actionButtonTxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  actionArea: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '40%',
  },
  actionButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#1C39BB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  disabledActionButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#94bdff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  actionButtonTxt: {
    color: 'white',
  },
  phoneInput: {
    borderWidth: 2,
    borderColor: '#17aaff',
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  actionButtons: {
    backgroundColor: 'red',
    paddingTop: '50%',
  },
});

export default Login;
