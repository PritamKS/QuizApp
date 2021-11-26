import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import RazorpayCheckout from 'react-native-razorpay';

import Wallet from './Wallet';
import {getWalletDetails} from '../Dashboard/actions';
import {selectWalletBalance} from '../Dashboard/selectors';
import {selectUserPhoneNumber} from '../Login/selectors';
import {
  setAmountChange,
  setAddMoney,
  clearOrderId,
  ServerIntimationOnSuccess,
  setUPI,
  withdrawMoney,
  clearWithdrawRequest,
  clearServerVerifiedMessage,
} from './actions';
import {
  amountToBeAddedSelector,
  OrderIdReceivedSelector,
  orderIdDetailsSelector,
  UPISelector,
  withdrawRequestSelector,
  serverVerificationResponseSelector,
} from './selectors';
import {playerData} from '../OTPVerification/selectors';

const WalletContainer = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisible] = useState(false);

  const toggleAddMoneyModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleWithdrawMoneyModal = () => {
    setWithdrawModalVisible(!isWithdrawModalVisible);
  };

  if (props.orderIdReceived) {
    const amount = props.orderIdDetails.amount;
    const orderId = props.orderIdDetails.order_txn_no;
    props.dispatchClearOrderId();
    let options = {
      description: 'Quiz App',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_Sr6suyOBf8v5Lj',
      amount: amount,
      name: 'Quiz App',
      order_id: orderId, //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'pritam.singh@example.com',
        contact: '9911716569',
        name: 'Pritam Singh',
      },
      theme: {color: '#26509e'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        props.dispatchServerIntimationOnSuccess(
          data.razorpay_order_id,
          data.razorpay_payment_id,
          data.razorpay_signature,
        );
        toggleAddMoneyModal();
        // alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  }

  if (props.withdrawRequest === 'Withdrawal Initialize') {
    alert(`Withdraw Request Initiated`);
    props.dispatchClearWithdrawRequest();
  }

  if (props.serverVerified === 'Invalid Request') {
    alert(`Server cannot verify the transaction`);
    props.dispatchClearServerVerifiedMessage();
  }

  const addMoneyPress = () => {
    const playerId = props.playerData[0].id;
    props.dispatchAddMoney(props.amountToBeAdded, props.phone, playerId);
  };

  const withdrawMoneyPress = () => {
    const playerId = props.playerData[0].id;
    props.dispathWithdrawMoneyRequest(
      props.phone,
      playerId,
      props.amountToBeAdded,
      props.UPI,
    );
    toggleWithdrawMoneyModal();
  };

  const onAmountChange = event => {
    const value = event.nativeEvent.text;
    props.dispatchOnAmountChange(value);
  };

  const onUPIChange = event => {
    const value = event.nativeEvent.text;
    props.dispatchonUPIChange(value);
  };

  useEffect(() => {
    props.dispatchWalletDetails(props.phone);
  });

  return (
    <Wallet
      walletBalance={props.walletBalance}
      addMoneyPress={addMoneyPress}
      toggleAddMoneyModal={toggleAddMoneyModal}
      isModalVisible={isModalVisible}
      onAmountChange={onAmountChange}
      amountToBeAdded={props.amountToBeAdded}
      toggleWithdrawMoneyModal={toggleWithdrawMoneyModal}
      isWithdrawModalVisible={isWithdrawModalVisible}
      onUPIChange={onUPIChange}
      withdrawMoneyPress={withdrawMoneyPress}
      UPI={props.UPI}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  phone: selectUserPhoneNumber(),
  walletBalance: selectWalletBalance(),
  amountToBeAdded: amountToBeAddedSelector(),
  playerData: playerData(),
  orderIdReceived: OrderIdReceivedSelector(),
  orderIdDetails: orderIdDetailsSelector(),
  UPI: UPISelector(),
  withdrawRequest: withdrawRequestSelector(),
  serverVerified: serverVerificationResponseSelector(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchWalletDetails: phone => dispatch(getWalletDetails(phone)),
    dispatchOnAmountChange: amount => dispatch(setAmountChange(amount)),
    dispatchAddMoney: (amount, phone, id) =>
      dispatch(setAddMoney(amount, phone, id)),
    dispatchClearOrderId: () => dispatch(clearOrderId()),
    dispatchServerIntimationOnSuccess: (order, payment, signature) =>
      dispatch(ServerIntimationOnSuccess(order, payment, signature)),
    dispatchonUPIChange: upi => dispatch(setUPI(upi)),
    dispathWithdrawMoneyRequest: (phone, playerId, amountToBeAdded, UPI) =>
      dispatch(withdrawMoney(phone, playerId, amountToBeAdded, UPI)),
    dispatchClearWithdrawRequest: () => dispatch(clearWithdrawRequest()),
    dispatchClearServerVerifiedMessage: () =>
      dispatch(clearServerVerifiedMessage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletContainer);
