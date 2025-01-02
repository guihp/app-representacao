import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import ImageResizer from 'react-native-image-resizer';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  ActivitySection,
  ActivityTitle,
  PhotoButton,
  PhotoInfo,
  PhotoInfoText,
  SendButton,
  SendButtonText,
} from './styles';

const ActivityPage: React.FC = () => {
  const [photosBefore, setPhotosBefore] = useState<string | null>(null);
  const [photosAfter, setPhotosAfter] = useState<string | null>(null);

  const handleOpenCamera = async (setPhoto: React.Dispatch<React.SetStateAction<string | null>>) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Erro', 'Permissão para acessar a câmera é necessária.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 0.3,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const resizedPhotoUri = await resizeImage(result.assets[0].uri);
      setPhoto(resizedPhotoUri);
    }
  };

  const resizeImage = async (uri: string) => {
    try {
      const resizedImage = await ImageResizer.createResizedImage(
        uri,
        800,
        600,
        'JPEG',
        70,
        0
      );
      return resizedImage.uri;
    } catch (error) {
      console.error('Erro ao redimensionar a imagem:', error);
      return uri;
    }
  };

  const convertUriToBase64 = async (uri: string) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return base64;
    } catch (error) {
      console.error('Erro ao converter imagem para Base64:', error);
      return null;
    }
  };

  const handleSend = async () => {
    if (!photosBefore || !photosAfter) {
      Alert.alert('Erro', 'Você precisa adicionar ao menos uma foto antes e uma depois.');
      return;
    }

    const base64Before = await convertUriToBase64(photosBefore);
    const base64After = await convertUriToBase64(photosAfter);

    if (!base64Before || !base64After) {
      Alert.alert('Erro', 'Falha ao processar as imagens.');
      return;
    }

    try {
      const response = await fetch('https://seu-servidor.com/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photosBefore: base64Before,
          photosAfter: base64After,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Fotos enviadas com sucesso!');
      } else {
        console.error('Erro no servidor:', await response.text());
        Alert.alert('Erro', 'Falha ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      Alert.alert('Erro', 'Falha ao enviar os dados para o servidor.');
    }
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton>
          <Icon name="arrow-left" size={28} color="#ffffff" />
        </BackButton>
        <HeaderTitle>Antes e Depois</HeaderTitle>
      </Header>

      {/* Atividade 1 */}
      <ActivitySection>
        <ActivityTitle>1 - Foto Antes *</ActivityTitle>
        <PhotoButton onPress={() => handleOpenCamera(setPhotosBefore)}>
          <Icon name="camera" size={48} color="#fff" />
        </PhotoButton>
        <PhotoInfo>
          <PhotoInfoText>
            Total de fotos: {photosBefore ? '1' : '0'}
          </PhotoInfoText>
          <PhotoInfoText>Mínimo de fotos: 1</PhotoInfoText>
        </PhotoInfo>
      </ActivitySection>

      {/* Atividade 2 */}
      <ActivitySection>
        <ActivityTitle>2 - Foto Depois *</ActivityTitle>
        <PhotoButton onPress={() => handleOpenCamera(setPhotosAfter)}>
          <Icon name="camera" size={48} color="#fff" />
        </PhotoButton>
        <PhotoInfo>
          <PhotoInfoText>
            Total de fotos: {photosAfter ? '1' : '0'}
          </PhotoInfoText>
          <PhotoInfoText>Mínimo de fotos: 1</PhotoInfoText>
        </PhotoInfo>
      </ActivitySection>

      {/* Botão de enviar */}
      <SendButton onPress={handleSend}>
        <SendButtonText>Enviar</SendButtonText>
      </SendButton>
    </Container>
  );
};

export default ActivityPage;
