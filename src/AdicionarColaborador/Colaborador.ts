import styled from 'styled-components/native';

// Container principal
export const Container = styled.View`
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
  elevation: 4; 
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.5px;
`;

// Botão de voltar
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

// Container para as opções
export const OptionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

// Botão de cada opção
export const OptionButton = styled.TouchableOpacity`
  width: 45%;
  aspect-ratio: 1;
  border-radius: 15px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  elevation: 3; 
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
`;

// Ícone de cada opção
export const OptionIcon = styled.View`
  margin-bottom: 10px;
`;

// Texto de cada opção
export const OptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
