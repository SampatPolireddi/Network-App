import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Fontisto } from "@expo/vector-icons";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
//import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, RootTabParamList, RootTabScreenProps, TabOneParamList, TabTwoParamList } from '../types';
import { Pressable, YellowBox } from 'react-native';
import TabOneScreen from '../screens/TabOneScreen';


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

 export default function MainTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <MainTab.Navigator
       initialRouteName="Chats" //home screen
       
       //Styling the top bar which displays 'Chats' and 'Contacts'
       screenOptions={{
        
        //'colorScheme' makes it easier when user switches to light or dark mode
        //So the app will follow the default color scheme set for a theme
         tabBarActiveTintColor: Colors[colorScheme].text,

         tabBarStyle:{
           background: Colors[colorScheme].tint,
         },
         
         tabBarIndicatorStyle:{
           backgroundColor: 'black', //Colors[colorScheme].background
           height:3,
         },
         tabBarLabelStyle:{
            fontWeight:'bold',
         }

       }}
       >
       <MainTab.Screen
         name="Chats"
         component={TabOneScreen}
         options={{
           title:'Chats'
         }}
       />
       <MainTab.Screen
         name="Contacts"
         component={TabTwoScreen}
         options={{
           title: 'Contacts',
         }}
       />
     </MainTab.Navigator>
   );
 }
 
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }