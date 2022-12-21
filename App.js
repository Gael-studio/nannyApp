import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import Home from './Components/Home';
import BottomTab from './Components/BottomTab';
import Chat2 from './Components/chat/Chat2';
import MassagesScreen from './Components/chat/chat1';
import { View } from 'react-native';


const App: () => Node = () => {

  return (
    <View>
    
    <NavigationContainer>
   
    <Stack.Navigator>
    <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
    <Stack.Screen
        name="signin"
        component={SignIn}
        options={{ title: 'signin' }}
      />
      <Stack.Screen
      name="Login"
      component={Login}
      options={{ title: 'Login' }}
    />
    
    
    </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
};


export default App;
