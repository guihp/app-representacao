import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  HeaderContainer,
  HeaderTitle,
  BackIcon,
  FilterIcon,
  DateNavigationContainer,
  DateArrowButton,
  DateButton,
  WeekdayText,
  DateTextNumber,
  MonthTitle,
  CardListContainer,
  RouteCard,
  CardTitle,
  CardDetails,
} from './roteirostyles';

const RouteScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getVisibleDays = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    return Array.from({ length: 7 }, (_, index) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + index);
      return day;
    });
  };

  const visibleDays = getVisibleDays(selectedDate);

  const handlePreviousWeek = () => {
    const previousWeek = new Date(selectedDate);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setSelectedDate(previousWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(selectedDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setSelectedDate(nextWeek);
  };

  const handleSelectDate = (day: Date) => {
    setSelectedDate(day);
  };

  const handleCardPress = () => {
    Alert.alert('Detalhes', 'Exibindo detalhes da rota selecionada.');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackIcon onPress={() => Alert.alert('Voltar', 'Voltando para a tela anterior.')}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </BackIcon>
        <HeaderTitle>Meu roteiro</HeaderTitle>
        <FilterIcon onPress={() => Alert.alert('Filtro', 'Abrindo opções de filtro!')}>
          <Icon name="filter" size={24} color="#fff" />
        </FilterIcon>
      </HeaderContainer>

      {/* Nome do mês */}
      <MonthTitle>
        {selectedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
      </MonthTitle>

      {/* Navegação de datas */}
      <DateNavigationContainer>
        <DateArrowButton onPress={handlePreviousWeek}>
          <Icon name="chevron-left" size={24} color="#333" />
        </DateArrowButton>
        {visibleDays.map((day) => (
          <DateButton
            key={day.toDateString()}
            onPress={() => handleSelectDate(day)}
          >
            <WeekdayText>{day.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(0, 3)}</WeekdayText>
            <DateTextNumber isSelected={day.toDateString() === selectedDate.toDateString()}>
              {day.getDate()}
            </DateTextNumber>
          </DateButton>
        ))}
        <DateArrowButton onPress={handleNextWeek}>
          <Icon name="chevron-right" size={24} color="#333" />
        </DateArrowButton>
      </DateNavigationContainer>

      {/* Lista de cards */}
      <CardListContainer>
        <RouteCard onPress={handleCardPress}>
          <CardTitle>MATEUS SUPERMERCADOS S.A. - COHATRAC</CardTitle>
          <CardDetails>15 - SUPER</CardDetails>
          <CardDetails>AV. A, QD 06 23</CardDetails>
        </RouteCard>
        <RouteCard onPress={handleCardPress}>
          <CardTitle>MATEUS SUPERMERCADOS S.A. - SUPER COHATRAC</CardTitle>
          <CardDetails>15 - SUPER</CardDetails>
          <CardDetails>AVE CONTORNO NORTE 1</CardDetails>
        </RouteCard>
      </CardListContainer>
    </View>
  );
};

export default RouteScreen;
