import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  BackButton,
  HeaderTitle,
  OptionsContainer,
  OptionButton,
  OptionIcon,
  OptionText,
} from './Colaborador';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Collaborators'>;

const ColaboradoresScreen: React.FC<Props> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  const handleNavigateToViewColaboradores = () => {
    navigation.navigate('CriarColaboradores');
  };

  const handleNavigateToAddColaborador = () => {
    alert('Navegar para Adicionar Colaborador'); // Alterar para a navegação real quando implementada
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </BackButton>
        <HeaderTitle>Colaboradores</HeaderTitle>
      </HeaderContainer>

      {/* Opções */}
      <OptionsContainer>
        {/* Ver Colaboradores */}
        <OptionButton onPress={handleNavigateToViewColaboradores}>
          <OptionIcon>
            <Icon name="account-multiple-outline" size={40} color="#FF7E5F" />
          </OptionIcon>
          <OptionText>Ver Colaboradores</OptionText>
        </OptionButton>

        {/* Adicionar Colaborador */}
        <OptionButton onPress={handleNavigateToAddColaborador}>
          <OptionIcon>
            <Icon name="account-plus-outline" size={40} color="#FF7E5F" />
          </OptionIcon>
          <OptionText>Adicionar Novo Colaborador</OptionText>
        </OptionButton>
      </OptionsContainer>
    </Container>
  );
};

export default ColaboradoresScreen;
