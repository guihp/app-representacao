import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

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

export const DateSubText = styled.Text`
  font-size: 16px;
  color: black;
  margin-top: 4px;
`;

// Container para as opções
export const OptionsContainer = styled.View`
  flex: 1;
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

// Opção de menu
export const OptionCard = styled.TouchableOpacity`
  width: 48%;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

// Texto dentro da opção
export const OptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

// Ícone dentro da opção
export const OptionIcon = styled(Icon)`
  color: #ff7e5f;
  font-size: 32px;
`; 
