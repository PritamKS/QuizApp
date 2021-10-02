import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Dashboard from './dashboard';
import {getCategoryList} from './actions';
import {selectCategoryList, selectLoadingStatus} from './selectors';

const DashboardContainer = props => {
  useEffect(() => {
    props.dispatchCategoryList();
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
