import styled from 'styled-components/native';

// Cabeçalho com gradiente
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

// Ícone de voltar
export const BackIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Ícone de filtro
export const FilterIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Texto do título do cabeçalho
export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  flex: 1; /* Para centralizar o texto */
`;

// Contêiner de navegação de datas
export const DateNavigationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;
`;

// Botões de navegação de data
export const DateArrowButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

// Contêiner de botões de data
export const DateButton = styled.TouchableOpacity`
  align-items: center;
  margin: 0 5px;
`;

// Texto do dia da semana
export const WeekdayText = styled.Text`
  font-size: 12px;
  color: #666;
`;

// Texto do número da data
export const DateTextNumber = styled.Text<{ isSelected: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isSelected ? '#fff' : '#333')};
  background-color: ${(props) => (props.isSelected ? '#ff7e5f' : 'transparent')};
  padding: 5px 10px;
  border-radius: 15px;
`;

// Contêiner principal da lista de cards
export const CardListContainer = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

// Estilo para os cards
export const RouteCard = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px; /* Espaçamento aumentado */
  margin-bottom: 15px; /* Espaçamento entre os cards */
  elevation: 3; /* Sombra no Android */
`;

// Texto do título do card
export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

// Texto dos detalhes do card
export const CardDetails = styled.Text`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
`;

// Adicione este novo estilo para o nome do mês
export const MonthTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 5px; /* Espaçamento entre o mês e a barra de navegação */
`;

// Estilo do popup
export const PopupContainer = styled.Modal``;

export const PopupOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const PopupHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const PopupCloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const PopupTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const FilterOption = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #FF7E5F;
`;

export const FilterOptionText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ToggleSwitch = styled.Switch``;

