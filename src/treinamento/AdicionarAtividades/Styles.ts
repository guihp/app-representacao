import styled from 'styled-components/native';

// Fundo para o modal/popup
export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

// Container principal do popup
export const PopupContainer = styled.View`
  width: 90%;
  bottom: 300px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  align-self: center;
`;
// Cabeçalho do popup
export const PopupHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// Título do popup
export const PopupTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Botão de fechar o popup
export const PopupCloseButton = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 8px;
  border-radius: 50px;
`;

// Conteúdo do popup
export const PopupContent = styled.View`
  margin-top: 10px;
`;

// Campo de entrada para o popup
export const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
`;

// Botões de ação no popup
export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 20px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #e74c3c;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 20px;
  margin-left: 5px;
  border-radius: 10px;
  background-color: #2ecc71;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

// Seletor de Tipo
export const TypeSelector = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const TypeOption = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? '#ff7e5f' : '#f2f2f2')};
  border: ${(props) => (props.selected ? 'none' : '1px solid #ccc')};
`;

// Botão para selecionar arquivo
export const FileSelectorButton = styled.TouchableOpacity`
  background-color: #ff7e5f;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const FileSelectorButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
