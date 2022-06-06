import {Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {icons, SIZES} from '../constants';
import Search from '../screens/Search';
import Appointment from '../screens/Appointment';
import AppointmentList from '../screens/AppointmentList';
import Profile from '../screens/Profile';
import TabComponent from '../components/TabComponent';
import Payment from '../screens/Payment';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AppointmentList" component={AppointmentList} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        lazy: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          paddingHorizontal: 15,
          right: 0,
          height:
            Platform.OS === 'android' ? SIZES.font5 * 2.8 : SIZES.font5 * 3.2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Home'}
              focused={focused}
              icon={icons.homeIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Search'}
              focused={focused}
              icon={icons.searchIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'PaymentStack'}
        component={PaymentStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Appointment'}
              focused={focused}
              icon={icons.appointment}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Profile'}
              focused={focused}
              icon={icons.profileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
