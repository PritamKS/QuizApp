import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';

const WithdrawMoney = ({
  onAmountChange,
  amountToBeAdded,
  toggleWithdrawMoneyModal,
  withdrawMoneyPress,
  isWithdrawModalVisible,
  UPI,
  onUPIChange,
}) => {
  return (
    <View style={styles.main}>
      <Modal isVisible={isWithdrawModalVisible} animationType="fade">
        <View style={styles.modal}>
          <Text style={styles.actionButtonTxt}>Enter the Amount</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.amount}
            value={amountToBeAdded}
            onChange={onAmountChange}
            placeholder="&#8377;"
            placeholderTextColor="#1C39BB"
            maxLength={5}
          />
          <Text style={styles.actionButtonTxt}>Enter your UPI ID</Text>
          <TextInput style={styles.amount} value={UPI} onChange={onUPIChange} />
          <TouchableOpacity
            disabled={
              amountToBeAdded.length > 5 || amountToBeAdded.length === 0
                ? true
                : false
            }
            style={
              amountToBeAdded.length > 5 && amountToBeAdded.length === 0
                ? styles.disabledActionButton
                : styles.actionButton
            }
            onPress={() => withdrawMoneyPress(amountToBeAdded)}>
            <Text style={styles.actionButtonTxt}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={toggleWithdrawMoneyModal}>
            <Text style={styles.actionButtonTxt}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5e9cff',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e9cff',
    height: 350,
    borderRadius: 15,
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
    backgroundColor: '#8fa4b3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  actionButtonTxt: {
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    borderWidth: 2,
    borderColor: '#1C39BB',
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
  },
});

export default WithdrawMoney;
