import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import ModalSelector from 'react-native-modal-selector';
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
  HeaderText,
  HeaderSearch,
  ButtonSave,
  ButtonTextSave,
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
import { MenuItemIcon } from '../home/menu/menuStyles';

const options = [
  { key: 'MA', label: 'Maranhão (MA)' },
  { key: 'PI', label: 'Piauí (PI)' },
  { key: 'PA', label: 'Pará (PA)' },
];


const Queries: React.FC = ({ navigation }: any) => {
 
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

        <HeaderSearch>

            <MenuItemIcon>
                <Icon name="menu" size={34} color="#313131" />
            </MenuItemIcon>

        </HeaderSearch>

        <HeaderText>
                <BackButton onPress={handleBack}>
                    <Icon name="arrow-left" size={28} color="#313131" />
                </BackButton>
            <HeaderTitle>Fazer Pesquisa</HeaderTitle>
        </HeaderText>

      </Header>

      {/* Conteúdo */}
      <Content>

        <ContainerInputs>

          <InputContainer>
            <LabelFloat>Nome da loja</LabelFloat>
            <Input
              placeholder="Digite o nome da loja."
              value={storeName}
              onChangeText={setStoreName}
            />
          </InputContainer>

          <InputContainer>
            <LabelFloat>Endereço da Loja</LabelFloat>
            <Input
              placeholder="Digite o endereço da loja."
              value={supplierName}
              onChangeText={setSupplierName}
            />
          </InputContainer>

        </ContainerInputs>

        <ModalSelector
      data={options}
      initValue="Selecionar UF"
      onChange={(option) => setSelectedUf(option.key)}
      style={{  
        height: 42,
        borderWidth: 1,
        borderColor: '#313131',
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '100%'
      }}
      initValueTextStyle={{ color: '#333' }}
      selectTextStyle={{ color: '#333' }}
      optionTextStyle={{ color: '#333' }}
    />

        <ButtonSave onPress={handleOpenCamera}>
          <Icon name="image" size={22} color="#313131" />
          <ButtonTextSave>Abrir Câmera</ButtonTextSave>
        </ButtonSave>

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

      </Content>
    </Container>
  );
};

export default Queries;
