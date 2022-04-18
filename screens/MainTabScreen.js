import 'react-native-gesture-handler';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NotifiScreen from './NotifiScreen';
import SettingScreen from './SettingScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotifiStack = createStackNavigator();
const SettingStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
            )
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
            )
            }}
        />
        <Tab.Screen
            name="Notify"
            component={NotifiStackScreen}
            options={{
            tabBarLabel: 'Notify',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-mail" color={color} size={26} />
            )
            }}
        />
        <Tab.Screen
            name="Setting"
            component={SettingStackScreen}
            options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
            )
            }}
        />
        </Tab.Navigator>
)


export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Welcome Here',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#009387" 
            onPress={() => { navigation.openDrawer() }} />
        )
        }} />
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        title: 'My Profile',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#009387" 
            onPress={() => { navigation.openDrawer() }} />
        )
        }} />
    </ProfileStack.Navigator>
);
  
const NotifiStackScreen = ({navigation}) => (
    <NotifiStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <NotifiStack.Screen name="Notify" component={NotifiScreen} options={{
        title: 'Notification',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#009387" 
            onPress={() => { navigation.openDrawer() }} />
        )
        }} />
    </NotifiStack.Navigator>
);



const SettingStackScreen = ({navigation}) => (
    <SettingStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SettingStack.Screen name="Setting" component={SettingScreen} options={{
        title: 'Settings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#009387" 
            onPress={() => { navigation.openDrawer() }} />
        )
        }} />
    </SettingStack.Navigator>
);

