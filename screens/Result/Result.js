import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Result = props => {
  const navigation = useNavigation();
  const {playerId, resultData} = props;
  const currentPlayerData =
    resultData && resultData.filter(data => data.player_id === playerId);
  const otherPlayerData =
    resultData && resultData.filter(data => data.player_id !== playerId);
  const currentPlayerResult =
    currentPlayerData &&
    currentPlayerData.length > 0 &&
    currentPlayerData[0].result;

  <View style={styles.accmain}>
    return props.resultData && props.resultData[0] && props.resultData[0].result
    ? (
    <ImageBackground
      source={require('../../assets/images/stars.png')}
      style={styles.image}>
      <View style={styles.resultPhotoContainer}>
        <Image
          source={
            currentPlayerResult === 'WINNER'
              ? require('../../assets/images/youWon.png')
              : require('../../assets/images/looser1.png')
          }
          style={styles.resultPhoto}
        />
      </View>
      <View style={styles.playerDetails}>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.currentPlayerDetailsBlockHeading}>
            {currentPlayerData &&
              currentPlayerData.length > 0 &&
              currentPlayerData[0].score}
          </Text>
        </View>
        <View style={styles.playerDetailsBlockSeparator}>
          <Text style={styles.playerDetailsBlockHeading}>:</Text>
        </View>
        <View style={styles.playerDetailsBlock}>
          <Text style={styles.playerDetailsBlockHeading}>
            {otherPlayerData &&
              currentPlayerData.length > 0 &&
              otherPlayerData[0].score}
          </Text>
        </View>
        <View style={styles.playerDetailsBlockName}>
          <Text style={styles.scoreHeading}>FINAL SCORE</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('TabNav')}>
        <Text style={styles.actionButtonTxt}>Play Again</Text>
      </TouchableOpacity>
    </ImageBackground>{' '}
    ) : (
    <Text style={styles.heading}>
      Please wait while the other user responds
    </Text>
    );
  </View>;
};

const styles = StyleSheet.create({
  accmain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  actionButton: {
    marginTop: '5%',
    width: '90%',
    height: 50,
    backgroundColor: '#1C39BB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  actionButtonTxt: {
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    width: '100%',
  },
  resultPhotoContainer: {
    position: 'relative',
  },
  resultPhoto: {
    width: 300,
    height: 350,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: 'white',
  },
  playerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#4e72f5',
    height: '15%',
    borderRadius: 10,
    position: 'relative',
    marginTop: '10%',
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
    backgroundColor: 'orange',
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
  scoreHeading: {
    color: 'white',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    color: 'blue',
  },
});

export default Result;
