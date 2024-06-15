import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colours from '../config/colours';

const WelcomeScreen = () => {
  return (
    <View style={styles.entireScreen}>
      <Image style={styles.image} source={require("../assets/HotelIcon.png")}/>
      <Text style={styles.text}>Welcome to Hotelyn </Text>
      <Text style={styles.subText}> If you are new here, please create your account first before booking the hotel.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginContainer}>
         <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  entireScreen:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colours.black,
    paddingTop:120
  },
  image:{
    width:90,
    height:92
  },
  text:{
    color:colours.white,
    fontSize:35,
    fontWeight:"700",
    marginTop:10
  },
  subText:{
    color:colours.lightModeWhite,
    marginTop:20,
    fontSize:20,
    fontStyle:"italic",
    fontWeight:"700"
  },
  button:{
    backgroundColor:colours.blue,
    padding:15,
    marginTop:90,
    borderRadius:20,
    height:"7%",
    width:"100%",
    alignItems:"center"
  },
  buttonText:{
    fontSize:25,
    color: colours.white,
    fontWeight:"700",
    textAlign:"center"
  },
  loginText:{
    color:colours.blue,
    fontSize:25
  },
  loginContainer:{
    marginTop:40,
  }
});
export default WelcomeScreen