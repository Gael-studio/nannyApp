import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './Chat';
import Calender from './Calender';
import Home from './Home';
import AvailableNanny from './AvailableNanny';
import Tips from './Tips';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress})=>(
  <TouchableOpacity 
  onPress={onPress}
  style={{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
  }}
  >
  <View 
  style={{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#e32f45'
  }}
  >
    {children}
  </View>
  </TouchableOpacity>
)
const BottomTab = () => {
  return (
   <Tab.Navigator
   screenOptions={{
    tabBarShowLabel:false,
    tabBarStyle:{
      position:'absolute',
      bottom:25,
      left:20,
      right:20,
      backgroundcolor:'#ffffff',
      borderRadius:15,
      height:80,
      ...styles.shadow
    }
   }}
   >
    

   


    <Tab.Screen name='Home' component={Home}options={{
      tabBarIcon:({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('../assets/home.png')}
          resizeMode="contain"
          style={{
            width:25,
            height:25,
            tintColor:focused? '#e32f45' : '#748c94',
          }}
          />
          <Text style={{color:focused? '#e32f45' : '#748c94',fontSize:12}}>Home</Text>
        </View>
      )
    }} />




    <Tab.Screen name='AvailableNanny' component={AvailableNanny} options={{
      tabBarIcon:({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('../assets/nanny.png')}
          resizeMode="contain"
          style={{
            width:25,
            height:25,
            tintColor:focused? '#e32f45' : '#748c94',
          }}
          />
          <Text style={{color:focused? '#e32f45' : '#748c94',fontSize:12}}>Available</Text>
        </View>
      )
    }}/>

    <Tab.Screen name='Tip' component={Tips} 
    options={{
        tabBarIcon:({focused}) => (
          <Image 
          source={require('../assets/care.png')}
          resizeMode='contain'
          style={{
            width:30,
            height:30,
            tintColor:'#fff'
          }}
          />
        ),
      tabBarButton:(props) => (
        <CustomTabBarButton {...props}/>
      )
    }}/>


    <Tab.Screen name='Calender' component={Calender} options={{
      tabBarIcon:({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('../assets/calendar.png')}
          resizeMode="contain"
          style={{
            width:25,
            height:25,
            tintColor:focused? '#e32f45' : '#748c94',
          }}
          />
          <Text style={{color:focused? '#e32f45' : '#748c94',fontSize:12}}>Calender</Text>
        </View>
      )
    }}/>


    <Tab.Screen name='Chat' component={Chat}
    options={{
      tabBarIcon:({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('../assets/chat.png')}
          resizeMode="contain"
          style={{
            width:25,
            height:25,
            tintColor:focused? '#e32f45' : '#748c94',
          }}
          />
          <Text style={{color:focused? '#e32f45' : '#748c94',fontSize:12}}>Chat</Text>
        </View>
      )
    }}
    />

   </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7f5df0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
  }
})