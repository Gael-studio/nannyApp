import { Image,Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const Welcome = ({navigation}) => {
   
  return (
    <View style={styles.container}>
        <View style={styles.headre}>
            <Animatable.Image
            animation='bounceIn'
            style={styles.logo}
            source={require('./img/nany.jpg')}
            resizeMode='contain'
            />
        </View>
        <Animatable.View
        animation='fadeInUpBig'
        style={styles.footer}>
        <Text style={styles.title}>Stay Connected With Your Nanny</Text>
        <Text style={styles.text}>Sign In Wit Your Account</Text>
        <View style={styles.button}>
            <TouchableOpacity
            style={styles.touch}
            onPress={()=>navigation.navigate('signin')}
            >
                <Text>presss</Text>
            </TouchableOpacity>
        </View>
        </Animatable.View>
    </View>
  )
}

export default Welcome
const {height} = Dimensions.get('screen')
const height_logo = height *0.28;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#009287',
        width:'100%',  
        height:'100%',
        left:1,
    },
    headre:{
       height:'60%',
    },
    footer:{
        height:'40%',
        backgroundColor:'#fff',
        borderTopEndRadius:40,
        borderTopLeftRadius:40,
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        padding:10,
        top:10,
    
    },
    text:{
        top:10,
    },
    touch:{
        backgroundColor:'#009287',
        padding:7,
        width:30,
        textAlign:'center',
        width:'35%',
        borderRadius:80,
        left:'60%',
        top:'90%',
        
    },
    btn:{
        textAlign:'center',
        fontSize:20,
    },
    logo:{
        width:height_logo,
        height:height_logo,
    },
})