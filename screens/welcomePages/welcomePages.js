import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StyleSheet } from 'react-native';

import WelcomePage1 from './welcomePage1';
import WelcomePage2 from './welcomePage2';
import WelcomePage3 from './welcomePage3';
import BottomNav from '../../components/UI/bottomNav';
const WelcomePages = () => {
  const [screen, setScreen] = useState(0);
  const nextPageClickHandler = () => setScreen(screen + 1);
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
      {screen === 0 && <WelcomePage1 nextPageClickHandler={nextPageClickHandler}/>}
      {screen === 1 && <WelcomePage2 nextPageClickHandler={nextPageClickHandler}/>}
      {screen === 2 && <WelcomePage3 nextPageClickHandler={nextPageClickHandler}/>}
      {screen === 3 && <BottomNav />}
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