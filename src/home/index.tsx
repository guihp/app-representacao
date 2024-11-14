import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, View } from 'react-native';
import {
  HeaderContainer,
  LogoContainer,
  WelcomeText,
  DateSubText,
  StatusCard,
  StatusItem,
  StatusTitle,
  StatusLabel,
  ViewRouteButton,
  ViewRouteText,
  FloatingButton,
} from './HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const handleRoutePress = () => {
    Alert.alert('Roteiro', 'Navegando para o roteiro!');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar style="auto" />

      {/* Header com fundo gradiente */}
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
          <Image source={require('../assets/images/logo.png')} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        </LogoContainer>
        <WelcomeText>Olá, JORGE</WelcomeText>
        <DateSubText>Seja bem-vindo(a)</DateSubText>
      </LinearGradient>

      {/* Conteúdo abaixo do cabeçalho */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <DateSubText>Lojas do dia</DateSubText>
        <DateSubText>Fotos não sincronizadas: 0</DateSubText>

        {/* Card de status */}
        <StatusCard>
          <StatusItem>
            <StatusTitle>2</StatusTitle>
            <StatusLabel>Pendentes</StatusLabel>
          </StatusItem>
          <StatusItem>
            <StatusTitle>0</StatusTitle>
            <StatusLabel>Justificativa</StatusLabel>
          </StatusItem>
          <StatusItem>
            <StatusTitle>0</StatusTitle>
            <StatusLabel>Completa</StatusLabel>
          </StatusItem>
        </StatusCard>

        {/* Botão "Ver Roteiro" */}
        <ViewRouteButton onPress={handleRoutePress}>
          <ViewRouteText>VER ROTEIRO</ViewRouteText>
        </ViewRouteButton>
      </View>

      {/* Botão flutuante */}
      <FloatingButton onPress={() => Alert.alert('Menu', 'Acessando o menu!')}>
        <Icon name="menu" size={30} color="#fff" />
      </FloatingButton>
    </View>
  );
};

export default HomeScreen;
