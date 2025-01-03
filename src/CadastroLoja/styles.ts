import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// Header fixo com nome da página e botão de voltar
export const Header = styled.View`
  width: 100%;
  height: 125px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 40px;
  elevation: 4; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.5px;
`;

// Título centralizado no header
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  flex: 1;
  text-align: center;
  padding-right: 30px;
  font-family: 'Poppins_700Bold';
`;

// Botão de voltar no lado esquerdo
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Corpo da página
export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

// Campo de entrada (input)
export const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 10px 15px;
  font-size: 16px;
  margin-bottom: 15px;
  elevation: 3; /* Sombra no Android */
`;

// Botão para capturar localização
export const LocationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7e5f;
  margin-top: 10px;
`;

// Texto dentro do botão
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;

// Mapa interativo
export const MapContainer = styled.View`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
`;
