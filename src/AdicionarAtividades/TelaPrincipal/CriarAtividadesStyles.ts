import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

// Container Principal
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// Container secundário (conteúdo da tela)
export const Container2 = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

// Header principal
export const Header = styled.View`
  width: 100%;
  height: 12%;
  background-color: #ff7e5f;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight || 20}px` : '40px'};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: 5; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

// Botão de voltar
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: ${Platform.OS === 'android' ? `${(StatusBar.currentHeight || 20) + 28}px` : '10px'};
`;

// Título do Header
export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

// Rótulo dos campos
export const Label = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`;

// Botão de Seleção
export const SelectButton = styled.TouchableOpacity`
  background-color: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// Texto do Botão de Seleção
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #555555;
`;

// Botão principal (confirmação, etc.)
export const Button = styled.TouchableOpacity`
  background-color: #2ecc71;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

// Texto do Botão principal
export const ButtonTextPrimary = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

// Dropdown Container para seleções
export const DropdownContainer = styled.View`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  elevation: 5;
  margin-bottom: 10px;
`;

// Item do Dropdown
export const DropdownItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  align-items: center;
`;

// Texto do Item do Dropdown
export const DropdownItemText = styled.Text`
  font-size: 16px;
  color: #333333;
`;

// Modal Container
export const ModalContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

// Botão Fechar no Modal
export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  border-radius: 15px;
  padding: 5px;
`;

// Texto do Botão Fechar
export const CloseButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
`;

// Estilização de Overlay para o Modal
export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
