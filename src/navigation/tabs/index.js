import { Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartNavigator from './../cart';
import OrdersNavigator from './../orders';
import ShopNavigator from './../shop';
import { styles } from './styles';
import { theme } from '../../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cartLength = useSelector((state) => state.cart.data).length;
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.fontFamily.regular,
          fontSize: 12,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.background,
        tabBarIconStyle: {
          fontSize: theme.fonts.fontSize.title,
        },
        tabBarStyle: {
          ...styles.tabBar,
        },
      }}>
      <Tab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => <Entypo name="shop" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size + 7} color={color} />,
          tabBarBadge: cartLength,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
            fontFamily: theme.fonts.fontFamily.bold,
            fontSize: theme.fonts.fontSize.text,
          },
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => <Entypo name="shopping-bag" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
