import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  BackIcon,
  HeaderText,
  Label,
  SelectContainer,
  PhotoButton,
  PhotoButtonText,
  TextArea,
  SubmitButton,
  SubmitButtonText,
} from './justificativastyles';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Justification'>;

const JustificationScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [observation, setObservation] = useState<string>('');

  const handleTakePhoto = () => {
    Alert.alert('Foto', 'Abrindo a câmera para tirar foto.');
  };

  const handleSubmit = () => {
    if (!selectedReason) {
      Alert.alert('Erro', 'Por favor, selecione o motivo.');
      return;
    }
    if (!observation.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o campo de observação.');
      return;
    }
    Alert.alert('Enviado', 'Justificativa enviada com sucesso!');
    navigation.goBack(); 
  };

  const handleHome = () => {
    navigation.navigate('Home'); 
  };


  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderContainer>
        <BackIcon onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={32} color="#fff" />
        </BackIcon>
        <HeaderText>Justificar</HeaderText>
      </HeaderContainer>

      {/* Seletor de motivo */}
      <Label>Motivo*:</Label>
      <SelectContainer>
        <Picker
          selectedValue={selectedReason}
          onValueChange={(itemValue) => setSelectedReason(itemValue)}
          style={{ flex: 1 }}
        >
          <Picker.Item label="Selecione o motivo" value={null} />
          <Picker.Item label="Doença" value="Doença" />
          <Picker.Item label="Problemas pessoais" value="Problemas pessoais" />
          <Picker.Item label="Trânsito" value="Trânsito" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>
      </SelectContainer>

      {/* Botão de tirar foto */}
      <Label>Foto:</Label>
      <PhotoButton onPress={handleTakePhoto}>
        <Icon name="camera" size={24} color="#ff7e5f" />
        <PhotoButtonText>Tirar foto</PhotoButtonText>
      </PhotoButton>

      {/* Campo de observação */}
      <Label>Observação:</Label>
      <TextArea
        multiline
        numberOfLines={4}
        placeholder="Escreva aqui sua observação"
        value={observation}
        onChangeText={setObservation}
      />

      {/* Botão de envio */}
      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default JustificationScreen;
