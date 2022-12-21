import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const Login = () => {
  return (
    <View style={styles.container}>
    <Animatable.View animation='fadeInUpBig' style={styles.header}>
     <Text>hello header</Text>
    </Animatable.View>
    <ScrollView style={styles.footer}>
    <Animatable.View animation='fadeInUpBig' style={styles.footer}>
    <Text style={styles.text}>Full Name</Text>
     <View style={styles.action}>
     <TextInput  
     placeholder='Full Namel'
     style={styles.TextInput}
     
     />
     <Text style={styles.text}>Phone Number</Text>
     <TextInput  
     placeholder='Phone Number'
     style={styles.TextInput}
     
     />
     <Text style={styles.text}>street address</Text>
     <TextInput  mbe
     placeholder='street address'
     style={styles.TextInput}
     
     />
     <Text style={styles.text}>Email</Text>
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
    onPress={()=> Linking.openURL('www.google.com')}
    >
    Login
    </Text>
    </View>
     </View>
    </Animatable.View>

    </ScrollView>
    </View>
  )
}

export default Login

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
    height:'40%',
  },
  footer:{
    height:'60%',
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
   width:'100%',
  },
  text_header:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
  },
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
})