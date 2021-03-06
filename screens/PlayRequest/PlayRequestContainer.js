import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';

import PlayRequest from './PlayRequest';
import {
  sendPlayRequest,
  checkRequestStatus,
  clearData,
  setPlayerCurrentStatus,
  exitPlayerWaiting,
} from './actions';
import {
  selectUserStatus,
  selectLoadingStatus,
  selectPlayStatus,
  selectPlayerDetails,
  selectUserDetails,
  playerExited,
} from './selectors';
import {playerData} from '../OTPVerification/selectors';

const PlayRequestContainer = props => {
  const navigation = useNavigation();
  const questionId = props.route.params.quid;
  const {
    otherPlayerAvailable,
    dispatchToCheckRequestStatus,
    dispatchSendPlayRequest,
    playerDetails,
    userDetails,
    playerData,
  } = props;

  const exitWaiting = () => {
    const PlayerRequestId = props.userDetails[0].id;
    const playerId = props.userDetails[0].player_id;
    props.dispatchExitWaiting(PlayerRequestId, playerId);
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    dispatchSendPlayRequest(playerData, questionId);
  }, []);

  useEffect(() => {
    if (userDetails && userDetails.length) {
      let apiTimer;
      const id = userDetails[0].id;
      const player_id = userDetails[0].player_id;
      const player_name = userDetails[0].player_name;
      const quiz_id = userDetails[0].quiz_id;
      if (otherPlayerAvailable === 'false') {
        apiTimer = setInterval(() => {
          dispatchToCheckRequestStatus(id, player_id, player_name, quiz_id);
        }, 5000);
      } else {
        clearInterval(apiTimer);
      }

      return () => clearInterval(apiTimer);
    }
  }, [otherPlayerAvailable, userDetails]);

  if (otherPlayerAvailable === 'true') {
    props.dispatchPlayerCurrentStatus(playerDetails.action);
    navigation.navigate('QuestionListContainer', {
      player_id: playerDetails.response[0].player_id,
      token_id: playerDetails.response[0].token_id,
      userAction: playerDetails.action,
    });
  }

  return (
    <PlayRequest
      categoryList={props.categoryList}
      exitWaiting={exitWaiting}
      playerExited={props.playerExited}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  playerData: playerData(),
  userStatus: selectUserStatus(),
  loading: selectLoadingStatus(),
  otherPlayerAvailable: selectPlayStatus(),
  playerDetails: selectPlayerDetails(),
  userDetails: selectUserDetails(),
  playerExited: playerExited(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchSendPlayRequest: (playerData, questionId) =>
      dispatch(sendPlayRequest(playerData, questionId)),
    dispatchToCheckRequestStatus: (id, player_id, player_name, quiz_id) =>
      dispatch(checkRequestStatus(id, player_id, player_name, quiz_id)),
    dispatchClearData: () => dispatch(clearData()),
    dispatchPlayerCurrentStatus: action =>
      dispatch(setPlayerCurrentStatus(action)),
    dispatchExitWaiting: (reqId, playerId) =>
      dispatch(exitPlayerWaiting(reqId, playerId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayRequestContainer);
