import Colors from "./Colors";

export default {
   lightText:{
      fontWeight : '100',
      fontFamily:'Mansalva_Regular'
   },
   mediumText:{
      fontWeight : '500',
      fontFamily:'Mansalva_Regular'
   },
   BoldText:{
      fontWeight : '800',
      fontFamily:'Mansalva_Regular'
   },
   header:{
      fontSize:30,
      color:Colors.white
   },
   smallLink:{
      fontFamily:'Mansalva_Regular',
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