import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import FirstImageSlider from '../../components/Icons/FirstImageSlider';
import SecondImageSlider from '../../components/Icons/SecondImageSlider';
import ThirdImageSlider from '../../components/Icons/ThirdImageSlider';
import Colors from '../../Constants/Colors';
import Styles from '../../Constants/Styles';

const SliderPage = ({ navigation }) => {
   return (
      <ScrollView style={styles.container}
         showsHorizontalScrollIndicator={false}
         pagingEnabled={true} horizontal>

         <View style={styles.sliderContainer}>
            <FirstImageSlider wdith={500} height={500} />
            <Text style={[Styles.mediumText, Styles.header]}>Haaa !!</Text>
         </View>

         <View style={styles.sliderContainer}>
            <SecondImageSlider wdith={500} height={500} />
            <Text style={[Styles.mediumText, Styles.header]}>Waait wait wait..</Text>
            <Text style={[Styles.mediumText, Styles.header]}>Hi!</Text>
            <Text style={[Styles.mediumText, Styles.header]}>Welcome To Chat app.</Text>
         </View>


         <View style={styles.sliderContainer}>
            <ThirdImageSlider wdith={500} height={500} />
            <Text style={[Styles.mediumText, Styles.header]}>Ready to try it?!</Text>
            <View style={[Styles.flexRow,{marginTop:10}]}>
               <TouchableHighlight 
               underlayColor={Colors.borderColor}
               style={{backgroundColor:'#3d3d3d',borderRadius:15,padding:15,margin:5}}>
                  <Text style={[{color:Colors.white,fontSize:16},Styles.lightText]}>Sign up</Text>
               </TouchableHighlight>
               <TouchableHighlight 
               underlayColor={Colors.borderColor}
               style={{backgroundColor:'#3d3d3d',borderRadius:15,padding:15,margin:5}}>
                  <Text style={[{color:Colors.white,fontSize:16},Styles.lightText]}>Sign in</Text>
               </TouchableHighlight>
            </View>
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