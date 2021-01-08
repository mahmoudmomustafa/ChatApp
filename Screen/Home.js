import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthContext from '../components/Context/AuthContext';

import firebase from '../firebase';

export default function Home() {
  const userContext = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>This is Home Screen..</Text>
      <TouchableOpacity onPress={() => {
        firebase.auth().signOut().then(() => {
          userContext.signOut();
        })
      }}>
        <Text>Log out</Text>
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
