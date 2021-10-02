import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import SubCategory from './SubCategory';
import {getSubCategory} from './actions';
import {selectQuestionList} from './selectors';

const SubCategoryContainer = props => {
  const {quid} = props.route.params;

  useEffect(() => {
    props.dispatchGetSubCategoryData(quid);
  }, []);

  return <SubCategory subCategoryList={props.subCategoryList} />;
};

export const mapStateToProps = createStructuredSelector({
  subCategoryList: selectQuestionList(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchGetSubCategoryData: quid => dispatch(getSubCategory(quid)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategoryContainer);
