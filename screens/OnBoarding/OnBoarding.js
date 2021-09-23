import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// constants
import {theme} from '../constants';

// theme
const {COLORS, FONTS, SIZES} = theme;

const onBoardings = [
  {
    title: 'Welcome to AlphaZ',
    description: "India's best peer to peer gaming platform",
    img: require('../../assets/images/welcome1.png'),
  },
  {
    title: 'Introduction of Games',
    description:
      "India's first cricket derivatives trading platform. Buy and sell future contract of your favourite cricket team. Play Gaming quiz with real players for real money.",
    img: require('../../assets/images/welcome2.png'),
  },
  {
    title: 'Payments & Withdrawals',
    description:
      'Deposit and withdrawal your winning within few seconds with Paytm, UPI etc.',
    img: require('../../assets/images/welcome3.png'),
  },
];

const screenCount = index => {
  if (index === 2) {
    return true;
  } else return false;
};
const OnBoarding = ({navigation}) => {
  const scrollX = new Animated.Value(0);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}>
            <View
              style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="stretch"
                style={{
                  width: SIZES.width,
                  height: SIZES.height,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#1C39BB',
                width: '100%',
                height: '35%',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: 'white',
                  textAlign: 'center',
                  paddingTop: '5%',
                }}>
                {item.title}
              </Text>

              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: '#91b4ed',
                }}>
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: 'orange',
              }}
              onPress={() => index === 2 && navigation.navigate('TabNav')}>
              <Text style={{...FONTS.h3, color: COLORS.white}}>
                {screenCount(index) ? "Let's Play" : 'Swipe to Left ->'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotSize, height: dotSize}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '20%' : '16%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 6,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: 'orange',
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;
