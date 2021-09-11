import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StyleSheet } from 'react-native';

import WelcomePage1 from './welcomePage1';
import WelcomePage2 from './welcomePage2';
import WelcomePage3 from './welcomePage3';

const WelcomePages = () => {
  const [screen, setScreen] = useState(0);

  const onSwipeLeft = () => {
    if (screen == 2) {
      setScreen(2);
    } else {
      setScreen(prevState => prevState + 1)
    }
  }

  const onSwipeRight = () => {
    if (screen == 0) {
      setScreen(0);
    } else {
      setScreen(prevState => prevState - 1)
    }
  }


  return (
    <GestureRecognizer
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}
      style={styles.gestContainer}>
      {screen === 0 && <WelcomePage1 />}
      {screen === 1 && <WelcomePage2 />}
      {screen === 2 && <WelcomePage3 />}
    </GestureRecognizer>
  );

}
const styles = StyleSheet.create({
  gestContainer: {
    width: '100%',
    height: '100%',
  },
});

export default WelcomePages