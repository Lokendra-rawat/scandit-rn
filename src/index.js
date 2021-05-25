import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import MainTab from './MainTab';
import SplashScreen from './Splash';
import SignInScreen from './Signin';
import AuthContext from 'helpers/AuthContext';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useMemo(() => {
    async function checkUser() {
      let userData;
      try {
        userData = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      setUser(userData);
      setTimeout(() => {
        setLoading(false);
      }, 100)
    }
    checkUser();
  }, []);

  const signIn = (data) => {
    setUser(data);
  };

  const signOut = () => {
    setUser(null);
  };

  const Stack = createStackNavigator();

  const mainNav = () => (
    <Stack.Navigator headerMode="none">
      {loading ? (
        <Stack.Screen
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          name="Welcome"
          component={SplashScreen} />
      ) :
        <>
          <Stack.Screen
            options={{ ...TransitionPresets.SlideFromRightIOS }}
            name="Home"
            component={MainTab} />
        </>
      }
    </Stack.Navigator>
  );
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      <NavigationContainer>{mainNav()}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

{/* !user ? <>
        <Stack.Screen
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          name="SignIn"
          component={SignInScreen} />
      </> : */}