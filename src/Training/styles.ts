import styled from 'styled-components/native';


// Container principal da página
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff; 
`;

// Cabeçalho com título e botão de voltar
export const Header = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 48px;
`;

export const HeaderSearch = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 33px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #ff7e5f;
`;

export const MenuIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 22px;
`;

// Título centralizado no header
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #000;
  text-align: center;
  font-family: 'Poppins_700Bold';
  padding-left: 8px;
  color: #313131;
`;

// Botão de voltar no cabeçalho
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TrainingContainer = styled.View`
  flex: 1;
  background-color: #ffffff; 
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 20px;
`;

// Card de treinamento
export const TrainingCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 18px;
  padding: 15px 20px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  border: 1px solid #EE7811;

`;

// Nome do treinamento
export const TrainingName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  flex: 1; 
`;

export const TextStage = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333333;
  flex: 1; 
`;

// Botão de ação (PDF ou link do vídeo) com ícone e texto
export const ActionButton = styled.TouchableOpacity`
  flex-direction: row; 
  background: #FFF;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  min-width: 110px; 
  border: 1px solid #EE7811;
`;

// Texto do botão de ação
export const ActionButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #EE7811;
  margin-left: 8px;
`;



// Ícone do botão de ação
export const ActionButtonIcon = styled.View`
  margin-right: 4px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: #ffffff; 
  margin-top: -54px;
  margin-left: 52px;
  margin-right: 52px;
`;

export const ButtonSave = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7e5f;
`;

export const ButtonTextSave = styled.Text`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
  margin-left: 8px;
`;
