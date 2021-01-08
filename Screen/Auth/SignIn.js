import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Colors from '../../Constants/Colors';
// import AsyncStorage from '@react-native-community/async-storage';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from '../../Constants/Styles';
import SignInImage from '../../components/Icons/SignInImage';
import firebase from '../../firebase';
import ModalMessage from '../../components/ModalMessage/ModalMessage';

const RegisterSchme = yup.object().shape({
   email: yup.string().email('Email address is invalid.').required("Email Address is required"),
   password: yup.string().min(8).required("Password is required"),
});

const SignIn = ({ navigation }) => {
   const [toast, setToast] = useState(false)
   const [toastMsg, setToastMsg] = useState('')

   const { control, handleSubmit, errors, isSubmitting } = useForm({
      resolver: yupResolver(RegisterSchme)
   });

   const handelLogin = async (values) => {
      firebase.auth()
         .signInWithEmailAndPassword(values.email, values.password)
         .then(user => {
            console.log(user);
         }).catch(error => {
            setToast(true)
            setToastMsg(error.message)
         });
   };

   return (
      <ScrollView style={styles.container}>
         <View style={{ padding: 16, justifyContent: 'space-evenly', height: Dimensions.get('screen').height - 42 }}>

            <View>
               <Text style={[{ fontSize: 35, color: Colors.white, paddingVertical: 5 }, Styles.BoldText]}>Let's sign you in.</Text>
               <Text style={[{ fontSize: 25, color: Colors.white, paddingVertical: 5 }, Styles.mediumText]}>Welcome back</Text>
               <Text style={[{ fontSize: 25, color: Colors.white, paddingVertical: 5 }, Styles.mediumText]}>You 've been missed!</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
               <SignInImage />
            </View>

            <View>
               {/* email input */}
               <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ onChange, onBlur, value }) => (
                     <InputComponent
                        inputType="emailAddress"
                        keyboard="email-address"
                        placeholderText="Email address"
                        change={value => onChange(value)}
                        blur={onBlur}
                        inputValue={value}
                        errors={errors.email?.message}
                     />
                  )}
               />
               {/* password input */}
               <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  render={({ onChange, onBlur, value }) => (
                     <InputComponent
                        inputType="password"
                        placeholderText="Password"
                        change={value => onChange(value)}
                        blur={onBlur}
                        inputValue={value}
                        errors={errors.password?.message}
                        secure={true}
                     />
                  )}
               />
            </View>

            <ButtonComponent filled
               btnStyle={{ paddingVertical: 13 }}
               text="Sign in" handle={handleSubmit(handelLogin)}
               submitLoading={isSubmitting} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
               <Text style={[{ color: Colors.white, margin: 5 }, Styles.lightText]}>
                  New member ?
               </Text>
               <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('SignUp')}>
                  <Text style={[{ color: Colors.white, margin: 5 }, Styles.mediumText]}>Sign Up</Text>
               </TouchableOpacity>
            </View>
         </View>
         {toast && (<ModalMessage text={toastMsg}
            transparent modalState={toast}
            cancelClicked={() => setToast(false)} />)}
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.dark,
      paddingVertical: 10
   }
})

export default SignIn
