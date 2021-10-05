import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import Dashboard from './Dashboard';
import {getCategoryList} from './actions';
import {selectCategoryList, selectLoadingStatus} from './selectors';

const DashboardContainer = props => {
  const navigation = useNavigation();

  useEffect(() => {
    props.dispatchCategoryList();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate('OnBoarding'); // Navigate to your desired screen
    });
  }, []);

  return <Dashboard categoryList={props.categoryList} />;
};

export const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList(),
  loading: selectLoadingStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchCategoryList: () => dispatch(getCategoryList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
