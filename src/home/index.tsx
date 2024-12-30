import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, View, TouchableOpacity } from 'react-native';
import {
  HeaderContainer,
  LogoContainer,
  WelcomeText,
  DateSubText,
  DateNavigationContainer,
  DateText,
  StatusCard,
  StatusItem,
  StatusTitle,
  StatusLabel,
  ViewRouteButton,
  ViewRouteText,
  FloatingButton,
  LojaDay,
} from './HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import Menu from './menu/index';
import { useSelector, useDispatch } from 'react-redux'; // Importa o hook `useDispatch`
import { RootState } from '../redux/store';
import { fetchAtividades } from '../redux/actions/AtividadesActionsAll'; // Importa a ação
import { AppDispatch } from '../redux/store'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [atividade, setAtividade] = useState<any | null>(null);

  const dispatch = useDispatch<AppDispatch>(); // Hook para despachar ações

  // Obtendo o nome do usuário logado
  const userName = useSelector((state: RootState) => state.user.user?.nome || 'Usuário');
  const userId = useSelector((state: RootState) => state.user.user?.id || null); // ID do usuário logado

  // Obtendo atividades do Redux
  const atividades = useSelector((state: RootState) => state.atividades.atividades);

  const getFirstAndLastName = (fullName: string) => {
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0];
    }
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handlePreviousDate = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setSelectedDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const handleNavigateToRoute = () => {
    navigation.navigate('Route');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Atualiza a atividade com base na data selecionada e no usuário logado
  useEffect(() => {
    // Chama a ação para buscar atividades
    dispatch(fetchAtividades());
  }, [dispatch]); // Executa ao montar o componente

  useEffect(() => {
    // Converte a data selecionada para o formato ISO (YYYY-MM-DD)
    const formattedDateISO = selectedDate.toISOString().split('T')[0]; // Obtém apenas a data no formato ISO
  
    // Filtra atividades pelo usuário responsável e data
    const atividadeDoDia = atividades.find(
      (atividade) =>
        atividade.data_inicio === formattedDateISO && atividade.usuario_responsavel === userId
    );
  
    if (atividadeDoDia) {
      console.log('Atividade encontrada para a data:', atividadeDoDia);
    } else {
      console.log('Nenhuma atividade encontrada para a data:', formattedDateISO);
    }
    console.log('Atividades no Redux:', atividades);
    console.log('Usuário logado (ID):', userId);
  
    setAtividade(atividadeDoDia || null);
  }, [selectedDate, atividades, userId]);
  
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar style="auto" />

      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: '100%',
          height: '40%',
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LogoContainer>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
        </LogoContainer>
        <WelcomeText>Olá, {getFirstAndLastName(userName)}</WelcomeText>
        <DateSubText>Seja bem-vindo(a)</DateSubText>
      </LinearGradient>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <DateNavigationContainer>
          <TouchableOpacity onPress={handlePreviousDate}>
            <Icon name="chevron-left" size={30} color="#333" />
          </TouchableOpacity>
          <DateText>{formatDate(selectedDate)}</DateText>
          <TouchableOpacity onPress={handleNextDate}>
            <Icon name="chevron-right" size={30} color="#333" />
          </TouchableOpacity>
        </DateNavigationContainer>

        <DateSubText>Lojas do dia:</DateSubText>
        <LojaDay>
          {atividade ? atividade.loja : 'Nenhuma atividade adicionada, informe o seu supervisor.'}
        </LojaDay>
        <DateSubText>Fotos não sincronizadas: 0</DateSubText>

        <StatusCard>
          <StatusItem>
            <StatusTitle style={{ color: atividade?.status === 'Pendente' ? 'red' : 'green' }}>
              {atividade ? atividade.status : '0'}
            </StatusTitle>
            <StatusLabel>Pendentes</StatusLabel>
          </StatusItem>
          <StatusItem>
            <StatusTitle style={{ color: 'orange' }}>0</StatusTitle>
            <StatusLabel>Justificativa</StatusLabel>
          </StatusItem>
          <StatusItem>
            <StatusTitle style={{ color: 'green' }}>0</StatusTitle>
            <StatusLabel>Completa</StatusLabel>
          </StatusItem>
        </StatusCard>

        <ViewRouteButton onPress={handleNavigateToRoute}>
          <ViewRouteText>VER ROTEIRO</ViewRouteText>
        </ViewRouteButton>
      </View>

      <FloatingButton onPress={toggleMenu}>
        <Icon name="menu" size={33} color="#fff" style={{ marginLeft: 14, marginTop: 13 }} />
      </FloatingButton>

      {isMenuVisible && <Menu onClose={toggleMenu} />}
    </View>
  );
};

export default HomeScreen;
