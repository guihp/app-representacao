import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  HeaderSearch,
  HeaderText,
  BackButton,
  HeaderTitle,
  TrainingCard,
  TrainingName,
  ActionButton,
  ActionButtonText,
  ActionButtonIcon,
  TrainingContainer,
  ButtonSave,
  ButtonTextSave,
  ButtonContainer,
} from './styles';
import { RootState, AppDispatch } from '../redux/store';
import { fetchTrainings } from '../redux/actions/treinamentoActions';
import * as FileSystem from 'expo-file-system';
import * as Linking from 'expo-linking';
import { MenuItemIcon } from '../home/menu/menuStyles';

const Training: React.FC = ({ navigation }: any) => {
  const dispatch: AppDispatch = useDispatch();

  // Obtém a lista de treinamentos do Redux
  const { trainings, loading, error } = useSelector((state: RootState) => state.treinamento);

  // Fetch treinamentos ao carregar a página
  useEffect(() => {
    dispatch(fetchTrainings());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user.user);
  const [count, setCount] = useState(1);

  // Lidar com download de PDF
  const handleDownloadPDF = async (pdfUrl: string, title: string) => {
    try {
      const uri = `${FileSystem.documentDirectory}${title}.pdf`;

      const fileExists = await FileSystem.getInfoAsync(uri);

      if (fileExists.exists) {
        Alert.alert('PDF já baixado', 'Deseja abrir o arquivo?', [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Abrir',
            onPress: () => Linking.openURL(uri),
          },
        ]);
        return;
      }

      const downloadResumable = FileSystem.createDownloadResumable(pdfUrl, uri);
      const downloadResult = await downloadResumable.downloadAsync();

      if (downloadResult && downloadResult.uri) {
        Alert.alert('Sucesso', 'PDF baixado com sucesso!', [
          {
            text: 'Abrir',
            onPress: () => Linking.openURL(downloadResult.uri),
          },
        ]);
      } else {
        throw new Error('Download falhou. Nenhum URI retornado.');
      }
    } catch (error) {
      console.error('Erro ao baixar o PDF:', error);
      Alert.alert('Erro', 'Falha ao baixar o PDF.');
    }
  };

  

  // Lidar com abertura de vídeo no YouTube
  const handleOpenVideo = async (videoUrl: string) => {
    try {
      const supported = await Linking.canOpenURL(videoUrl);
      if (supported) {
        await Linking.openURL(videoUrl);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o link.');
      }
    } catch (error) {
      console.error('Erro ao abrir o link:', error);
      Alert.alert('Erro', 'Ocorreu um problema ao abrir o link.');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };



  // Renderiza cada item da lista
  const renderTraining = ({ item }: any) => (
    <TrainingCard>
      <TrainingName>{item.titulo}</TrainingName>
      <ActionButton
        onPress={() =>
          item.tipo === 'PDF'
            ? handleDownloadPDF(item.link_material, item.titulo)
            : handleOpenVideo(item.link_material)
        }
      >
        {/* Ícone correspondente */}
        <ActionButtonIcon>
          <Icon
            name={item.tipo === 'PDF' ? 'file-pdf-box' : 'youtube'}
            size={20}
            color="#EE7811"
          />
        </ActionButtonIcon>
        {/* Texto do botão */}
        <ActionButtonText>
          {item.tipo === 'PDF' ? 'Baixar PDF' : 'Abrir Vídeo'}
        </ActionButtonText>
      </ActionButton>
    </TrainingCard>
  );

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
            <HeaderTitle>Treinamento</HeaderTitle>
        </HeaderText>

      </Header>

      <TrainingContainer>

        {/* Lista de treinamentos */}
        {loading ? (
          <ActionButtonText>Carregando...</ActionButtonText>
        ) : error ? (
          <ActionButtonText>Erro ao carregar os treinamentos.</ActionButtonText>
        ) : (
          <FlatList
            data={trainings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTraining}
            contentContainerStyle={{ paddingBottom: 20 }} // Evita problemas de visualização
          />
        )}

      </TrainingContainer>

      <ButtonContainer>
        <ButtonSave>
            <ButtonTextSave>Solicitar treinamento</ButtonTextSave>
        </ButtonSave>
      </ButtonContainer>

    </Container>
  );
};

export default Training;
