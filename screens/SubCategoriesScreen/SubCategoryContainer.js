import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import SubCategory from './SubCategory';
import {getSubCategory} from './actions';
import {selectQuestionList} from './selectors';

const SubCategoryContainer = props => {
  useEffect(() => {
    props.dispatchGetSubCategoryData();
  }, []);

  return <SubCategory subCategoryList={props.subCategoryList} />;
};

export const mapStateToProps = createStructuredSelector({
  subCategoryList: selectQuestionList(),
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
