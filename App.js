import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Bussines from './components/Bussines'
import Tech from './components/Tech';
import Politics from './components/Politics';
import Science from './components/Science';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Import the createStackNavigator
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import CommonScreen from './components/CommonScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator(); // Create a Stack.Navigator


function HomeTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: { width: 138 },
        indicatorStyle: { backgroundColor: 'black' }, 
        labelStyle: { fontWeight: 'bold' }, 
      }}
    >
      <Tab.Screen name="All News" component={Screen1} />
      <Tab.Screen name="Bissines" component={Bussines} />
      <Tab.Screen name="Tech" component={Tech} />
      <Tab.Screen name="Politics" component={Politics} />
      <Tab.Screen name="Science" component={Science} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Sports" component={Sports} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={CommonScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
