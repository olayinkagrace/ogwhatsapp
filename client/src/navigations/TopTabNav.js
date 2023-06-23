import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatusScreen from "../screens/StatusScreen";
import CallScreen from "../screens/CallScreen";
import AdvertScreen from "../screens/AdvertScreen";
import { NativeStack } from "./NativeStack";
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function TopTabNav() {
  return (
    <Tab.Navigator
      initialRouteName='Chat'
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgrey",
        tabBarStyle: { backgroundColor: "#016064" },
      }}
    >
      <Tab.Screen
        name='Advert'
        component={AdvertScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='google-spreadsheet'
              color={focused ? "white" : "lightgrey"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Chat'
        component={NativeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name='message-circle'
              color={focused ? "white" : "lightgrey"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Status'
        component={StatusScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Zocial
              name='statusnet'
              color={focused ? "white" : "lightgrey"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Call'
        component={CallScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name='phone-call'
              color={focused ? "white" : "lightgrey"}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
