import styled from 'styled-components/native';

// Fundo semi-transparente
export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Contêiner do menu lateral
export const MenuContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para o menu */
  elevation: 5; /* Sombra no Android */
`;

// Header do menu
export const MenuHeader = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  top: 20;
`;

// Título do menu
export const MenuTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Ícone do botão
export const MenuIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Itens do menu
export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #f5f5f5;
  elevation: 2; /* Sombra no Android */
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
`;

// Texto do botão de menu
export const MenuText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

// Contêiner do lado esquerdo com o ícone e texto
export const MenuItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

// Contêiner do lado direito (sinal de ">" no final)
export const MenuItemRight = styled.View`
  justify-content: center;
  align-items: center;
`;

// Ícones do menu
export const MenuItemIcon = styled.View`
  margin-right: 10px;
`;
