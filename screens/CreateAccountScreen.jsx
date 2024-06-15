import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Constants from "expo-constants";
import colours from '../config/colours';


const CreateAccountScreen = () => {
  return (
    <View style={styles.entireScreen}>
    {/** Arrow Button */}
     <View style={styles.arrowContainer}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={35} color="white" />
        </TouchableOpacity>
     </View>
     {/** Welcome Text */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Welcome to Homelyn</Text>
      </View>
      {/** Subtitle Text */}
      <View style={styles.subTextContainer}>
         <Text style={styles.subText}>Let's create your account first!</Text>
      </View>
      {/** Form Section */}
      <View style={styles.formSection}>
      <Text style={{color:"#fff", fontSize:25}}>Full Name</Text>
      <View>
        <AntDesign name="user" size={24} color="white" />
          <TextInput
            placeholder='Enter your username'
            style={styles.nameInput}
            placeholderTextColor="#fffc"
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  entireScreen:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colours.black,
    flex:1
  },
  arrowContainer:{
    padding: 15,
  },
  headerTextContainer:{
    alignItems: 'center',
  },
  headerText:{
    color: colours.white,
    fontSize:40,
    fontWeight:"700",
    letterSpacing:1
  },
  subText:{
    color: colours.lightModeWhite,
    fontSize:25,
    fontWeight:"bold",
    fontStyle:"italic",
  },
  subTextContainer:{
    alignItems:"center",
    padding:30
  },
  nameInput:{
    borderColor:"#fff",
    height:60,
    width:"100%",
    borderWidth:1,
    borderRadius:15

  }
});
export default CreateAccountScreen
    
