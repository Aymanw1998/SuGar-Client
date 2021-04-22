import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import NewAccountPage from './NewAccountPage';
const RootStack = createStackNavigator();

const RootStackPage = ({navigation})=>{
   return(
   <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name = "Login" component= {LoginPage}/>
        <RootStack.Screen name = "NewAccount" component= {NewAccountPage}/>
        <RootStack.Screen name = "Main" component= {MainPage}/>
    </RootStack.Navigator>
   );
}

export default RootStackPage;