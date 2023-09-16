import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home,Restaurant, OrderDelivery,Login, Onboarding, PayMethod } from './screens'

import Tabs from './navigations/tabs';

const Stack = createStackNavigator();


const App = () => {
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false,
                      
                  }}
                  initialRouteName={"Home"}
              >
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Tabs" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                  <Stack.Screen name="PayMethod" component={PayMethod} />
                  <Stack.Screen name="Onboarding" component={Onboarding} />
              </Stack.Navigator>
          </NavigationContainer>
      )
}

export default App;
//    <Stack.Screen name="Login" component={Login} />