import styled from 'styled-components/native';

// Contêiner principal
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

// Cabeçalho
export const HeaderContainer = styled.View`
  width: 100%;
  height: 125px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 40px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  flex: 1;
  text-align: center;
  padding-right: 30px;
  font-family: 'Poppins_700Bold';
`;

// Formulário
export const FormContainer = styled.View`
  padding: 20px;
`;

export const Input = styled.TextInput`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

// Botão para abrir modais
export const ModalButton = styled.TouchableOpacity`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;

// Modal
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 90%; /* Modal mais largo */
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

export const ModalTitle = styled.Text`
  font-size: 22px; /* Título maior para melhor visibilidade */
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 20px; /* Maior visibilidade para o conteúdo */
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row; /* Botões lado a lado */
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalButtonConfirm = styled.TouchableOpacity<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#ccc'};
  padding: 15px 25px;
  border-radius: 8px;
  flex: 1; /* Botões com tamanhos iguais */
  align-items: center;
  margin: 0 10px; /* Espaçamento entre os botões */
`;

export const ModalButtonTextConfirm = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalOption = styled.TouchableOpacity`
  padding: 15px;
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const ModalOptionText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const CloseModalButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  background-color: red;
  border-radius: 8px;
`;

export const CloseModalButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

// Botões de ação (Salvar e Cancelar)
export const ActionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ActionButton = styled.TouchableOpacity<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  width: 48%;
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

// Checkbox Container for Personalizado
export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxItem = styled.TouchableOpacity<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 10px;
  border-width: 1px;
  border-color: ${({ checked }) => (checked ? '#ff7e5f' : '#ccc')};
  background-color: ${({ checked }) => (checked ? '#ff7e5f' : 'white')};
`;

export const CheckboxText = styled.Text`
  font-size: 16px;
  color: #333;
`;
