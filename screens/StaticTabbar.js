import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
} from 'react-native';
let {width} = Dimensions.get('window');
// width = width
var prevIndex = 0;

export default class StaticTabbar extends React.PureComponent {
  constructor(props) {
    super(props);
    const {tabs} = this.props;
    this.values = tabs.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
    );
  }

  onPress = index => {
    if (prevIndex !== index) {
      const {value, tabs, containerWidth} = this.props;
      let customWidth = containerWidth ? containerWidth : width;
      const tabWidth = customWidth / tabs.length;

      Animated.sequence([
        Animated.parallel(
          this.values.map(v =>
            Animated.timing(v, {
              toValue: 0,
              duration: 50,
              useNativeDriver: true,
            }),
          ),
        ),
        Animated.timing(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
          bounciness: 2,
        }),
        Animated.parallel([
          Animated.spring(value, {
            toValue: tabWidth * index,
            useNativeDriver: true,
          }),
          Animated.spring(this.values[index], {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
      prevIndex = index;
    }
  };

  render() {
    const {onPress} = this;
    const {
      tabs,
      value,
      activeTabBackground,
      labelStyle,
      Hvalue,
      containerWidth,
      onTabChange,
    } = this.props;
    let customWidth = containerWidth ? containerWidth : width;
    let mergeLabelStyle = {...styles.labelStyle, ...labelStyle};
    let newActiveIcon = [
      styles.activeIcon,
      {backgroundColor: activeTabBackground ? activeTabBackground : '#fff'},
    ];
    return (
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const tabWidth = customWidth / tabs.length;
          const cursor = tabWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp',
          });

          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: 'clamp',
          });

          const opacity1 = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          });
          return (
            <React.Fragment {...{key}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  onPress(key, tab);
                  onTabChange && onTabChange(key);
                }}>
                <Animated.View style={[styles.tab, {opacity, zIndex: 100}]}>
                  {tab.inactiveIcon}
                  <Text style={mergeLabelStyle}>{tab.name}</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: 'absolute',
                  top: -8,
                  left: tabWidth * key,
                  width: tabWidth,
                  height: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: opacity1,
                  transform: [{translateY}],
                  zIndex: 50,
                }}>
                <View style={newActiveIcon}>{tab.activeIcon}</View>
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  activeIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
