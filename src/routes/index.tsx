import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../loginScreen/index';
import HomeScreen from '../home/index';
import RouteScreen from '../roteiro/index';
import CheckInScreen from '../chekin/index';
import JustificationScreen from '../justifcativa/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definindo todas as rotas, incluindo a nova tela de justificativa
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Route: undefined;
  CheckIn: undefined;
  Justification: undefined; // Adicionando a nova rota
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Route"
          component={RouteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckIn"
          component={CheckInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Justification" // Nome da nova rota
          component={JustificationScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
