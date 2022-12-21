import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './styles'

const Massages =[
  {
    id:'1',
    userName:'gael',
    userImg:require('../img/na.png'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  },
  {
    id:'2',
    userName:'atirh',
    userImg:require('../img/1.jpg'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  },
  {
    id:'3',
    userName:'suh',
    userImg:require('../img/nany.jpg'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  }, 
  {
    id:'4',
    userName:'emma',
    userImg:require('../img/1.jpg'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  },
  {
    id:'5',
    userName:'pery',
    userImg:require('../img/nany.jpg'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  },
  {
    id:'6',
    userName:'ken',
    userImg:require('../img/1.jpg'),
    massageTime:'4min ago',
    massageText:'hello gael how are u doing',
  },
]

const MassagesScreen =({navigation}) =>{
  return(
    <View style={style.Container}>
    <FlatList 
    data={Massages}
    keyExtractor={item=>item.id}
    renderItem={({item}) =>(
      <TouchableOpacity style={style.card} 
      onPress={()=>navigation.navigate('chat2')}>
        <View style={style.userInfo}>
          <View style={style.imgwrapper}>
          <Image 
          style={style.UserImg}
          source={item.userImg} />
          </View>
        <View style={style.TextSection}>
          <View style={style.UserInfoText}>
            <Text style={style.UserName}> {item.userName}</Text>
            <Text style={style.PostTime}> {item.massageTime}</Text>
          </View>
          <Text style={style.MessageText}> {item.massageText}</Text>
        </View>
          </View>
        </TouchableOpacity>
    )}
    />
    </View>
  )
}
export default MassagesScreen