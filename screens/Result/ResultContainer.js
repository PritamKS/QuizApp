import React from 'react';
// import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';

import Result from './Result';
// import {getResult} from './actions';
// import {finalResultData} from './selectors';

const ResultContainer = () => {
  // const tokenId = props.route.params.tokenId;
  // const playerId = props.route.params.playerId;
  const tokenId = 'TK1634555292727';
  const playerId = '1';

  const resultData = [
    {
      id: 104,
      player_id: '2',
      quiz_id: '3',
      player_name: 'sonu',
      token_id: 'TK1634555292727',
      status: 4,
      token_action: 'SEND',
      score: '1',
      result: 'LOOSER',
    },
    {
      id: 105,
      player_id: '1',
      quiz_id: '3',
      player_name: 'Afzal',
      token_id: 'TK1634555292727',
      status: 4,
      token_action: 'RECEIVE',
      score: '2',
      result: 'WINNER',
    },
  ];
  return (
    <Result resultData={resultData} tokenId={tokenId} playerId={playerId} />
  );
};

// export const mapStateToProps = createStructuredSelector({
//   resultData: finalResultData(),
// });

// export const mapDispatchToProps = dispatch => {
//   return {
//     dispatchGetResultData: () => dispatch(getResult()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
export default ResultContainer;
