import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import SubCategory from './SubCategory';
import {getSubCategory} from './actions';
import {selectQuestionList} from './selectors';
import {selectWalletBalance} from '../Dashboard/selectors';

const SubCategoryContainer = props => {
  useEffect(() => {
    props.dispatchGetSubCategoryData();
  }, []);

  return (
    <SubCategory
      subCategoryList={props.subCategoryList}
      walletBalance={props.walletBalance}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  subCategoryList: selectQuestionList(),
  walletBalance: selectWalletBalance(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchGetSubCategoryData: () => dispatch(getSubCategory()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategoryContainer);
