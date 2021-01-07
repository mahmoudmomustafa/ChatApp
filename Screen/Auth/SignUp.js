import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Colors from '../../Constants/Colors';
// import { MassageTostar } from '../../components/Toaster';
// import AsyncStorage from '@react-native-community/async-storage';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from '../../Constants/Styles';
import { Octicons } from '@expo/vector-icons';
import SignUpImage from '../../components/Icons/SignUpImage';
const RegisterSchme = yup.object().shape({
   username: yup.string().min(4).required("username is required"),
   email: yup.string().email('Email address is invalid.').required("Email Address is required"),
   password: yup.string().min(8).required("Password is required"),
   password_confirmation: yup.mixed().oneOf([yup.ref('password')], "Passwords don't match!").required('Confirm password is required'),
});

const SignUp = ({ navigation }) => {
   const [toast, setToast] = useState(false)
   const [toastMsg, setToastMsg] = useState('')

   const { register, control, handleSubmit, errors, isSubmitting } = useForm({
      resolver: yupResolver(RegisterSchme)
   });

   const handelRegister = async (values) => {
      console.log(values);
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
                        placeholderText="UserName"
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
               <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.replace('SignIn')}>
                  <Text style={[{ color: Colors.white, margin: 5 }, Styles.BoldText]}>Log In</Text>
               </TouchableOpacity>
            </View>
         </View>
         {/* {toast && (<MassageTostar text={toastMsg} />)} */}
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
