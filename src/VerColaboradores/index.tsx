import React, { useState, useEffect } from 'react';
import { Alert, Modal, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  BackButton,
  SearchBarContainer,
  SearchInput,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButtonsContainer,
  ModalButton,
  ModalButtonText,
  CardContainer,
  ProfileImage,
  CardContent,
  CollaboratorName,
  CollaboratorInfo,
  ActionButtonsContainer,
  ActionButton,
  EditModalContent,
  EditModalInput,
  EditModalButtonsContainer,
  EditModalButton,
  CancelModalButton,
} from './VerColaboradores';
import { fetchUsers, updateUserStatus } from '../services/userFetchService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'VerColaboradores'>;

type Collaborator = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cargo: string;
  cidade: string;
  estado: string;
  nivel_acesso: string;
};

const VerColaboradores: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [filteredCollaborators, setFilteredCollaborators] = useState<Collaborator[]>([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState<Collaborator | null>(null);

  const loadCollaborators = async () => {
    try {
      const data = await fetchUsers(); // Busca todos os colaboradores ativos
      if (Array.isArray(data)) {
        setCollaborators(data);
        setFilteredCollaborators(data);
      } else {
        console.error('Erro ao carregar colaboradores: ', data);
      }
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      Alert.alert('Erro', 'Não foi possível carregar os colaboradores.');
    }
  };

  useEffect(() => {
    if (searchText) {
      const filtered = collaborators.filter((collaborator) =>
        collaborator.nome.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCollaborators(filtered);
    } else {
      setFilteredCollaborators(collaborators);
    }
  }, [searchText, collaborators]);

  useEffect(() => {
    loadCollaborators();
  }, []);

  const openCollaboratorDetails = (collaborator: Collaborator) => {
    setSelectedCollaborator(collaborator);
    setModalVisible(true);
  };

  const openEditModal = (collaborator: Collaborator) => {
    setEditData(collaborator);
    setEditModalVisible(true);
  };

  const handleSaveEdit = async () => {
    if (editData) {
      try {
        // Aqui você pode chamar a função do serviço para atualizar os dados no banco
        Alert.alert('Sucesso', 'Dados do colaborador atualizados com sucesso.');
        setEditModalVisible(false);
        loadCollaborators(); // Atualiza a lista
      } catch (error) {
        console.error('Erro ao atualizar colaborador:', error);
        Alert.alert('Erro', 'Não foi possível atualizar o colaborador.');
      }
    }
  };

  const handleDelete = async (collaborator: Collaborator) => {
    Alert.alert(
      'Excluir',
      `Tem certeza de que deseja excluir o colaborador ${collaborator.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              const response = await updateUserStatus(collaborator.id, false);
              if (response.success) {
                Alert.alert('Sucesso', 'Colaborador excluído com sucesso.');
                loadCollaborators();
              } else {
                Alert.alert('Erro', 'Não foi possível excluir o colaborador.');
              }
            } catch (error) {
              console.error('Erro ao excluir colaborador:', error);
              Alert.alert('Erro', 'Ocorreu um erro ao excluir o colaborador.');
            }
          },
        },
      ]
    );
  };

  const renderCollaborator = ({ item }: { item: Collaborator }) => (
    <CardContainer onPress={() => openCollaboratorDetails(item)}>
      <ProfileImage source={require('../assets/images/avatar.png')} />
      <CardContent>
        <CollaboratorName>{item.nome}</CollaboratorName>
        <CollaboratorInfo>{item.cargo}</CollaboratorInfo>
      </CardContent>
      <ActionButtonsContainer>
        <ActionButton onPress={() => openEditModal(item)}>
          <Icon name="pencil" size={26} color="#007BFF" />
        </ActionButton>
        <ActionButton onPress={() => handleDelete(item)}>
          <Icon name="trash-can" size={26} color="#FF0000" />
        </ActionButton>
      </ActionButtonsContainer>
    </CardContainer>
  );

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={33} color="#fff" />
        </BackButton>
        <HeaderTitle>Ver Colaboradores</HeaderTitle>
      </HeaderContainer>

      <SearchBarContainer>
        <Icon name="magnify" size={24} color="#aaa" style={{ marginRight: 10 }} />
        <SearchInput
          placeholder="Pesquisar colaborador..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </SearchBarContainer>

      <FlatList
        data={filteredCollaborators}
        renderItem={renderCollaborator}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.1}
      />

      <Modal visible={isModalVisible} transparent animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Detalhes do Colaborador</ModalTitle>
            {selectedCollaborator && (
              <>
                <ModalText>Nome: {selectedCollaborator.nome}</ModalText>
                <ModalText>Email: {selectedCollaborator.email}</ModalText>
                <ModalText>Telefone: {selectedCollaborator.telefone}</ModalText>
                <ModalText>CPF: {selectedCollaborator.cpf}</ModalText>
                <ModalText>Cargo: {selectedCollaborator.cargo}</ModalText>
                <ModalText>Cidade: {selectedCollaborator.cidade}</ModalText>
                <ModalText>Estado: {selectedCollaborator.estado}</ModalText>
              </>
            )}
            <ModalButtonsContainer>
              <ModalButton onPress={() => setModalVisible(false)}>
                <ModalButtonText>Fechar</ModalButtonText>
              </ModalButton>
            </ModalButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <Modal visible={isEditModalVisible} transparent animationType="slide">
        <ModalContainer>
          <EditModalContent>
            <ModalTitle>Editar Colaborador</ModalTitle>
            {editData && (
              <>
                <EditModalInput
                  value={editData.nome}
                  onChangeText={(text) => setEditData({ ...editData, nome: text })}
                  placeholder="Nome"
                />
                <EditModalInput
                  value={editData.email}
                  onChangeText={(text) => setEditData({ ...editData, email: text })}
                  placeholder="Email"
                />
                {/* Adicione mais campos conforme necessário */}
              </>
            )}
            <EditModalButtonsContainer>
              <EditModalButton onPress={handleSaveEdit}>
                <ModalButtonText>Salvar</ModalButtonText>
              </EditModalButton>
              <CancelModalButton onPress={() => setEditModalVisible(false)}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </CancelModalButton>
            </EditModalButtonsContainer>
          </EditModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default VerColaboradores;
