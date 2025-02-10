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

const StoreRegister = ({ navigation }: any) => {
  const [nomeLoja, setNomeLoja] = useState('');
  const [enderecoLoja, setEnderecoLoja] = useState('');
  const [localizacao, setLocalizacao] = useState<{ latitude: number; longitude: number }>({
    latitude: -15.7942,
    longitude: -47.8822,
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCapturarLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocalizacao({ latitude, longitude });
        Alert.alert('Localização capturada com sucesso!');
      },
      (error) => {
        console.error(error);
        Alert.alert('Erro ao capturar localização. Verifique as permissões do GPS.');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const handleSalvar = () => {
    if (!nomeLoja || !enderecoLoja) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Tenho que adicionar o codigo ainda para salvar
    Alert.alert('Sucesso', 'Loja cadastrada com sucesso!');
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
            <HeaderTitle>Cadastro de Loja</HeaderTitle>
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

        <LocationButton onPress={handleCapturarLocalizacao}>
          <Icon name="crosshairs-gps" size={20} color="#FF7E5F" />
          <ButtonText>Capturar Localização</ButtonText>
        </LocationButton>

        <MapContainer>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: localizacao.latitude,
              longitude: localizacao.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: localizacao.latitude,
                longitude: localizacao.longitude,
              }}
              draggable
              onDragEnd={(e) => setLocalizacao(e.nativeEvent.coordinate)}
            />
          </MapView>
        </MapContainer>

        <ButtonSave onPress={handleSalvar}>
          <Icon name="cloud-upload-outline" size={22} color="#262626" />
          <ButtonTextSave>Salvar Loja</ButtonTextSave>
        </ButtonSave>
      </Content>
    </Container>
  );
};

export default StoreRegister;
