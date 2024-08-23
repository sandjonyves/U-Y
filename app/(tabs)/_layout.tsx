import { SplashScreen, Stack, Tabs,Redirect } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {useFonts} from 'expo-font'
import { ColorValue, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import {icons} from '../../constants';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

type tabIcon={
  icon?:ImageSourcePropType,
  color?:ColorValue,
  name?:string,
  focused?:boolean
}

const TabsItem = ({icon,color,name,focused}:tabIcon) => {
  return (
    <View style={styles.TabsItem}>
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      style={styles.TabsIcon}
      />
      <Text style={[styles.TabsTitle,{color:color,fontFamily:`${focused ? 'Poppins-SemiBold' : 'Poppins-Regular'}`}]}>
         {name}
      </Text>
    </View>
  )
}


const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  
  return (
  <Tabs
  screenOptions={
    {
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#FFA001',
      tabBarInactiveTintColor:'#CDCDE0',
      tabBarStyle:{
        backgroundColor:'#161622',
        borderTopWidth:1,
        borderTopColor:'#232533', 
        height:84,
      }
    }
  }>
    <Tabs.Screen 
      name='home'
      options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.home}
          color={color}
          name='Home'
          focused={focused}
          />
        )
      }}
    />
    <Tabs.Screen 
      name='bookmark'
      options={{
        title:'Bookmark',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.bookmark}
          color={color}
          name='Bookmark'
          focused={focused}
          />
        )
      }}
    />
    <Tabs.Screen 
      name='create'
      options={{
        title:'Create',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.plus}
          color={color}
          name='Create'
          focused={focused}
          />
        )
      }}
    />
    <Tabs.Screen 
      name='profile'
      options={{
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.profile}
          color={color}
          name='Profile'
          focused={focused}
          />
        )
      }}
    />

  </Tabs>

  );
}

const styles = StyleSheet.create({
    TabsIcon:{
      width:30,
      height:30
    },
    TabsTitle:{
      fontSize:10,
      // lineHeight:1,
      // width:50
    },
    TabsItem:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:2
    }
    

})

// <Tabs
// screenOptions={{
//   tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//   headerShown: false,
// }}>
// <Tabs.Screen
//   name="index"
//   options={{
//     title: 'Home',
//     tabBarIcon: ({ color, focused }) => (
//       <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//     ),
//   }}
// />
// <Tabs.Screen
//   name="explore"
//   options={{
//     title: 'Explore',
//     tabBarIcon: ({ color, focused }) => (
//       <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//     ),
//   }}
// />
// </Tabs>