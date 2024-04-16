import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import Timer from './Timer';
import Screen2 from './Screen2';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Clock' screenOptions={{headerShown:false}} >
        <Stack.Screen name='Clock' component={Timer} options={{animation:'slide_from_left'}}/>
        <Stack.Screen name='Stopwatch' component={Screen2} options={{animation:'slide_from_right'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    Color:'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:StatusBar.currentHeight
  },
});
