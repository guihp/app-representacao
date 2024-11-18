import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StatusBar } from 'react-native';

// Container principal com fundo degradê que cobre o topo da tela
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// Header com gradiente, ocupando a parte superior e ajustando para a Safe Area
export const Header = styled(LinearGradient).attrs({
  colors: ['#ff7e5f', '#feb47b'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : '0px'};
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

// Área de conteúdo para centralizar o conteúdo abaixo do cabeçalho
export const ContentArea = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 30px;
`;

// Estiliza o título "Login"
export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

// Estiliza o container da logo
export const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 20px;
`;

// Estiliza os inputs de CPF e Senha
export const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 30px;
  font-size: 16px;
  background-color: #f2f2f2;
  padding-left: 45px; /* Para dar espaço para o ícone */
  elevation: 5; /* Sombra no Android */
`;

// Ícone para o input
export const IconContainer = styled.View`
  position: absolute;
  left: 30px;
  top: 15px;
`;

// Estiliza o botão de login com o degradê e arredondamento
export const Button = styled(LinearGradient).attrs({
  colors: ['#ff7e5f', '#feb47b'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 85%;
  padding: 15px;
  border-radius: 30px;
  align-items: center;
  margin-top: 20px;
`;

// Estiliza o texto do botão de login
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

// Estiliza o título "Palavra do dia"
export const WordOfTheDayTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-top: 100px;
`;

// Estiliza o container da mensagem bíblica
export const BibleMessageContainer = styled.View`
  width: 85%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #ff7e5f;
  align-items: center;
  border-radius: 20px;
`;

// Estiliza o texto da mensagem bíblica
export const BibleMessageText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 20px;
  padding-top: 10px;
`;
