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
      {/* <View style={styles.gameOver}>
        <Image
          source={require('../../assets/images/gameOver.png')}
          style={styles.gameOverImage}
        />
      </View> */}
      <Text style={styles.resultString}>RESULTS</Text>
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
              ? require('../../assets/images/champ.png')
              : require('../../assets/images/champ.png')
          }
          style={styles.resultPhoto}
        />
      </View>
      <View style={styles.playerDetails}>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.currentPlayerDetailsBlockHeading}>
            {currentPlayerData[0].score}
          </Text>
        </View>
        <View style={styles.playerDetailsBlockSeparator}>
          <Text style={styles.playerDetailsBlockHeading}>:</Text>
        </View>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>
            {otherPlayerData[0].score}
          </Text>
        </View>
        <View style={styles.playerDetailsBlockName}>
          <Text style={styles.scoreHeading}>FINAL SCORE</Text>
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
  },
  winnerResultMessage: {
    fontSize: 42,
    fontWeight: '600',
    color: 'green',
  },
  resultString: {
    paddingTop: '20%',
    fontSize: 22,
    fontWeight: '600',
    color: '#0420db',
  },
  looserResultMessage: {
    marginTop: '5%',
    fontSize: 42,
    fontWeight: '600',
    color: 'red',
  },
  resultPhotoContainer: {
    marginTop: '5%',
    position: 'relative',
    position: 'relative',
  },
  resultPhoto: {
    width: 300,
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
    alignItems: 'center',
    width: '80%',
    marginTop: '10%',
    backgroundColor: '#4e72f5',
    height: '15%',
    borderRadius: 10,
    position: 'relative',
  },
  playerDetailsBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0420db',
    borderRadius: 10,
    width: '30%',
    height: '50%',
  },
  playerDetailsBlockSeparator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  currentPlayerDetailsBlockHeading: {
    fontSize: 26,
    fontWeight: '600',
    color: 'yellow',
  },
  playerDetailsBlockHeading: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
  },
  playerDetailsBlockName: {
    position: 'absolute',
    height: '30%',
    width: '40%',
    backgroundColor: '#0420db',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: '-15%',
    left: '30%',
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
  scoreHeading: {
    color: 'white',
  },
});

export default Result;
