import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import PlayRequest from './PlayRequest';
import {sendPlayRequest, checkRequestStatus, clearData} from './actions';
import {
  selectUserStatus,
  selectLoadingStatus,
  selectPlayStatus,
  selectPlayerDetails,
} from './selectors';

const PlayRequestContainer = props => {
  const navigation = useNavigation();
  const {
    otherPlayerAvailable,
    dispatchToCheckRequestStatus,
    dispatchSendPlayRequest,
    playerDetails,
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
    navigation.navigate('QuestionListContainer', {
      player_id: playerDetails.response[0].player_id,
      token_id: playerDetails.response[0].token_id,
      userAction: playerDetails.action,
    });
  }

  return <PlayRequest categoryList={props.categoryList} />;
};

export const mapStateToProps = createStructuredSelector({
  userStatus: selectUserStatus(),
  loading: selectLoadingStatus(),
  otherPlayerAvailable: selectPlayStatus(),
  playerDetails: selectPlayerDetails(),
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
