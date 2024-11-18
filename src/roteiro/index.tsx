import React, { useState } from 'react';
import { View, Alert, Modal } from 'react-native';
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
  PopupOverlay,
  PopupContent,
  PopupHeader,
  PopupCloseButton,
  PopupTitle,
  FilterOption,
  FilterOptionText,
  ToggleSwitch,
} from './roteirostyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Route'>;

const RouteScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [filters, setFilters] = useState({
    todos: true,
    concluidos: false,
    emProgresso: false,
    pendente: false,
  });

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

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [key]: !prevFilters[key] };
      // Se "Todos" for selecionado, desmarca os outros
      if (key === 'todos' && updatedFilters.todos) {
        return { todos: true, concluidos: false, emProgresso: false, pendente: false };
      }
      // Se qualquer outro filtro for selecionado, desmarca "Todos"
      if (key !== 'todos' && updatedFilters[key]) {
        return { ...updatedFilters, todos: false };
      }
      return updatedFilters;
    });
  };

  const handleHome = () => {
    navigation.navigate('Home'); // Navega para a tela de justificativa
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackIcon onPress={handleHome}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </BackIcon>
        <HeaderTitle>Meu roteiro</HeaderTitle>
        <FilterIcon onPress={() => setIsPopupVisible(true)}>
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
            <WeekdayText>
              {day.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(0, 3)}
            </WeekdayText>
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
        <RouteCard onPress={() => navigation.navigate('CheckIn')}>
          <CardTitle>MATEUS SUPERMERCADOS S.A. - COHATRAC</CardTitle>
          <CardDetails>15 - SUPER</CardDetails>
          <CardDetails>AV. A, QD 06 23</CardDetails>
        </RouteCard>
        <RouteCard onPress={() => navigation.navigate('CheckIn')}>
          <CardTitle>MATEUS SUPERMERCADOS S.A. - SUPER COHATRAC</CardTitle>
          <CardDetails>15 - SUPER</CardDetails>
          <CardDetails>AVE CONTORNO NORTE 1</CardDetails>
        </RouteCard>
      </CardListContainer>

      {/* Popup de filtro */}
      <Modal visible={isPopupVisible} transparent animationType="fade">
        <PopupOverlay>
          <PopupContent>
            <PopupHeader>
              <PopupTitle>Filtrar</PopupTitle>
              <PopupCloseButton onPress={() => setIsPopupVisible(false)}>
                <Icon name="close" size={24} color="#ff3d00" />
              </PopupCloseButton>
            </PopupHeader>

            {/* Opções de filtro */}
            <FilterOption>
              <FilterOptionText>Todos</FilterOptionText>
              <ToggleSwitch
                value={filters.todos}
                onValueChange={() => handleFilterChange('todos')}
              />
            </FilterOption>
            <FilterOption>
              <FilterOptionText>Concluídos</FilterOptionText>
              <ToggleSwitch
                value={filters.concluidos}
                onValueChange={() => handleFilterChange('concluidos')}
              />
            </FilterOption>
            <FilterOption>
              <FilterOptionText>Em progresso</FilterOptionText>
              <ToggleSwitch
                value={filters.emProgresso}
                onValueChange={() => handleFilterChange('emProgresso')}
              />
            </FilterOption>
            <FilterOption>
              <FilterOptionText>Pendente</FilterOptionText>
              <ToggleSwitch
                value={filters.pendente}
                onValueChange={() => handleFilterChange('pendente')}
              />
            </FilterOption>
          </PopupContent>
        </PopupOverlay>
      </Modal>
    </View>
  );
};

export default RouteScreen;
