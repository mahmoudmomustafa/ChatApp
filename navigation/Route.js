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
import firebase from '../firebase';
import UserReducer from "../hooks/UserReducer";

const Stack = createStackNavigator();

const Route = () => {
  const [state, dispatch] = useReducer(UserReducer, { isSignout: false, user: null });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem('userToken');
      authContext.signIn(userToken)
      getData
    };

    bootstrapAsync();
  }, []);

  const getData = React.useMemo(async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        dispatch({ type: 'RESTORE_USER', user: user.refreshToken })
        firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .get().then(doc => {
            authContext.setData(doc.data())
          });
      }
    });
  }, [state.userToken]);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', userToken: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      setData: async data => {
        dispatch({ type: 'SET_DATA', user: data });
      },
      getData: state.user
    }), [state]);

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          {
            state.userToken ? <HomeStack /> : <AuthStack />
          }
        </NavigationContainer>
      </SafeAreaProvider>
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
