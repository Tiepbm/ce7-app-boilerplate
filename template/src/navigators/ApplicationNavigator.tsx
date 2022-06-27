import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from 'navigators/Root';
import {Colors} from 'theme';
import {readStoreData, saveStoreData} from 'utils/StorageUtils';
import StackNavigator from 'navigators/StackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Orientation from 'react-native-orientation';
import {PROFILE_KEY} from 'core/config';
const {Navigator, Screen} = createStackNavigator();

export const AuthContext = React.createContext({
  signIn: (_data: any) => {},
  profile: null,
});
const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
  },
};
const ApplicationNavigator = () => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':

        case 'SIGN_IN':
          saveStoreData(PROFILE_KEY, action.profile);
          return {
            ...prevState,
            profile: action.profile,
          };
        case 'SIGN_OUT':
          saveStoreData(PROFILE_KEY, null);
          return {
            ...prevState,
            profile: null,
          };
      }
    },
    {
      profile: null,
    },
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        dispatch({type: 'SIGN_IN', profile: data.profile});
      },
      signOut: () => {
        // CookieManager.clearAll().then(success => {
        //   console.log('CookieManager.clearAll =>', success);
        // });
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );
  const getProfile = async () => {
    let profile: any = await readStoreData(PROFILE_KEY);
    if (profile) {
      dispatch({type: 'SIGN_IN', profile: profile});
    }
  };
  React.useEffect(() => {
    Orientation.lockToPortrait();
    getProfile();
  }, []);
  return (
    <AuthContext.Provider value={{...state, ...authContext}}>
      <NavigationContainer ref={navigationRef} theme={MyDefaultTheme}>
        <Navigator screenOptions={{gestureEnabled: false, headerShown: false}}>
          <Screen name="Root" component={StackNavigator} />
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default ApplicationNavigator;
