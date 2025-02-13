import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  HeaderSearch,
  ProfileCard,
  ProfileName,
  DateText,
  ActivedCard,
  TextAtividade,
  LineSeparator,
  ContainerCard,
  PhotoLoads,
  Contain2,
  CardStatus,
  CardText,
  CardIcon,
} from './styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchAtividades } from '../redux/actions/AtividadesActionsAll';
import { MenuItemIcon } from '../home/menu/menuStyles';



type Props = NativeStackScreenProps<RootStackParamList, 'TelaHome'>;

const TelaHome: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [atividade, setAtividade] = useState<any | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const userName = useSelector((state: RootState) => state.user.user?.nome || 'Usuário');
  const userId = useSelector((state: RootState) => state.user.user?.id || null);
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

  const formatDateISO = (date: Date) => {
    return date.toISOString().split('T')[0]; // Mantém o formato YYYY-MM-DD para comparação
  };

  const handlePreviousDate = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDate = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const handleNavigateToRoute = () => {
    navigation.navigate('Route');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Fetch atividades ao montar o componente
  useEffect(() => {
    dispatch(fetchAtividades());
  }, [dispatch]);

  // Atualiza a atividade com base na data selecionada e no usuário logado
  useEffect(() => {
    const formattedDateISO = formatDateISO(selectedDate);

    const atividadeDoDia = atividades.find(
      (atividade) =>
        atividade.usuario_responsavel === userId &&
        atividade.data_inicio <= formattedDateISO &&
        atividade.data_fim >= formattedDateISO
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
    <Container>
    {/* Header */}
    <Header>

      <HeaderSearch>

          <MenuItemIcon>
              <Icon name="menu" size={34} color="#313131" />
          </MenuItemIcon>

      </HeaderSearch>

    </Header>

    <Content>
        <ProfileCard>
          <ProfileName>
            👋 Olá, {getFirstAndLastName(userName)}. Bem-vindo!
          </ProfileName>
          <DateText>
           {formatDate(selectedDate)}
          </DateText>
          <ActivedCard>
           <Icon name="alert-outline" size={28} color="#EBB926" />
            <TextAtividade>
              Nenhuma Atividade Adicionada, informe o seu supervisor.
            </TextAtividade>
          </ActivedCard>
          <ContainerCard>
            <LineSeparator></LineSeparator>
            <PhotoLoads>Fotos não sincronizadas: 0</PhotoLoads>
          </ContainerCard>
        </ProfileCard>
    </Content>

    <Contain2>

      <CardStatus>
        <CardIcon>
          <Icon name="clock" size={28} color="#EBB926" />
        </CardIcon>
        <CardText>
          Pendentes: <CardText style={{ color: '#F6A739' }}> 0</CardText>
        </CardText>
      </CardStatus>

      <CardStatus>
        <CardIcon >
          <Icon name="check" size={28} color="#0E730B" />
        </CardIcon>
        <CardText>
          Completas: <CardText style={{ color: '#0E730B' }}> 0</CardText>
        </CardText>
      </CardStatus>

      <CardStatus>
        <CardIcon >
          <Icon name="clock" size={28} color="#E52222" />
        </CardIcon>
        <CardText>
          Justificadas: <CardText style={{ color: '#E52222' }}> 0</CardText>
        </CardText>
      </CardStatus>
    </Contain2>

  </Container>
  );
};

export default TelaHome;
