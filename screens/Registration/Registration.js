import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Registration = ({
  userRegistered,
  phoneNumber,
  name,
  email,
  submitPress,
  onChangeNumber,
  onChangeName,
  onChangeEmail,
  cleanPreviousRecords,
}) => {
  const navigation = useNavigation();
  const showAlert = () =>
    Alert.alert('Registration', 'You are registered Now!!', [
      {
        text: 'OK',
      },
    ]);
  if (userRegistered) {
    cleanPreviousRecords();
    showAlert();
    navigation.navigate('LoginContainer');
  }

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/registration1.png')}
        style={styles.image}>
        <View style={styles.actionArea}>
          <View style={styles.registrationPhotoContainer}>
            <Image
              source={require('../../assets/images/registrationPict.png')}
              style={styles.registrationPhoto}
            />
          </View>
          <TextInput
            keyboardType="numeric"
            style={styles.phoneInput}
            value={phoneNumber}
            onChange={onChangeNumber}
            placeholder="Phone No."
            placeholderTextColor="#1C39BB"
            maxLength={10}
          />
          <TextInput
            style={styles.phoneInput}
            value={name}
            onChange={onChangeName}
            placeholder="Name"
            placeholderTextColor="#1C39BB"
            maxLength={15}
          />
          <TextInput
            keyboardType="email-address"
            style={styles.phoneInput}
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
            placeholderTextColor="#1C39BB"
            maxLength={25}
          />
          <TouchableOpacity
            disabled={
              phoneNumber.length > 0 && name.length > 0 && email.length > 0
                ? false
                : true
            }
            style={
              phoneNumber.length > 0 && name.length > 0 && email.length > 0
                ? styles.actionButton
                : styles.disabledActionButton
            }
            onPress={() => submitPress(phoneNumber, name, email)}>
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
  registrationPhotoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: '10%',
  },
  registrationPhoto: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  actionArea: {
    position: 'absolute',
    bottom: 80,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '40%',
    marginBottom: '40%',
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

export default Registration;
