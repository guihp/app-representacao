import styled from 'styled-components/native';

// Container do logo
export const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #feb47b;
  align-items: center;
  justify-content: center;
`;

// Boas-vindas do usuário
export const WelcomeText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
`;

// Texto secundário abaixo das boas-vindas
export const DateSubText = styled.Text`
  font-size: 16px;
  color: black;
  margin-top: 4px;
`;

// Data do dia com formatação distinta
export const DateHeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
`;

// Texto da data central
export const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-horizontal: 10px;
`;

// Card de status
export const StatusCard = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

// Cada item dentro do card de status
export const StatusItem = styled.View`
  align-items: center;
`;

// Título de cada status
export const StatusTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Título da loja do dia
export const LojaDay = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Legenda de cada status
export const StatusLabel = styled.Text`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
`;

// Botão "Ver Roteiro"
export const ViewRouteButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  align-items: center;
`;

// Texto do botão "Ver Roteiro"
export const ViewRouteText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6c63ff;
  text-transform: uppercase;
`;

// Botão flutuante
export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ff7e5f;
`;

// Container das setas e da data
export const DateNavigationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
