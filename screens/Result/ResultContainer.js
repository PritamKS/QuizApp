import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Result from './Result';
import {getResult} from './actions';
import {finalResultData} from './selectors';

const ResultContainer = props => {
  const tokenId = props.route.params.tokenId;
  const playerId = props.route.params.playerId;

  useEffect(() => {
    let apiTimer;
    if (
      props.resultData &&
      ((props.resultData[0] && props.resultData[0].result === null) ||
        props.resultData.size === 0)
    ) {
      apiTimer = setInterval(() => {
        props.dispatchGetResult(tokenId);
      }, 5000);
    }
    return () => clearInterval(apiTimer);
  });

  return (
    <Result
      resultData={props.resultData}
      tokenId={tokenId}
      playerId={playerId}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  resultData: finalResultData(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchGetResult: tokenId => dispatch(getResult(tokenId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
