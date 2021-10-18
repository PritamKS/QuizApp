import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Result = props => {
  const {playerId, resultData} = props;
  const currentPlayerData = resultData.filter(
    data => data.player_id === playerId,
  );
  const otherPlayerData = resultData.filter(
    data => data.player_id !== playerId,
  );
  const currentPlayerResult = currentPlayerData[0].result;
  const message = currentPlayerResult === 'WINNER' ? 'YOU WON' : 'YOU LOST';

  return (
    <View style={styles.accmain}>
      <View style={styles.gameOver}>
        <Image
          source={require('../../assets/images/gameOver.png')}
          style={styles.gameOverImage}
        />
      </View>
      <Text
        style={
          currentPlayerResult === 'WINNER'
            ? styles.winnerResultMessage
            : styles.looserResultMessage
        }>
        {message}
      </Text>
      <View style={styles.resultPhotoContainer}>
        <Image
          source={
            currentPlayerResult === 'WINNER'
              ? require('../../assets/images/result.png')
              : require('../../assets/images/looser.png')
          }
          style={styles.resultPhoto}
        />
      </View>
      <View style={styles.playerDetails}>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>
            {currentPlayerData[0].score}
          </Text>
          <Text style={styles.playerDetailsBlockSubHeading}>Your Score</Text>
        </View>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>
            {otherPlayerData[0].score}
          </Text>
          <Text style={styles.playerDetailsBlockSubHeading}>
            Other Player Score
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accmain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  winnerResultMessage: {
    marginTop: '5%',
    fontSize: 42,
    fontWeight: '600',
    color: 'green',
  },
  looserResultMessage: {
    marginTop: '5%',
    fontSize: 42,
    fontWeight: '600',
    color: 'red',
  },
  resultPhotoContainer: {
    marginTop: '15%',
    position: 'relative',
    position: 'relative',
  },
  resultPhoto: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  playerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: '10%',
    backgroundColor: 'yellow',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  playerDetailsBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerDetailsBlockHeading: {
    fontSize: 26,
    fontWeight: '600',
  },
  playerDetailsBlockSubHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  gameOver: {
    width: '100%',
  },
  gameOverImage: {
    resizeMode: 'contain',
    width: '100%',
  },
});

export default Result;
