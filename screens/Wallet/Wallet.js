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
        <View style={styles.walletAction}>
          <View style={styles.walletAction1}>
            <Icon name="university" size={35} style={styles.bankIcon} />
            <View style={styles.walletActionText}>
              <Text style={styles.walletAction1SubclassHeading}>
                Deposit Cash
              </Text>
              <Text style={styles.walletAction1Subclass1}>&#8377;0</Text>
            </View>
          </View>
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
          <View style={styles.walletAction1}>
            <Icon name="angellist" size={35} style={styles.winningIcon} />
            <View style={styles.walletActionText}>
              <Text style={styles.walletAction1SubclassHeading}>
                Winnings Cash
              </Text>
              <Text style={styles.walletAction1Subclass1}>&#8377;0</Text>
            </View>
          </View>
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
  walletAction1Subclass1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  walletActionText: {
    marginLeft: '3%',
  },
  addCashCTA: {
    width: '30%',
    borderRadius: 5,
    height: '60%',
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
  walletAction1SubclassHeading: {
    fontSize: 16,
    color: '#92b7f7',
  },
  bankIcon: {
    backgroundColor: '#5e9cff',
    width: 50,
    height: 50,
    padding: 6,
    color: '#26509e',
    borderRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  winningIcon: {
    backgroundColor: '#5e9cff',
    width: 50,
    height: 50,
    padding: 6,
    color: '#26509e',
    borderRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  main: {
    height: '100%',
    justifyContent: 'center',
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
  walletBalanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: '25%',
  },
  walletAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    height: '20%',
  },
  walletAction1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainerSection1Left: {
    color: 'white',
    fontSize: 19,
  },
  walletAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  topContainerSection1Right: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerSection1RightText: {
    color: '#92b7f7',
    fontSize: 16,
  },
  rupeeIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignItems: 'center',
    borderRadius: 200,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Wallet;
