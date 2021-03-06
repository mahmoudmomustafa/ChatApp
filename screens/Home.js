import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../components/Context/AuthContext';
import firebase from '../firebase';
import Colors from '../constants/Colors';

export default function Home() {
  const userContext = useContext(AuthContext);
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(userContext.getData);
  }, [userContext.getData])

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.white, fontSize: 25 }}>Welcome {user?.name}</Text>
      <TouchableOpacity onPress={() => {
        firebase.auth().signOut().then(() => {
          AsyncStorage.removeItem('userToken')
          userContext.signOut();
        })
      }}>
        <Text style={{ color: Colors.white }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
