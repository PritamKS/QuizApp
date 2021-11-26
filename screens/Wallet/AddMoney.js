import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';

const AddMoney = ({
  onAmountChange,
  amountToBeAdded,
  toggleAddMoneyModal,
  addMoneyPress,
  isModalVisible,
}) => {
  return (
    <View style={styles.main}>
      <Modal isVisible={isModalVisible} animationType="fade">
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
            onPress={() => addMoneyPress(amountToBeAdded)}>
            <Text style={styles.actionButtonTxt}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={toggleAddMoneyModal}>
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
    height: 300,
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

export default AddMoney;
