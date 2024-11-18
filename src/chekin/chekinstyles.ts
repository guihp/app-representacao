import styled from 'styled-components/native';

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: flex-start; /* Alinha os elementos do topo para baixo */
  align-items: center;
  padding-top: 25px; /* Espaçamento do topo */
`;

// Texto do cabeçalho
export const HeaderText = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: 'Poppins_700Bold';
`;

// Texto de subtítulo do cabeçalho
export const HeaderSubtitle = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  font-family: 'Poppins_400Regular';
`;

// Texto de confirmação
export const ConfirmationText = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 20px;
  font-family: 'Poppins_400Regular';
`;

// Nome do local
export const LocationName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ff7e5f;
  text-align: center;
  margin-top: 10px;
  font-family: 'Poppins_700Bold';
`;

// Endereço do local
export const LocationAddress = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  text-align: center;
  margin-top: 5px;
  font-family: 'Poppins_400Regular';
`;

// Botão de ação (Check-In)
export const ActionButton = styled.TouchableOpacity`
  background-color: #ff7e5f;
  padding: 15px 20px;
  border-radius: 30px;
  margin-vertical: 10px; /* Espaçamento vertical entre os botões */
  width: 80%;
  align-items: center;
`;

// Texto do botão de ação
export const ActionButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  font-family: 'Poppins_700Bold';
`;

// Botão de cancelar
export const CancelButton = styled.TouchableOpacity`
  border: 1px solid #ff7e5f;
  padding: 15px 20px;
  border-radius: 30px;
  margin-vertical: 10px; /* Espaçamento vertical entre os botões */
  width: 80%;
  align-items: center;
`;

// Texto do botão de cancelar
export const CancelButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ff7e5f;
  font-family: 'Poppins_700Bold';
`;

// Texto de justificativa
export const JustifyText = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: red;
  text-decoration: underline;
  margin-top: 20px;
  text-align: center;
  font-family: 'Poppins_700Bold';
`;
