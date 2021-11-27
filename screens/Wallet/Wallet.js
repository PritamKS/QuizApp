import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddMoney from './AddMoney';
import WithdrawMoney from './WithdrawMoney';
const Wallet = ({
  walletBalance,
  toggleAddMoneyModal,
  isModalVisible,
  onAmountChange,
  addMoneyPress,
  amountToBeAdded,
  toggleWithdrawMoneyModal,
  isWithdrawModalVisible,
  withdrawMoneyPress,
  UPI,
  onUPIChange,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerSection1}>
          <Text style={styles.topContainerSection1Left}>Total Cash</Text>
          <TouchableOpacity
            style={styles.topContainerSection1Right}
            onPress={() => {
              console.log('Transaction History Clicked');
            }}>
            <Text style={styles.topContainerSection1RightText}>
              Transaction History &gt;{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.walletBalanceSection}>
          <Image
            source={require('../../assets/images/inr.png')}
            style={styles.rupeeIcon}
          />
          <Text style={styles.walletAmount}>{walletBalance}</Text>
        </View>
        <View style={styles.actionArea}>
          <View style={styles.walletAction}>
            <TouchableOpacity
              style={styles.addCashCTA}
              onPress={toggleAddMoneyModal}>
              <Text style={styles.addCashCTAText}>
                <Icon name="plus" color="#fff" size={16} />
                &nbsp;&nbsp;Add Cash
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.walletAction}>
            <TouchableOpacity
              style={styles.addCashCTA}
              onPress={toggleWithdrawMoneyModal}>
              <Text style={styles.addCashCTAText}>
                <Icon name="sign-out" color="#fff" size={16} />
                &nbsp;&nbsp;Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <AddMoney
        isModalVisible={isModalVisible}
        toggleAddMoneyModal={toggleAddMoneyModal}
        onAmountChange={onAmountChange}
        addMoneyPress={addMoneyPress}
        amountToBeAdded={amountToBeAdded}
      />
      <WithdrawMoney
        isWithdrawModalVisible={isWithdrawModalVisible}
        toggleWithdrawMoneyModal={toggleWithdrawMoneyModal}
        onAmountChange={onAmountChange}
        withdrawMoneyPress={withdrawMoneyPress}
        UPI={UPI}
        onUPIChange={onUPIChange}
        amountToBeAdded={amountToBeAdded}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  topContainer: {
    backgroundColor: '#2e5db0',
    height: 250,
    margin: '2%',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: 10,
  },
  topContainerSection1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%',
  },
  topContainerSection1Left: {
    color: 'white',
    fontSize: 19,
  },
  topContainerSection1Right: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerSection1RightText: {
    color: '#92b7f7',
    fontSize: 16,
  },
  walletBalanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: '25%',
  },
  rupeeIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 200,
    marginRight: 10,
  },
  walletAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orange',
  },
  actionArea: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#2f499e',
    marginTop: '15%',
  },
  walletAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '65%',
    width: '50%',
  },
  addCashCTA: {
    width: '50%',
    borderRadius: 5,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0d35',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  addCashCTAText: {
    color: 'white',
  },
});

export default Wallet;
