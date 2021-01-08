import "react-native-gesture-handler";
import React, { useEffect, useReducer } from "react";
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

const Stack = createStackNavigator();
const Route = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        console.log(data);
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        console.log(data);
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          state.userToken ? <HomeStack /> : <AuthStack />
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
