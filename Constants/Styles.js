import Colors from "./Colors";

export default {
   lightText:{
      fontWeight : '100',
      fontFamily:'FuturaPTLight'
   },
   mediumText:{
      fontWeight : '500',
      fontFamily:'FuturaPTMedium'
   },
   BoldText:{
      fontWeight : '700',
      fontFamily:'FuturaPTBold'
   },
   header:{
      fontFamily:'FuturaPTDemi'
   },
   bookText:{
      fontFamily:'FuturaPTBook',
   },
   smallLink:{
      fontFamily:'FuturaPTBook',
      fontSize: 11,
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