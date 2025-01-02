import React, { useState, useEffect } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  BackButton,
  HeaderTitle,
  ContentContainer,
  CardContainer,
  CompanyName,
  RemoveButton,
  ActionContainer,
  ActionButton,
  ActionButtonText,
} from './industriasStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'MainIndustries'>;

const MainIndustriesScreen: React.FC<Props> = ({ navigation }) => {
  const [industries, setIndustries] = useState<any[]>([]);

  // Obtém o ID do usuário logado
  const userId = useSelector((state: RootState) => state.user.user?.id || null);
  const atividades = useSelector((state: RootState) => state.atividades.atividades);

  // Filtra as atividades para pegar as indústrias associadas ao usuário logado
  useEffect(() => {
    const filteredIndustries = atividades
      .filter((atividade) => atividade.usuario_responsavel === userId)
      .map((atividade) => ({
        id: atividade.id,
        name: atividade.industria || 'Indústria não especificada',
        status: 'incompleto', // Status inicial para cada indústria
      }));
    setIndustries(filteredIndustries);
  }, [atividades, userId]);

  const handleBack = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  const navigateToActivityPage = () => {
    navigation.navigate('ActivityPage');
  };

  const toggleStatus = (id: string) => {
    setIndustries((prevIndustries) =>
      prevIndustries.map((industry) =>
        industry.id === id
          ? { ...industry, status: industry.status === 'completo' ? 'incompleto' : 'completo' }
          : industry
      )
    );
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={33} color="#fff" />
        </BackButton>
        <HeaderTitle>Indústrias</HeaderTitle>
      </HeaderContainer>

      {/* Conteúdo principal */}
      <ContentContainer>
        {industries.map((industry) => (
          <CardContainer key={industry.id} onPress={navigateToActivityPage}>
            <CompanyName>{industry.name}</CompanyName>
            <RemoveButton
              status={industry.status} // Passa o status atual (incompleto/completo)
              onPress={() => toggleStatus(industry.id)}
            >
              <Icon
                name={industry.status === 'completo' ? 'check' : 'close'}
                size={24}
                color="#fff"
              />
            </RemoveButton>
          </CardContainer>
        ))}
      </ContentContainer>

      {/* Botões de ação */}
      <ActionContainer>
        <ActionButton color="#FF3D00" onPress={() => navigation.navigate('Justification')}>
          <ActionButtonText>Justificar</ActionButtonText>
        </ActionButton>
        <ActionButton color="#FFA500" onPress={() => navigation.navigate('Justification')}>
          <ActionButtonText>Check-out</ActionButtonText>
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

export default MainIndustriesScreen;
