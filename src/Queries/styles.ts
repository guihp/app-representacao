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
  margin-bottom: 33px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px; 
  border-width: 2px;
  border-color: #ff7e5f; 
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

// Botão de voltar no lado esquerdo
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Corpo da página
export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #79747e;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 14px;
`;

export const LabelFloat = styled.Text`
  position: absolute;
  top: -8px;
  left: 12px;
  background-color: #ffffff;
  padding: 0 4px;
  font-size: 14px;
  color: #1c1b1f;
  z-index: 10;
`;

// Botão para capturar localização
export const LocationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid #313131;
  border-radius: 4px;
`;

// Texto dentro do botão
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #313131;
  font-weight: 600;
  margin-left: 8px;
`;

// Mapa interativo
export const MapContainer = styled.View`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

export const ButtonSave = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7e5f;
  margin-top: 24px;
`;

export const ButtonTextSave = styled.Text`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
  margin-left: 8px;
`;
