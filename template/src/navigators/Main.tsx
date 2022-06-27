import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'containers/HomeScreen';
import SettingScreen from 'containers/SettingScreen';
import NotificationScreen from 'containers/NotificationScreen';
import AccountScreen from 'containers/AccountScreen';
import MyTabBar from 'components/MyTabBar';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
export default Main;
