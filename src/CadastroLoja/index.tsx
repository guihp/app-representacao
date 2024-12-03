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
  InputField,
  LocationButton,
  ButtonText,
  MapContainer,
} from './styles';

const CadastroLoja = ({ navigation }: any) => {
  const [nomeLoja, setNomeLoja] = useState('');
  const [enderecoLoja, setEnderecoLoja] = useState('');
  const [localizacao, setLocalizacao] = useState<{ latitude: number; longitude: number }>({
    latitude: -15.7942, // Latitude inicial (Brasília como exemplo)
    longitude: -47.8822, // Longitude inicial
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

    // Simular envio ao banco de dados
    Alert.alert('Sucesso', 'Loja cadastrada com sucesso!');
    navigation.goBack(); // Voltar à página anterior
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </BackButton>
        <HeaderTitle>Cadastro de Loja</HeaderTitle>
      </Header>

      {/* Conteúdo */}
      <Content>
        <InputField
          placeholder="Nome da Loja"
          value={nomeLoja}
          onChangeText={setNomeLoja}
        />
        <InputField
          placeholder="Endereço da Loja"
          value={enderecoLoja}
          onChangeText={setEnderecoLoja}
        />

        <LocationButton onPress={handleCapturarLocalizacao}>
          <Icon name="crosshairs-gps" size={24} color="#fff" />
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

        <LocationButton onPress={handleSalvar}>
          <Icon name="content-save" size={24} color="#fff" />
          <ButtonText>Salvar Loja</ButtonText>
        </LocationButton>
      </Content>
    </Container>
  );
};

export default CadastroLoja;
