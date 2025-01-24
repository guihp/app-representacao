import React, { useState } from 'react';
import { Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { useDispatch } from 'react-redux';
import { updateIndustryStatus } from '../redux/actions/industriaActions';
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

type RootStackParamList = {
  ActivityPage: { industryName: string; industryId: string };
};

// Tipagem das props
type Props = {
  route: RouteProp<RootStackParamList, 'ActivityPage'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'ActivityPage'>;
};

const ActivityPage: React.FC<Props> = ({ route, navigation }) => {
  const [photosBefore, setPhotosBefore] = useState<string | null>(null);
  const [photosAfter, setPhotosAfter] = useState<string | null>(null);
  const { industryName, industryId } = route.params;
  const dispatch = useDispatch();

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
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 800, height: 600 } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
      return manipulatedImage.uri;
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
      const response = await fetch('https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/haribo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          industryName,
          photosBefore: base64Before,
          photosAfter: base64After,
        }),
      });

      if (response.ok) {
        dispatch(updateIndustryStatus(industryId, 'completo')); // Atualiza o status no Redux
        Alert.alert('Sucesso', 'Fotos enviadas com sucesso!');
        navigation.goBack();
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
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#ffffff" />
        </BackButton>
        <HeaderTitle>{industryName}</HeaderTitle>
      </Header>

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

      <SendButton onPress={handleSend}>
        <SendButtonText>Enviar</SendButtonText>
      </SendButton>
    </Container>
  );
};

export default ActivityPage;
