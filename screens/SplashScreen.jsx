import { View, Text , StyleSheet, Image} from 'react-native';
import React from 'react';
import colours from '../config/colours';

const SplashScreen = () => {
  return (
    <View style={styles.wholeScreen}>
      <Image source={require("../assets/HotelIcon.png")}/>
      <Text style={styles.text}>Hotelyn</Text>
    </View>
      
  )
}
const styles = StyleSheet.create({
wholeScreen: {
  flex: 1,
  backgroundColor: colours.black,
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  

  },
  text:{
    color: colours.blue,
    fontSize:25,
    fontWeight:"700",
    marginLeft:15
  },
 
});
export default SplashScreen