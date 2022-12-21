import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MassagesScreen from './chat/chat1';
import Chat2 from './chat/Chat2';

const Stack = createNativeStackNavigator();

const Chat = () => {
  return (
    <View>
      <MassagesScreen/>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})