import styled from 'styled-components/native';
import { TextInput } from 'react-native';

// Container principal da tela
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container2 = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding-left: 20px;
  padding-right: 20px;
`;

// Header com botão de voltar
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

// Título do Header
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  flex: 1;
  text-align: center;
  padding-right: 30px;
  font-family: 'Poppins_700Bold';
`;

export const Text1 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: 'Poppins_700Bold';
`

export const SubText1 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:rgb(69, 65, 65);
  font-family: 'Poppins_700Bold';
`

// Botão de voltar no Header
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Container do formulário
export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 20px;
`;

// Campo de entrada de texto
export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  elevation: 2;
`;

// Botões de ação (Salvar e Cancelar)
export const ActionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;

export const ActionButtonContainer2 = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ActionButton = styled.TouchableOpacity<{ color: string }>`
  width: 48%;
  height: 50px;
  background-color: ${(props) => props.color || '#ccc'};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

// Campo somente leitura
export const ReadOnlyField = styled.View`
  width: 100%;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 8px;
  justify-content: center;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ReadOnlyText = styled.Text`
  font-size: 16px;
  color: #666;
`;

// Botão de Enviar
export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #ff7e5f;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  elevation: 2;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

// Campo de seleção (Dropdown)
export const DropdownContainer = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  elevation: 2;
`;

export const DropdownText = styled.Text`
  font-size: 16px;
  color: #333;
`;


export const DateButton = styled.TouchableOpacity`
  background-color: #fff; 
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px; 
  align-items: center; 
`;

export const DateButtonText = styled.Text`
  color: #333; 
  font-size: 16px; 
  font-weight: bold; 
`;