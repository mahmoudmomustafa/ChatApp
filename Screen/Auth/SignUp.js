import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Colors from '../../Constants/Colors';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from '../../Constants/Styles';
import SignUpImage from '../../components/Icons/SignUpImage';
import ModalMessage from '../../components/ModalMessage/ModalMessage';
import firebase from '../../firebase';
import AuthContext from '../../components/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterSchme = yup.object().shape({
   username: yup.string().min(4).required("Name is required"),
   email: yup.string().email('Email address is invalid.').required("Email Address is required"),
   password: yup.string().min(8).required("Password is required"),
   password_confirmation: yup.mixed().oneOf([yup.ref('password')], "Passwords don't match!").required('Confirm password is required'),
});

const SignUp = ({ navigation }) => {
   const userContext = useContext(AuthContext);
   const [toast, setToast] = useState(false)
   const [toastMsg, setToastMsg] = useState('')
   const [isSubmitting, setisSubmitting] = useState(false)

   const { control, handleSubmit, errors } = useForm({
      resolver: yupResolver(RegisterSchme)
   });

   const handelRegister = async (values) => {
      setisSubmitting(true)
      firebase.auth()
         .createUserWithEmailAndPassword(values.email, values.password)
         .then(user => {
            setisSubmitting(false)
            AsyncStorage.setItem('userToken', user.user.refreshToken)
            userContext.signIn(user.user.refreshToken);
            firebase.firestore().collection("users")
               .doc(user.user.uid)
               .set({ name: values.username, email: values.email });
         }).catch(error => {
            setisSubmitting(false)
            setToast(true)
            setToastMsg(error.message)
         });
   };

   return (
      <ScrollView style={styles.container}>
         <View style={{ padding: 16, justifyContent: 'space-evenly', height: Dimensions.get('screen').height - 42 }}>

            <View>
               <Text style={[{ fontSize: 35, color: Colors.white, paddingVertical: 5 }, Styles.BoldText]}>Create a new account.</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
               <SignUpImage />
            </View>

            <View>
               {/* name input */}
               <Controller
                  control={control}
                  name="username"
                  defaultValue=""
                  render={({ onChange, onBlur, value }) => (
                     <InputComponent
                        inputType="name"
                        placeholderText="Full name"
                        blur={onBlur}
                        change={value => onChange(value)}
                        inputValue={value}
                        errors={errors.username?.message}
                     />
                  )}
               />

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

               {/* confirm password input */}
               <Controller
                  control={control}
                  name="password_confirmation"
                  defaultValue=""
                  render={({ onChange, onBlur, value }) => (
                     <InputComponent
                        inputType="password"
                        placeholderText="Confirm Password"
                        change={value => onChange(value)}
                        blur={onBlur}
                        inputValue={value}
                        errors={errors.password_confirmation?.message}
                        secure={true}
                     />
                  )}
               />
            </View>

            <ButtonComponent filled
               btnStyle={{ paddingVertical: 15 }}
               text="Sign up" handle={handleSubmit(handelRegister)}
               submitLoading={isSubmitting} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
               <Text style={[{ color: Colors.white, margin: 5 }, Styles.lightText]}>
                  Already have an account?
                  </Text>
               <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('SignIn')}>
                  <Text style={[{ color: Colors.white, margin: 5 }, Styles.BoldText]}>Log In</Text>
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

export default SignUp
