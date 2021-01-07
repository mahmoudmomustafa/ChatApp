import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../../Petopia/constants/Colors';
import FirstImageSlider from '../../components/Icons/FirstImageSlider';
import SecondImageSlider from '../../components/Icons/SecondImageSlider';
import ThirdImageSlider from '../../components/Icons/ThirdImageSlider';

const SliderPage = ({ navigation }) => {
   return (
      <ScrollView style={styles.container} pagingEnabled>
         <View style={styles.sliderContainer}>
            <FirstImageSlider />
            <Text>Haaa !!</Text>
         </View>

         <View style={styles.sliderContainer}>
            <SecondImageSlider />
            <Text>Waait wait wait..</Text>
            <Text>Hi!</Text>
            <Text>Wlecome To Chat app.</Text>
         </View>


         <View style={styles.sliderContainer}>
            <ThirdImageSlider />
            <Text>Ready to try it?!</Text>
         </View>

      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
   },
   sliderContainer: {
      width: Dimensions.get('screen').width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   }
});

export default SliderPage;