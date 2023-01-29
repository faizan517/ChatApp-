import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
      // height:70,
      // width: '100%',
      // backgroundColor:'white',
      flexDirection:'row',
      padding:5
  
    },
    image:{
      height:60,
      width:60,
      borderRadius:100
    },
    secondContainer:{
      flex:1,
      justifyContent:'center',
      opacity:1
    },
    thirdContainer:{
      // backgroundColor:'red',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    namefont:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:2
    },
    font:{
      fontSize:15,
      color:'gray'
      // marginLeft:5
    }
  });

  export default styles;