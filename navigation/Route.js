import "react-native-gesture-handler";
import React, { useContext, useEffect, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../Screen/Home";
import SliderPage from "../Screen/Auth/SliderPage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from "../components/Context/AuthContext";
import SignUp from "../Screen/Auth/SignUp";
import SignIn from "../Screen/Auth/SignIn";
import Colors from "../Constants/Colors";
import firebase from '../firebase';

const Stack = createStackNavigator();
const Route = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USER':
          return {
            ...prevState,
            user: action.user,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isSignout: false,
      user: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user != null) {
          dispatch({ type: 'RESTORE_USER', user: user })
        }
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', user: data.user });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' })
    }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          state.user ? <HomeStack /> : <AuthStack />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen name="Sliders" component={SliderPage} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
export default Route;
