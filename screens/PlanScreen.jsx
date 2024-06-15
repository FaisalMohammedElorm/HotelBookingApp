import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import colours from '../config/colours';

const DiscoverScreen = () => {
  return (
    <View>
    <View>
      <Image style={styles.image} source={require("../assets/Plan.png")}/>
    </View>
    <View style={styles.textContainer}>
    {/** Heading Text */}
      <Text style={styles.text}>
        Make a Destination Plan
      </Text>
      {/** Subheading Text */}
      <Text style={styles.subText}> Choose the location and we have many hotel recommendations wherever you are </Text>
        <Image style={{alignSelf:"center", marginTop:25}} source={require("../assets/ThreeDots.png")}/>

      <TouchableOpacity style={styles.buttonContainer}>
      
        <Text style={styles.buttonText}>Continue</Text>
      
      </TouchableOpacity>
      <TouchableOpacity>      
          <View style={styles.skipTextContainer}>
              <Text style={styles.skipText}>
                Skip
              </Text>
          </View>
      </TouchableOpacity>

      
    
    </View>
    
    

   
    </View>
  )
}
      
const styles = StyleSheet.create({
  image:{
    height:550,
    width:"100%",
  },
  textContainer:{
    backgroundColor:colours.black,
    height:"100%",
  },
  text:{
    color:colours.white,
    fontSize:35,
    fontWeight:"600",
    marginTop:30,
    textAlign:"center"

  },
  subText:{
    color:colours.lightModeWhite,
    fontSize:20,
    fontStyle:"italic",
    marginTop:10,
    fontWeight:"400",
    marginLeft:30
  },
  buttonText:{
    color:colours.white,
    fontSize:30,
    fontWeight:"600",
    alignItems:"center",
    marginTop:5
  },
  buttonContainer:{
    marginTop:30,
    alignItems:"center",
    width:"100%",
    backgroundColor:colours.blue,
    alignItems:"center",
    borderRadius:70,
    height:50,
  },
  skipText:{
    color:colours.blue,
    fontSize:25
  },
  skipTextContainer:{
    alignItems:"center",
    paddingTop:40
   

  }
});
export default DiscoverScreen
    
    
    
    
    
  
    
   
