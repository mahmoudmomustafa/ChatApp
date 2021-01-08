import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthContext from '../components/Context/AuthContext';
import Colors from '../Constants/Colors';
import firebase from '../firebase';

export default function Home() {
  const userContext = useContext(AuthContext);
  const [user, setUser] = useState({})

  useEffect(() => {
    firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get().then(doc => {
        userContext.setData(doc.data())
        setUser(doc.data())
      });

  }, [])

  return (
    <View style={styles.container}>
      <Text style={{color:Colors.white,fontSize:25}}>Welcome {user.name}</Text>
      <TouchableOpacity onPress={() => {
        firebase.auth().signOut().then(() => {
          userContext.signOut();
        })
      }}>
        <Text style={{color:Colors.white}}>Log out</Text>
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
