import React from 'react';
import { Alert, View } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import {
  Container,
  HeaderText,
  HeaderSubtitle,
  ConfirmationText,
  LocationName,
  LocationAddress,
  ActionButton,
  ActionButtonText,
  CancelButton,
  CancelButtonText,
  JustifyText,
} from './chekinstyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckIn'>;

const CheckInScreen: React.FC<Props> = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_400Regular,
    });
  


  const handleCheckIn = () => {
    Alert.alert('Check-In', 'Check-In realizado com sucesso!');
  };

  const handleCancel = () => {
    navigation.navigate('Route'); // Navega para a tela de roteiro
  };

  const handleJustify = () => {
    Alert.alert('Justificar', 'Abrindo a tela de justificativa.');
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <View
        style={{
          backgroundColor: '#FF966C',
          width: '100%',
          height: 350,
          paddingVertical: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <HeaderText>Faça Check-in</HeaderText>
        <HeaderSubtitle>e inicie as tarefas</HeaderSubtitle>
      </View>

      {/* Informações de confirmação */}
      <ConfirmationText>Você está em</ConfirmationText>
      <LocationName>MATEUS SUPERMERCADOS S.A. - COHATRAC?</LocationName>
      <LocationAddress>AV. A ,QD 06</LocationAddress>

      {/* Botões de ação */}
      <ActionButton onPress={handleCheckIn}>
        <ActionButtonText>Fazer Check-in</ActionButtonText>
      </ActionButton>

      <CancelButton onPress={handleCancel}>
        <CancelButtonText>Cancelar</CancelButtonText>
      </CancelButton>

      {/* Justificativa */}
      <JustifyText onPress={handleJustify}>Justificar</JustifyText>
    </Container>
  );
};

export default CheckInScreen;
