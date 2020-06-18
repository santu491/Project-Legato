import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/Components/Login'
import UserScreen from './app/Components/UserScreen'

const Stack = createStackNavigator();
const App=() => {
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen initialRouteName="Login" name="Login" component={Login} 
             options={{
              headerShown: false
            }}
            />
            <Stack.Screen name="UserScreen" component={UserScreen}
               options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default App;
