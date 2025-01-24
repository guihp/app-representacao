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
import CadastroLoja from '../CadastroLoja';
import TreinamentoScreen from '../treinamento';
import AdicionarAtividades from '../AdicionarAtividades/TelaPrincipal/CriarAtividade';
import ActivityPage from '../AntesEDepois';
import HomeGerente from '../home/MenuGerente';
import DegustacaoPage from '../Degustacao';
import Validade from '../Validade';
import MetasPage from '../Metas';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definindo todas as rotas
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
  CadastrarLoja: undefined;
  TreinamentoScreen: undefined;
  AdicionarAtividades: undefined;
  ActivityPage: { industryName: string; industryId: string };
  HomeGerente: undefined;
  DegustacaoPage: { industryName: string; industryId: string };
  Validade: undefined;
  MetasPage: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login" // Nome da nova rota
          component={LoginScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="Home" // Nome da nova rota
          component={HomeScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="Route" // Nome da nova rota
          component={RouteScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="CheckIn" // Nome da nova rota
          component={CheckInScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="Justification" // Nome da nova rota
          component={JustificationScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="MainIndustries" // Nome da nova rota
          component={MainIndustriesScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
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
        <Stack.Screen
          name="CadastrarLoja" // Nome da nova rota
          component={CadastroLoja} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="TreinamentoScreen" // Nome da nova rota
          component={TreinamentoScreen} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="AdicionarAtividades" // Nome da nova rota
          component={AdicionarAtividades} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="ActivityPage" // Nome da nova rota
          component={ActivityPage} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="HomeGerente" // Nome da nova rota
          component={HomeGerente} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="DegustacaoPage" // Nome da nova rota
          component={DegustacaoPage} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="Validade" // Nome da nova rota
          component={Validade} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
        <Stack.Screen
          name="MetasPage" // Nome da nova rota
          component={MetasPage} // Componente da nova tela
          options={{ headerShown: false }} // Sem cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
