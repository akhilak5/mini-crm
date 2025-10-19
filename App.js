import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import CustomerList from './src/screens/CustomerList';
import CustomerDetails from './src/screens/CustomerDetails';
import AddCustomer from './src/screens/AddCustomer';
import AddLead from './src/screens/AddLead';
import LeadList from './src/screens/LeadList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="CustomerList" component={CustomerList} />
          <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
          <Stack.Screen name="AddCustomer" component={AddCustomer} />
          <Stack.Screen name="AddLead" component={AddLead} />
          <Stack.Screen name="LeadList" component={LeadList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


