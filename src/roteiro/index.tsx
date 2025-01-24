import React, { useState, useEffect } from 'react';
import { View, Alert, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  HeaderContainer,
  HeaderTitle,
  BackIcon,
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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchAtividades } from '../redux/actions/AtividadesActionsAll';

type Props = NativeStackScreenProps<RootStackParamList, 'Route'>;

const RouteScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user); // Usuário logado
  const atividades = useSelector((state: RootState) => state.atividades.atividades); // Atividades do Redux

  useEffect(() => {
    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado. Faça login para continuar.');
      navigation.replace('Login');
    }
  }, [user]);

  useEffect(() => {
    // Busca as atividades ao carregar a página
    dispatch(fetchAtividades());
  }, [dispatch]);

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


  const handleHome = () => {
    navigation.navigate('Home');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  // Formatar a data no formato ISO (YYYY-MM-DD) para comparação
  const formatDateISO = (date: Date) => date.toISOString().split('T')[0];

  // Filtra atividades por data e ID do usuário logado
  const atividadesDoDia = atividades.filter(
    (atividade) =>
      atividade.usuario_responsavel === user?.id &&
      atividade.data_inicio <= formatDateISO(selectedDate) &&
      atividade.data_fim >= formatDateISO(selectedDate)
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackIcon onPress={handleHome}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </BackIcon>
        <HeaderTitle>Meu roteiro</HeaderTitle>
      </HeaderContainer>

      {/* Nome do mês */}
      <MonthTitle>
      {selectedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).charAt(0).toUpperCase() + selectedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).slice(1)}
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
              {day.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(0, 3).charAt(0).toUpperCase() + day.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(1, 3)}
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

      {/* Lista de atividades do dia */}
      <CardListContainer>
        {atividadesDoDia.length > 0 ? (
          atividadesDoDia.map((atividade) => (
            <RouteCard key={atividade.id} onPress={() => navigation.navigate('CheckIn')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5}}>
                <View>
                  <CardTitle>{atividade.loja}</CardTitle>
                  <CardDetails>Atividade: {atividade.tipo}</CardDetails>
                  <CardDetails>Data: {formatDate(new Date(atividade.data_inicio))} até {formatDate(new Date(atividade.data_fim))}</CardDetails>
                </View>
                <Icon name="arrow-collapse-right" size={28} color="gray" />
              </View>
            </RouteCard>
          ))
        ) : (
          <RouteCard>
            <CardTitle>Nenhuma atividade encontrada</CardTitle>
          </RouteCard>
        )}
      </CardListContainer>
    </View>
  );
};

export default RouteScreen;
