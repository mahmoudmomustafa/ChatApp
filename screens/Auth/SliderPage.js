import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import FirstImageSlider from '../../components/Icons/FirstImageSlider';
import SecondImageSlider from '../../components/Icons/SecondImageSlider';
import ThirdImageSlider from '../../components/Icons/ThirdImageSlider';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const SliderPage = ({ navigation }) => {

   const handleNavigation = (route) => {
      navigation.replace(route)
   }

   return (
      <ScrollView style={styles.container}
         showsHorizontalScrollIndicator={false}
         pagingEnabled={true} horizontal>

         <View style={styles.sliderContainer}>
            <FirstImageSlider wdith={400} height={400} />
            <Text style={[Styles.span, Styles.header]}>Haaa !!</Text>
         </View>

         <View style={styles.sliderContainer}>
            <SecondImageSlider wdith={400} height={400} />
            <Text style={[Styles.span, Styles.header]}>Waait wait wait..</Text>
            <Text style={[Styles.span, Styles.header]}>Hi!</Text>
            <Text style={[Styles.span, Styles.header]}>Welcome To Chat app.</Text>
         </View>


         <View style={styles.sliderContainer}>
            <ThirdImageSlider wdith={400} height={400} />
            <Text style={[Styles.span, Styles.header, { marginBottom: 15 }]}>Ready to try it?!</Text>

            <ButtonComponent filled text="Sign Up"
               btnStyle={{ width: 150 }}
               handle={() => handleNavigation('SignUp')} />

            <ButtonComponent filled text="Sign In"
               btnStyle={{ width: 150 }}
               handle={() => handleNavigation('SignIn')} />

         </View>

      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.dark
   },
   sliderContainer: {
      flex: 1,
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      alignItems: 'center',
      justifyContent: 'center'
   }
});

export default SliderPage;