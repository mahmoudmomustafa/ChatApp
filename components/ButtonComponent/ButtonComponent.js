import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from '../../Constants/Colors';
import Styles from '../../Constants/Styles';

const ButtonComponent = (props) => {
   const btnBgColor = props.filled ? '#3d3d3d' : 'transparent'
   const btnTextColor = props.filled ? Colors.white : '#3d3d3d'
   const normalBtn = props.normal ? 'left' : 'center'
   const transformText = props.normal ? 'capitalize' : 'uppercase'
   const borderWidth = props.normal ? 1 : 0

   const Btn = {
      backgroundColor: btnBgColor,
      padding: 5,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
      borderBottomWidth: borderWidth,
      borderColor: Colors.borderColor
   }
   const btnText = {
      textAlign: normalBtn,
      fontSize: 22,
      color: btnTextColor,
      textTransform: transformText
   }
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         onPress={props.handle} style={[Btn, props.btnStyle]}>
         {
            props.submitLoading ? (
               <ActivityIndicator size="small" color={btnTextColor} style={btnText} />
            )
               : (
                  <Text style={[btnText, Styles.mediumText, props.textStyle ? props.textStyle : null]}>{props.text}</Text>
               )
         }
      </TouchableOpacity >
   )
}

export default ButtonComponent;