import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useSelector } from 'react-redux';
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
import { RootState } from '../redux/store';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckIn'>;

const CheckInScreen: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  const [atividade, setAtividade] = useState<any | null>(null); // Atividade do usuário logado
  const userId = useSelector((state: RootState) => state.user.user?.id || null); // ID do usuário logado
  const atividades = useSelector((state: RootState) => state.atividades.atividades); // Atividades do Redux

  // Filtra a atividade do usuário logado
  useEffect(() => {
    const atividadeUsuario = atividades.find(
      (atividade) => atividade.usuario_responsavel === userId
    );
    setAtividade(atividadeUsuario || null);
  }, [atividades, userId]);

  const handleCheckIn = () => {
    navigation.navigate('MainIndustries'); // Navega para a tela de chekin
  };

  const handleCancel = () => {
    navigation.navigate('Route'); // Navega para a tela de roteiro
  };

  const handleJustify = () => {
    navigation.navigate('Justification'); // Navega para a tela de justificativa
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
      {atividade ? (
        <>
          <ConfirmationText>Você está em</ConfirmationText>
          <LocationName>{atividade.loja}</LocationName>
        </>
      ) : (
        <>
          <ConfirmationText>Nenhuma atividade encontrada.</ConfirmationText>
          <LocationName>Consulte seu supervisor!</LocationName>
        </>
      )}

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
