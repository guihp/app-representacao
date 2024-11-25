import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../loginScreen/index';
import HomeScreen from '../home/index';
import RouteScreen from '../roteiro/index';
import CheckInScreen from '../chekin/index';
import JustificationScreen from '../justifcativa/index';
import MainIndustriesScreen from '../mainIndustrias/index'; 
import ColaboradoresScreen from '../AdicionarColaborador/index';
import AdicionarColaborador from '../CriarColaborador/index'
import VerColaboradores from '../VerColaboradores/index';
import FazerPesquisa from '../FazerPesquisa';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definindo todas as rotas, incluindo a nova tela
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Route: undefined;
  CheckIn: undefined;
  Justification: undefined;
  MainIndustries: undefined;
  Collaborators: undefined; 
  CriarColaboradores: undefined;
  VerColaboradores: undefined;
  FazerPesquisa: undefined;
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
          name="Justification"
          component={JustificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainIndustries"
          component={MainIndustriesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Collaborators" // Nome da nova rota
          component={ColaboradoresScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="CriarColaboradores" // Nome da nova rota
          component={AdicionarColaborador} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="VerColaboradores" // Nome da nova rota
          component={VerColaboradores} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="FazerPesquisa" // Nome da nova rota
          component={FazerPesquisa} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
