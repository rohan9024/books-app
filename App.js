import * as React from "react";
import { View, Text } from "react-native";
import BookScreen from "./BookScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from "./BottomTab";
import TGB from "./TGB";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TGB"
          component={TGB}
          options={{
            headerShown: false,
          }}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
