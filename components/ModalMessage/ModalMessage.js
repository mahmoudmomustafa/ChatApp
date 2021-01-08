import React, { useEffect, useRef } from 'react'
import { Text, StyleSheet, Modal, Animated,Pressable } from 'react-native';
import Colors from '../../Constants/Colors';
import Styles from '../../Constants/Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ModalMessage = (props) => {
   const fadeAnim = useRef(new Animated.Value(100)).current;

   useEffect(() => {
      Animated.spring(fadeAnim, {
         toValue: !props.errors ? 10 : 0,
         velocity: 2,
         tension: 2,
         friction: 8,
         useNativeDriver: true,
      }).start();
   }, [props.text])

   return (
      <Modal
         animationType="fade"
         transparent={props.transparent}
         visible={props.modalState}
         onRequestClose={props.cancelClicked}>
         <Pressable style={styles.centeredView} onPress={props.cancelClicked}>
            <Animated.View style={{ transform: [{ translateY: fadeAnim }] }}>
               <Pressable style={styles.modalView}>
                  <MaterialCommunityIcons name="alert-circle-outline" size={40} color={Colors.danger} />
                  <Text textBreakStrategy='balanced' 
                  style={[styles.details, Styles.mediumText]}>{props.text}</Text>
               </Pressable>
            </Animated.View>
         </Pressable>
      </Modal>
   )
}

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#0009'
   },
   modalView: {
      margin: 10,
      backgroundColor: Colors.white,
      opacity:0.7,
      borderRadius: 3,
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center'
   },
   details: {
      fontSize: 17,
      color: Colors.dark,
      padding: 10
   }
})

export default ModalMessage;