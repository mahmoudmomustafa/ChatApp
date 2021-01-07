import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
import Styles from '../../Constants/Styles';

const InputComponent = (props) => {
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
            <Text style={Styles.errorText}>{props.errors}</Text>
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
      color:Colors.white
   }
})

export default InputComponent;