import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import DashboardContainer from '../../screens/Dashboard/DashboardContainer';
import Tabbar from './TabBar';
import MyAccountContainer from '../../screens/MyAccount/MyAccountContainer';
import ResultContainer from '../../screens/Result/ResultContainer';

const tabData = [
  {
    key: 1,
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color="#fff" size={25} />,
  },
  {
    key: 2,
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#fff" size={25} />,
  },
  {
    key: 3,
    activeIcon: <Icon name="comment" color="#fff" size={25} />,
    inactiveIcon: <Icon name="comment" color="#fff" size={25} />,
  },
  {
    key: 4,
    activeIcon: <Icon name="bell" color="#fff" size={25} />,
    inactiveIcon: <Icon name="bell" color="#fff" size={25} />,
  },
  {
    key: 5,
    activeIcon: <Icon name="user" color="#fff" size={25} />,
    inactiveIcon: <Icon name="user" color="#fff" size={25} />,
  },
];

const TabNav = () => {
  const [tabs, setTabs] = useState(tabData);
  const [screen, setScreen] = useState(0);

  const onTabChange = key => {
    let tempTabs = [...tabs];
    setTimeout(() => {
      tempTabs.map(() => {
        if (key === 0) {
          setScreen(0);
        } else if (key === 1) {
          setScreen(1);
        } else if (key === 2) {
          setScreen(2);
        } else if (key === 3) {
          setScreen(3);
        } else if (key === 4) {
          setScreen(4);
        } else {
          return null;
        }
      });
      setTabs(tempTabs);
    }, 100);
  };

  return (
    <View style={[styles.container]}>
      {screen === 0 && <DashboardContainer />}
      {screen === 1 && <Text>Cricket Trading!</Text>}
      {screen === 2 && <Text>Cricket Stats!</Text>}
      {screen === 3 && <Text>Notifications!</Text>}
      {screen === 4 && <MyAccountContainer />}
      <Tabbar
        tabs={tabs}
        onTabChange={item => onTabChange(item)}
        tabBarContainerBackground="#2a1bfa"
        tabBarBackground="#FFFFFF"
        activeTabBackground="#2a1bfa"
      />
    </View>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
