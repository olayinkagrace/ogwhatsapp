import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatusScreen from '../screens/StatusScreen';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import AdvertScreen from '../screens/AdvertScreen';
import { NativeStack } from './NativeStack';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export function TopTabNav() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'lightgrey',
      tabBarStyle: {backgroundColor: '#016064'},

    }}
    >
      <Tab.Screen name="Chat" component={NativeStack} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Call" component={CallScreen} />
      <Tab.Screen name="Advert" component={AdvertScreen} />
    </Tab.Navigator>
  );
}