import styled from 'styled-components/native';
import { Picker as RNPicker } from '@react-native-picker/picker';

interface ActionButtonProps {
    confirm?: boolean;
  }
  

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// Header com botão de voltar
export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  justify-content: center;
  align-items: center;
`;

// Inputs gerais
export const InputField = styled.TextInput`
  width: 90%;
  height: 50px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
`;



// Botões de ação
export const CameraButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  margin: 20px auto;
  background-color: #ff7e5f;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 20px auto;
`;

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  background-color: ${(props) => (props.confirm ? '#4caf50' : '#f44336')};
  width: 40%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

// Contêiner para a foto tirada
export const PhotoContainer = styled.View`
  margin: 20px auto;
  width: 90%;
  align-items: center;
`;

export const PhotoPreview = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Modal de confirmação
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const ModalButton = styled.TouchableOpacity<{ confirm?: boolean }>`
  flex: 1;
  background-color: ${(props) => (props.confirm ? '#4caf50' : '#f44336')};
  padding: 10px;
  margin: 0 5px;
  border-radius: 8px;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
