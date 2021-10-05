import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PlayRequest from './PlayRequest';
import {sendPlayRequest, checkRequestStatus, clearData} from './actions';
import {
  selectUserStatus,
  selectLoadingStatus,
  selectPlayStatus,
} from './selectors';

const PlayRequestContainer = props => {
  const {
    otherPlayerAvailable,
    dispatchToCheckRequestStatus,
    dispatchSendPlayRequest,
  } = props;

  useEffect(() => {
    dispatchSendPlayRequest();
  }, []);

  useEffect(() => {
    let apiTimer;
    if (otherPlayerAvailable === 'false') {
      apiTimer = setInterval(() => {
        dispatchToCheckRequestStatus();
      }, 5000);
    } else {
      clearInterval(apiTimer);
    }
    return () => clearInterval(apiTimer);
  }, [otherPlayerAvailable]);

  if (otherPlayerAvailable === 'true') {
    console.log(otherPlayerAvailable, 'player found');
  }

  return <PlayRequest categoryList={props.categoryList} />;
};

export const mapStateToProps = createStructuredSelector({
  userStatus: selectUserStatus(),
  loading: selectLoadingStatus(),
  otherPlayerAvailable: selectPlayStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchSendPlayRequest: () => dispatch(sendPlayRequest()),
    dispatchToCheckRequestStatus: () => dispatch(checkRequestStatus()),
    dispatchClearData: () => dispatch(clearData()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayRequestContainer);
