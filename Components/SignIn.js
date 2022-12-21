import { Linking, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import react from 'react';


const SignIn = ({navigation}) => {
  const [text, onChangeText] = react.useState('hello react')
  return (
    <View style={styles.container}>
    <Animatable.View animation='fadeInUpBig' style={styles.header}>
     <Text>hello header</Text>
    </Animatable.View>
    <Animatable.View animation='fadeInUpBig' style={styles.footer}>
     <Text style={styles.text}>email</Text>
     <View style={styles.action}>
     <TextInput  
     placeholder='enter your email'
     style={styles.TextInput}
     
     />
     <Text style={styles.text}>password</Text>
     <TextInput  
     placeholder='enetr your password'
     style={styles.TextInput}
     />
  <View style={{alignItems:'center', padding:10}}>
    <Text style={{padding:5,}}> OR</Text>
    <Text style={{color:'blue'}} 
    onPress={()=> navigation.navigate('Login')}
    >
    SignUp
    </Text>
    </View>
     </View>
    </Animatable.View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#009287',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
  },
  header:{ 
    justifyContent:'flex-start',
    paddingHorizontal:20,
    paddingBottom:50,
    height:'50%',
  },
  footer:{
    height:'50%',
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
   width:'100%',
  },
  // text{
  //   color:'#fff',
  //   fontWeight:'bold',
  //   fontSize:30,
  // },
  TextInput:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    color:'#05375a',
    borderRadius:10,
  },
  text:{
    marginLeft:20,
    fontSize:20,
   
  }
  // action:{
  //   flexDirection:'row',
  //   marginTop:10,
  //   borderBottomWidth:1,
  //   borderBottomColor:'#f2f2f2',
  //   paddingBottom:5,
  // },
  // text_footer:{
  //   color:'#05375a',
  //   fontSize:18,
  // },
  // button:{
  //   alignItems:'center',
  //   marginTop:50,
  // }
})