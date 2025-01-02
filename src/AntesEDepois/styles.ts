import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

// Container principal da página
export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

// Cabeçalho com título e botão de voltar
export const Header = styled.View`
  width: 100%;
  height: 12%;
  background-color: #ff7e5f;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight || 20}px` : '40px'};
  justify-content: center;
  align-items: center;
  position: relative;
  elevation: 4;
  margin-bottom: 16px;
`;

// Botão de voltar no cabeçalho
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: ${Platform.OS === 'android' ? `${(StatusBar.currentHeight || 20) + 20}px` : '10px'};
`;

// Título do cabeçalho
export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

// Seção de atividades
export const ActivitySection = styled.View`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const ActivityTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  color: #333;
  margin-bottom: 8px;
`;

export const ActivityText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  color: #333;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ff7e5f;
  text-align: center;
  margin-bottom: 20px;
`;

export const ActivityDescription = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const PhotoButton = styled.TouchableOpacity`
  width: 250px;
  height: 100px;
  background-color: #ff7e5f;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const PhotoIcon = styled.View`
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const PhotoInfo = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const PhotoInfoText = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const SendButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #ff7e5f;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`;

export const SendButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
