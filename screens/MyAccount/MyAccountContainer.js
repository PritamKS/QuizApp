import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MyAccount from './MyAccount';

const MyAccountContainer = () => {
  // useEffect(() => {
  //   props.getQuestionListData();
  // }, []);

  return <MyAccount />;
};

// export const mapStateToProps = createStructuredSelector({
//   questionList: selectQuestionList(),
//   loading: selectLoadingStatus(),
// });

// export const mapDispatchToProps = dispatch => {
//   return {
//     getQuestionListData: () => dispatch(getQuestionList()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MyAccountContainer);
export default MyAccountContainer;
