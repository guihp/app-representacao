import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

// Container principal da página
export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9; /* Fundo cinza claro para destacar os cards */
`;

// Cabeçalho com título e botão de voltar
export const Header = styled.View`
  width: 100%;
  height: 12%;
  background-color: #ff7e5f;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight || 20}px` : '40px'};
  justify-content: center;
  align-items: center;
  position: relative;
  elevation: 4;
  margin-bottom: 16px;
`;

// Botão de voltar no cabeçalho
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: ${Platform.OS === 'android' ? `${(StatusBar.currentHeight || 20) + 20}px` : '10px'};
`;

// Título do cabeçalho
export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

// Lista de treinamentos
export const TrainingList = styled.FlatList`
  flex: 1;
  padding: 10px 15px;
`;

// Card de treinamento
export const TrainingCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 12px;
  margin-left: 15px;
  margin-right: 15px;
  elevation: 4; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.5px;
  border: 1px solid #e6e6e6; /* Borda sutil */
`;

// Nome do treinamento
export const TrainingName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  flex: 1; /* Garante que o nome ocupe o espaço disponível */
`;

// Botão de ação (PDF ou link do vídeo) com ícone e texto
export const ActionButton = styled.TouchableOpacity`
  flex-direction: row; /* Ícone ao lado do texto */
  background-color: #ff7e5f;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  min-width: 110px; /* Garante tamanho adequado */
`;

// Texto do botão de ação
export const ActionButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px; /* Espaço entre ícone e texto */
`;

// Botão flutuante para adicionar treinamentos
export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #ff7e5f;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  elevation: 6; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 3.5px;
`;

// Ícone do botão de ação
export const ActionButtonIcon = styled.View`
  margin-right: 4px;
`;
