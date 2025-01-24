import styled from 'styled-components/native';


// Container principal da página
export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9; 
`;

// Cabeçalho com título e botão de voltar
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

// Botão de voltar no cabeçalho
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Título do cabeçalho
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  flex: 1;
  text-align: center;
  padding-right: 30px;
  font-family: 'Poppins_700Bold';
  
`;

// Card de treinamento
export const TrainingCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 15px 20px;
  margin-top: 12px;
  margin-left: 15px;
  margin-right: 15px;
  elevation: 4; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.5px;
  border: 1px solid #e6e6e6; 
`;

// Nome do treinamento
export const TrainingName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  flex: 1; 
`;

// Botão de ação (PDF ou link do vídeo) com ícone e texto
export const ActionButton = styled.TouchableOpacity`
  flex-direction: row; 
  background-color: #ff7e5f;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  min-width: 110px; 
`;

// Texto do botão de ação
export const ActionButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
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
