import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Contacts" component={ContactScreen} />
    </Stack.Navigator>
  );
}