import React, { useRef } from 'react'
import { useEffect } from 'react';
import { Animated, TextInput, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
import Styles from '../../Constants/Styles';

const InputComponent = (props) => {
   const fadeAnim = useRef(new Animated.Value(1000)).current;

   useEffect(() => {
      Animated.spring(fadeAnim, {
         toValue: !props.errors ? 10 : 0,
         velocity: 2,
         tension: 2,
         friction: 8,
         useNativeDriver: true,
      }).start();
   }, [props.errors])

   return (
      <>
         <TextInput
            onChangeText={props.change}
            onBlur={props.blur}
            placeholder={props.placeholderText}
            value={props.inputValue}
            style={[styles.input, Styles.bookText]}
            secureTextEntry={props.secure ? props.secure : false}
            placeholderTextColor={Colors.white}
            multiline={props.textArea ? true : false}
            numberOfLines={props.textArea ? 5 : 1}
            textContentType={props.inputType}
            keyboardType={props.keyboard ? props.keyboard : 'default'}
         />
         {props.errors && (
            <Animated.Text style={[Styles.errorText, { transform: [{ translateY: fadeAnim }] }
            ]}>{props.errors}</Animated.Text>
         )}
      </>
   )
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      padding: 10,
      fontSize: 16,
      opacity: 0.9,
      borderRadius: 5,
      marginVertical: 10,
      color: Colors.white
   }
})

export default InputComponent;