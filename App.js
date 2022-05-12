import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation, createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask'
import Details from './src/pages/Details'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tarefas'>
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            headerTintColor: '#483D8B'
          }}
        />

        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTintColor: '#483D8B'
          }}
        />

        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: '#483D8B'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
