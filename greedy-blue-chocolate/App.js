import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from './HelpScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import MessageDetailScreen from './MessageDetailScreen';
import HelpMessagesScreen from './HelpMessagesScreen';
import SocialConnectionsScreen from './SocialConnectionsScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Help">
          <Stack.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="HelpMessages" component={HelpMessagesScreen} />
          <Stack.Screen name="MessageDetail" component={MessageDetailScreen} />
          <Stack.Screen name="SocialConnections" component={SocialConnectionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}