import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import ModalSelector from 'react-native-modal-selector';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  InputField,
  CameraButton,
  PhotoContainer,
  PhotoPreview,
  ActionButton,
  ActionButtonText,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalButtonsContainer,
  ModalButton,
  ModalButtonText,
} from './styles';
import * as ImageManipulator from 'expo-image-manipulator';

const options = [
  { key: 'MA', label: 'Maranhão (MA)' },
  { key: 'PI', label: 'Piauí (PI)' },
  { key: 'PA', label: 'Pará (PA)' },
];

const FazerPesquisa: React.FC = ({ navigation }: any) => {
  const [storeName, setStoreName] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [selectedUf, setSelectedUf] = useState('MA');
  const [photo, setPhoto] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOpenCamera = async () => {
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
        [{ resize: { width: 800, height: 600 } }], // Altura e largura
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }, 
      );
      return manipulatedImage.uri; // Retorna o caminho da imagem redimensionada
    } catch (error) {
      console.error('Erro ao redimensionar a imagem:', error);
      return uri; // Retorna a URI original em caso de erro
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

  const handleSendData = async () => {
    if (!photo) {
      Alert.alert('Erro', 'Nenhuma foto para enviar!');
      return;
    }

    const base64Photo = await convertUriToBase64(photo);

    if (!base64Photo) {
      Alert.alert('Erro', 'Falha ao processar a imagem.');
      return;
    }

    try {
      const response = await fetch(
        'https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/Fazer-pesquisaAppFe',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            storeName,
            supplierName,
            selectedUf,
            photo: base64Photo,
          }),
        }
      );

      if (response.ok) {
        Alert.alert('Sucesso', 'Dados e foto enviados com sucesso!');
      } else {
        console.error('Erro no servidor:', await response.text());
        Alert.alert('Erro', 'Falha ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      Alert.alert('Erro', 'Falha ao enviar os dados para o servidor.');
    }
  };

  const handleConfirmPhoto = () => {
    setIsModalVisible(true);
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={30} color="#FFF" />
        </BackButton>
        <HeaderTitle>Fazer Pesquisa</HeaderTitle>
      </Header>

      {/* Inputs */}
      <InputField
        placeholder="Nome da Loja"
        value={storeName}
        onChangeText={setStoreName}
      />
      <InputField
        placeholder="Nome do Fornecedor"
        value={supplierName}
        onChangeText={setSupplierName}
      />

      {/* Dropdown */}
      <ModalSelector
        data={options}
        initValue="Selecione o estado"
        onChange={(option) => setSelectedUf(option.key)}
        style={{ width: '90%', margin: 10, alignSelf: 'center' }}
        initValueTextStyle={{ color: '#333' }}
        selectTextStyle={{ color: '#333' }}
        optionTextStyle={{ color: '#333' }}
      />

      {/* Botão para abrir câmera */}
      <CameraButton onPress={handleOpenCamera}>
        <ActionButtonText>Abrir Câmera</ActionButtonText>
      </CameraButton>

      {/* Pré-visualização da foto */}
      {photo && (
        <PhotoContainer>
          <PhotoPreview source={{ uri: photo }} />
          <ActionButton onPress={handleConfirmPhoto}>
            <ActionButtonText>Enviar</ActionButtonText>
          </ActionButton>
        </PhotoContainer>
      )}

      {/* Modal de confirmação */}
      {isModalVisible && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>A foto está legível?</ModalTitle>
            <ModalButtonsContainer>
              <ModalButton confirm onPress={handleSendData}>
                <ModalButtonText>Sim</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={() => setIsModalVisible(false)}>
                <ModalButtonText>Não</ModalButtonText>
              </ModalButton>
            </ModalButtonsContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </Container>
  );
};

export default FazerPesquisa;
