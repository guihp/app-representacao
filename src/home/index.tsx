import React, { useState } from 'react';
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
import Menu from './menu/index'; // Import do Menu

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu

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
    navigation.navigate('Route'); // Navega para a tela "Route"
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Alterna a visibilidade do menu
  };

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
        <WelcomeText>Olá, JORGE</WelcomeText>
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

        <DateSubText>Lojas do dia: </DateSubText>
        <LojaDay>Supermercado Mateus Cohama</LojaDay>
        <DateSubText>Fotos não sincronizadas: 0</DateSubText>

        <StatusCard>
          <StatusItem>
            <StatusTitle style={{ color: 'red' }}>2</StatusTitle>
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

      {/* Renderiza o menu lateral */}
      {isMenuVisible && <Menu onClose={toggleMenu} />}

    </View>
  );
};

export default HomeScreen;
