// import { SplashScreen, Stack, Tabs,Redirect } from 'expo-router';
import React, { useEffect } from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import {useFonts} from 'expo-font'
import { ColorValue, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import Restaurant from './Restaurant';
import Create from './create';
import {icons} from '../../constants';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Study from './Study';
import Setting from './Settings';


type tabIcon={
  icon?:ImageSourcePropType,
  color?:ColorValue,
  name?:string,
  focused?:boolean
}

const tab = createMaterialTopTabNavigator()

const TabsItem = ({icon,color,name,focused}:tabIcon) => {
  return (
    <View style={styles.TabsItem}>
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      style={styles.TabsIcon}
      />
      <Text style={[styles.TabsTitle,{color:color,fontFamily:`${ 'sans-serif'}`}]}>
         {name}
      </Text>
    </View>
  )
}


const Tab = createBottomTabNavigator()

export default function TabLayout() {
  
  return (
    <Tab.Navigator
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

<Tab.Screen name='Study'
      component={Study} 
      options={{
        // title:'Restaurant',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.studying}
          color={color}
          name='Study'
          focused={focused}
      />)}}
      ></Tab.Screen>

    <Tab.Screen name='Restaurant'
      component={Restaurant} 
      options={{
        // title:'Restaurant',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.restaurant}
          color={color}
          name='Restaurant'
          focused={focused}
      />)}}
      ></Tab.Screen>
 
 <Tab.Screen name='Setting'
      component={Setting} 
      options={{
        // title:'Restaurant',
        headerShown:false,
        tabBarIcon:({color,focused}:tabIcon)=>(
          <TabsItem
          icon={icons.setting}
          color={color}
          name='Setting'
          focused={focused}
      />)}}
      ></Tab.Screen>

  </Tab.Navigator>
  // <Tabs
  // screenOptions={
  //   {
  //     tabBarShowLabel:false,
  //     tabBarActiveTintColor:'#FFA001',
  //     tabBarInactiveTintColor:'#CDCDE0',
  //     tabBarStyle:{
  //       backgroundColor:'#161622',
  //       borderTopWidth:1,
  //       borderTopColor:'#232533', 
  //       height:84,
  //     }
  //   }
  // }>
  //   <Tabs.Screen 
  //     name='Restaurant'
  //     options={{
  //       title:'Restaurant',
  //       headerShown:false,
  //       tabBarIcon:({color,focused}:tabIcon)=>(
  //         <TabsItem
  //         icon={icons.Restaurant}
  //         color={color}
  //         name='Restaurant'
  //         focused={focused}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen 
  //     name='bookmark'
  //     options={{
  //       title:'Bookmark',
  //       headerShown:false,
  //       tabBarIcon:({color,focused}:tabIcon)=>(
  //         <TabsItem
  //         icon={icons.bookmark}
  //         color={color}
  //         name='Bookmark'
  //         focused={focused}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen 
  //     name='create'
  //     options={{
  //       title:'Create',
  //       headerShown:false,
  //       tabBarIcon:({color,focused}:tabIcon)=>(
  //         <TabsItem
  //         icon={icons.plus}
  //         color={color}
  //         name='Create'
  //         focused={focused}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen 
  //     name='profile'
  //     options={{
  //       title:'Profile',
  //       headerShown:false,
  //       tabBarIcon:({color,focused}:tabIcon)=>(
  //         <TabsItem
  //         icon={icons.profile}
  //         color={color}
  //         name='Profile'
  //         focused={focused}
  //         />
  //       )
  //     }}
  //   />

  // </Tabs>

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
//     title: 'Restaurant',
//     tabBarIcon: ({ color, focused }) => (
//       <TabBarIcon name={focused ? 'Restaurant' : 'Restaurant-outline'} color={color} />
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