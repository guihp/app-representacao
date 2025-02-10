import React, { useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  Content,
  ContainerInputs,
  InputContainer,
  Input,
  LabelFloat,
  LocationButton,
  ButtonText,
  MapContainer,
  HeaderText,
  HeaderSearch,
  ProfileContainer,
  ProfileImage,
  ButtonSave,
  ButtonTextSave,
} from './styles';
import { MenuItemIcon } from '../home/menu/menuStyles';

const Queries = ({ navigation }: any) => {
 

  const handleBack = () => {
    navigation.goBack();
  };


  return (
    <Container>
      {/* Header */}
      <Header>

        <HeaderSearch>

            <MenuItemIcon>
                <Icon name="menu" size={34} color="#313131" />
            </MenuItemIcon>

        </HeaderSearch>

        <HeaderText>
                <BackButton onPress={handleBack}>
                    <Icon name="arrow-left" size={28} color="#313131" />
                </BackButton>
            <HeaderTitle>Fazer Pesquisa</HeaderTitle>
        </HeaderText>

      </Header>

      {/* Conteúdo */}
      <Content>

        <ContainerInputs>

          <InputContainer>
            <LabelFloat>Nome da loja</LabelFloat>
            <Input
              placeholder="Digite o nome da loja."
            />
          </InputContainer>

          <InputContainer>
            <LabelFloat>Endereço da Loja</LabelFloat>
            <Input
              placeholder="Digite o endereço da loja."
            />
          </InputContainer>

        </ContainerInputs>

        <LocationButton>
          <ButtonText>Selecionar Estado</ButtonText>
        </LocationButton>

        <ButtonSave>
          <Icon name="image" size={22} color="#313131" />
          <ButtonTextSave>Abrir Câmera</ButtonTextSave>
        </ButtonSave>
      </Content>
    </Container>
  );
};

export default Queries;
