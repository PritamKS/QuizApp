import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import Dashboard from './dashboard';
import {getCategoryList, getWalletDetails} from './actions';
import {
  selectCategoryList,
  selectLoadingStatus,
  selectWalletBalance,
} from './selectors';
import {selectUserPhoneNumber} from '../Login/selectors';

const DashboardContainer = props => {
  const navigation = useNavigation();

  useEffect(() => {
    props.dispatchCategoryList();
  }, []);

  useEffect(() => {
    props.dispatchWalletDetails(props.phone);
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate('OnBoarding'); // Navigate to your desired screen
    });
  }, []);

  return (
    <Dashboard
      categoryList={props.categoryList}
      walletBalance={props.walletBalance}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList(),
  loading: selectLoadingStatus(),
  phone: selectUserPhoneNumber(),
  walletBalance: selectWalletBalance(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchCategoryList: () => dispatch(getCategoryList()),
    dispatchWalletDetails: phone => dispatch(getWalletDetails(phone)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
