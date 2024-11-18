import styled from 'styled-components/native';

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: flex-start;
  align-items: center;
  padding-top: 25px;
`;

// Cabeçalho com cor fixa
export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px; /* Altura do cabeçalho */
  background-color: #ff7e5f; /* Cor fixa */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 30px;
`;

// Ícone de voltar no cabeçalho
export const BackIcon = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  justify-content: center;
  align-items: center;
`;

// Texto do cabeçalho
export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: 'Poppins_700Bold';
  text-align: center;
`;

// Campo de seleção (Motivo)
export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  font-family: 'Poppins_700Bold';
`;

export const SelectContainer = styled.View`
  width: 90%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// Botão de tirar foto
export const PhotoButton = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
`;

export const PhotoButtonText = styled.Text`
  font-size: 16px;
  color: #ff7e5f;
  font-family: 'Poppins_400Regular';
  margin-left: 10px;
`;

// Campo de observação
export const TextArea = styled.TextInput`
  width: 90%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  color: #333;
  margin-bottom: 20px;
`;

// Botão de envio
export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  background-color: #ff7e5f;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: 'Poppins_700Bold';
`;
