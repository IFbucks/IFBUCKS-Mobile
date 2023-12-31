import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from 'react-native-vector-icons';


import CafeScreen from "../Cafe";
import BebidaScreen from "../Bebida";
import DocesScreen from "../Doces";
import SalgadosScreen from "../Salgados";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Café') {
            iconName = 'coffee-outline';
          } else if (route.name === 'Bebidas') {
            iconName = 'glass-cocktail';
          } else if (route.name === 'Doces') {
            iconName = 'cake-variant-outline';
          } else if (route.name === 'Salgados') {
            iconName = 'food-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fd0000',
        inactiveTintColor: '#004c03',
      }}
    >
      <Tab.Screen name="Café" component={CafeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Bebidas" component={BebidaScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Doces" component={DocesScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Salgados" component={SalgadosScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
