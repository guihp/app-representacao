import styled from 'styled-components/native';

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// Header retangular
export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px; /* Altura fixa */
  background-color: #ff7e5f;
  flex-direction: row; /* Itens alinhados em linha */
  align-items: center;
  justify-content: space-between; /* Espaçamento entre os itens */
  padding: 0 20px;
  padding-top: 40px; /* Espaço para o status bar */
`;

// Botão de voltar
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

// Título do header
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  flex: 1; /* Para centralizar o título */
  text-align: center;
  font-family: 'Poppins_700Bold'; /* Fonte Poppins */
  padding-right: 30px;
`;

// Área de conteúdo principal
export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px; /* Espaçamento interno */
`;

// Card de empresa
export const CardContainer = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 5; /* Sombreamento no Android */
`;

// Nome da empresa
export const CompanyName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  font-family: 'Poppins_700Bold';
`;

// Botão para remover empresa ou indicar status
export const RemoveButton = styled.TouchableOpacity<{ status: 'incompleto' | 'completo' }>`
  background-color: ${(props) =>
    props.status === 'completo' ? '#4CAF50' : '#FF3D00'}; /* Verde para completo, vermelho para incompleto */
  width: 40px;
  height: 40px;
  border-radius: 20px; /* Arredondado */
  justify-content: center;
  align-items: center;
`;

// Área dos botões de ação na parte inferior
export const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

// Botões de ação
export const ActionButton = styled.TouchableOpacity<{ color: string }>`
  flex: 1;
  padding: 15px;
  background-color: ${(props) => props.color || '#ff7e5f'};
  border-radius: 10px;
  align-items: center;
  margin: 0 10px; /* Espaçamento entre os botões */
`;

// Texto dos botões de ação
export const ActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Poppins_700Bold';
`;
