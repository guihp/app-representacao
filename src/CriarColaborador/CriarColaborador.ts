import styled from 'styled-components/native';

// Contêiner principal
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

// Cabeçalho
export const HeaderContainer = styled.View`
  width: 100%;
  height: 15%;
  background-color: #ff7e5f;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
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

export const ActionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
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
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
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
  background-color: #ff7e5f;
  border-radius: 8px;
`;

export const CloseModalButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
