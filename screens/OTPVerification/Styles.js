import {StyleSheet} from 'react-native';
import colors from '../../components/UI/colors';

export const styles = StyleSheet.create({
  timerText: {
    fontSize: 12,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 24,
    fontWeight: 'bold',
  },
  otpText: {
    padding: 0,
    flex: 1,
    fontWeight: 'bold',
    color: colors.BLUE,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
  otpBoxes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'blue',
    //borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  errorText: {
    color: colors.RED,
    marginTop: 12,
    textAlign: 'center',
  },
  attemptsRemainingText: {
    color: colors.BLACK,
    marginTop: 12,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  submitButtonText: {
    color: colors.WHITE,
  },
  otpResendButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  otpResendButtonText: {
    color: colors.ORANGE,
    textTransform: 'none',
    textDecorationLine: 'underline',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
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
});
