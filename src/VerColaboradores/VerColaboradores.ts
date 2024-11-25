<<<<<<< HEAD
import styled from 'styled-components/native';

// Contêiner principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// Header com botão de voltar
export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  margin-top: 50px;
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
  left: 20px;
  justify-content: center;
  align-items: center;
`;

// Barra de Pesquisa
export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 10px 15px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

// Lista de Colaboradores
export const CollaboratorList = styled.FlatList`
  flex: 1;
`;

// Card de Colaborador
export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-right: 20px;
`;

// Imagem Padrão do Colaborador
export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

// Conteúdo do Card
export const CardContent = styled.View`
  flex: 1;
`;

// Nome e Cargo no Card
export const CollaboratorName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const CollaboratorInfo = styled.Text`
  font-size: 14px;
  color: #555;
`;

// Botões de Ação
export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

// Modal de Detalhes do Colaborador
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
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

// Modal de Edição do Colaborador
export const EditModalContent = styled(ModalContent)`
  padding: 25px;
`;

export const EditModalInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const EditModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const EditModalButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #4caf50; /* Botão de confirmação verde */
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 8px;
  align-items: center;
`;

export const CancelModalButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #f44336; /* Botão de cancelamento vermelho */
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 8px;
  align-items: center;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
=======
import styled from 'styled-components/native';

// Contêiner principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// Header com botão de voltar
export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  margin-top: 50px;
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
  left: 20px;
  justify-content: center;
  align-items: center;
`;

// Barra de Pesquisa
export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 10px 15px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

// Lista de Colaboradores
export const CollaboratorList = styled.FlatList`
  flex: 1;
`;

// Card de Colaborador
export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-right: 20px;
`;

// Imagem Padrão do Colaborador
export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

// Conteúdo do Card
export const CardContent = styled.View`
  flex: 1;
`;

// Nome e Cargo no Card
export const CollaboratorName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const CollaboratorInfo = styled.Text`
  font-size: 14px;
  color: #555;
`;

// Botões de Ação
export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

// Modal de Detalhes do Colaborador
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
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #ff7e5f;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 8px;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
>>>>>>> 6381988f2d475b359478ae26f6d7363a90754c77
