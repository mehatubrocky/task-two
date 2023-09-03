import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deshboard from './deshboard';
import Settings from './settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notification from './notification';
import People from './people';
import Scan from './scan';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen
        name="Deshboard"
        component={Deshboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icon
               name="home"
               size={size}
               color={focused ? '#dd6b20' : '#ccc'}
            />
         ),

        }}
        
      />
       <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icon
               name="cog"
               size={size}
               color={focused ? '#dd6b20' : '#ccc'}
            />
         ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                position: 'relative',
                top: -20, 
                backgroundColor: '#222222', 
                width: size + 40, 
                height: size + 40, 
                borderRadius: 9999, 
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name="camera"
                size={size}
                color={ '#ccc'} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icon
               name="bell"
               size={size}
               color={focused ? '#dd6b20' : '#ccc'}
            />
         ),
        }}
      />
      
      <Tab.Screen
        name="People"
        component={People}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icon
               name="user-o"
               size={size}
               color={focused ? '#dd6b20' : '#ccc'}
            />
         ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
