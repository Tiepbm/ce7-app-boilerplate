import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Main from 'navigators/Main';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      {/*<Stack.Screen name="SplashScreen" component={SplashScreen} />*/}
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
