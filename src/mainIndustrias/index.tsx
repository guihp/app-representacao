import React, { useState } from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'MainIndustries'>;

type Company = {
  id: string;
  name: string;
  status: 'incompleto' | 'completo';
};

const MainIndustriesScreen: React.FC<Props> = ({ navigation }) => {
  const [companies, setCompanies] = useState<Company[]>([
    { id: '1', name: 'Bendo', status: 'incompleto' },
    { id: '2', name: 'Rupers', status: 'incompleto' },
    { id: '3', name: 'Predilecta', status: 'incompleto' },
  ]);

  const handleBack = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  const toggleStatus = (id: string) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === id
          ? { ...company, status: company.status === 'completo' ? 'incompleto' : 'completo' }
          : company
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
        <HeaderTitle>Industria</HeaderTitle>
      </HeaderContainer>

      {/* Conteúdo principal */}
      <ContentContainer>
        {companies.map((company) => (
          <CardContainer key={company.id}>
            <CompanyName>{company.name}</CompanyName>
            <RemoveButton
              status={company.status} // Passa o status atual (incompleto/completo)
              onPress={() => toggleStatus(company.id)}
            >
              <Icon
                name={company.status === 'completo' ? 'check' : 'close'}
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
