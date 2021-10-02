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
    marginRight: 12,
    flexDirection: 'row',
    borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
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
    padding: 16,
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
  },
  contents: {
    marginTop: '100%',
  },
});
