import Colors from "./Colors";

export default {
   span:{
      fontFamily:'Redressed_Regular',
      fontWeight : '400',
   },
   lightText:{
      fontWeight : '100',
      fontFamily:'Roboto_Thin'
   },
   mediumText:{
      fontWeight : '400',
      fontFamily:'Roboto_Regular'
   },
   BoldText:{
      fontWeight : '800',
      fontFamily:'Roboto_Black'
   },
   header:{
      fontSize:30,
      color:Colors.white
   },
   smallLink:{
      fontFamily:'Redressed_Regular',
      fontSize: 15,
      textDecorationLine: 'underline'
   },
   flexRow:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
   },
   selectInput: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      fontSize: 17,
      opacity: 0.9,
      borderRadius: 10,
      marginVertical: 10
   },
   errorText:{
      color: Colors.danger,
      marginHorizontal: 5,
      textTransform:'capitalize'
   }
}