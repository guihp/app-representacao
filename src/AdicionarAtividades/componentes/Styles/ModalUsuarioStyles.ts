import styled from 'styled-components/native';

// Contêiner principal do modal
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro com transparência */
`;

// Conteúdo principal do modal
export const ModalContent = styled.View`
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  max-height: 80%;
  elevation: 5;
`;

// Header do modal com título e botão de fechar
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  flex: 1;
`;

export const CloseButtonContainer = styled.View`
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

// Barra de pesquisa
export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

// Lista de colaboradores
export const CollaboratorList = styled.FlatList`
  flex: 1;
`;

// Card de colaborador
export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  elevation: 2;
`;

// Imagem padrão do colaborador
export const ProfileImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  margin-right: 12px;
`;

// Conteúdo do card
export const CardContent = styled.View`
  flex: 1;
`;

export const CollaboratorName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const CollaboratorInfo = styled.Text`
  font-size: 14px;
  color: #777;
`;

