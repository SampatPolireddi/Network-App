import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
 
//My imports
import { Feather } from '@expo/vector-icons';  //Search icon 
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Horizonatal dots
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainTabNavigator from './MainTabNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: "white",
            shadowOpacity:0,
            elevation:0,
        },
      
      headerTintColor:"black",
      headerTitleAlign:"left",
      headerShadowVisible: false, // applied here
      headerBackTitleVisible: false,
      
      headerTitleStyle:{
        fontWeight:"bold",
        fontSize:20,
      
      },
      
      
    }}>
      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator}
      
      options={{
          title:"Network",
          //setting some properties for right part of the header
          headerRight: () => ( 
            <View style={{marginRight:3, flexDirection:'row', justifyContent:'space-between'} }> 
            <Feather name="search" size={24} color="black" />                           
            <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
            //adding search and 3-vertical dots in header 
          ),

          //setting some properties for left part of the header
          headerLeft: () =>(
            <View style={{marginLeft:3}}>

            </View>

          )
      }} 
      />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}




