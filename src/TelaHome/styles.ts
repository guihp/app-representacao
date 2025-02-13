import styled from 'styled-components/native';

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// Header fixo com nome da página e botão de voltar
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
`;

// Corpo da página
export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProfileCard = styled.View`
 border: 0.5px solid #79747E;
 border-radius: 16px;
 height: 226px;
 padding: 12px;
 flex-direction: column;
 gap: 12px;
 align-items: start;
`;

export const ProfileName = styled.Text`
 color: #313131;
 font-weight: 600;
 font-size: 18px;
`;

export const DateText = styled.Text`
  color:rgb(3, 3, 3);
  font-weight: 500;
  font-size: 16px;
  font-family: 'Poppins';
  line-height: 29.845px;
`;

export const ActivedCard = styled.View`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 16;
  align-self: stretch;
  border-radius: 16px;
  background-color: #FFF2CC;
`;

export const TextAtividade = styled.Text`
  color: #3A3B45;
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerCard =styled.View`
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const LineSeparator = styled.Text`
  width: 80%;
  height: 1px;
  background: #E6E8F5;
`;

export const PhotoLoads = styled.Text`
  color: #313131;
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`;

export const Contain2 = styled.View`
  flex: 2;
  padding: 20px;
  margin-top: 24px;
`;

export const CardStatus = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  gap: 16px;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #79747E;
  margin-bottom: 24px;
`;

export const CardIcon = styled.View`
  width: 64px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #79747E;
  background: rgba(246, 176, 57, 0.10);
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  color: #313131;
  font-weight: 600;
  font-size: 16px;
`;

