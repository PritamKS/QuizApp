import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Dashboard from './dashboard';
import {getQuestionList} from './actions';
import {selectQuestionList, selectLoadingStatus} from './selectors';

const DashboardContainer = props => {
  useEffect(() => {
    props.getQuestionListData();
  }, []);

  return <Dashboard questionList={props.questionList} />;
};

export const mapStateToProps = createStructuredSelector({
  questionList: selectQuestionList(),
  loading: selectLoadingStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    getQuestionListData: () => dispatch(getQuestionList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
