import React, { useState } from 'react';
import { Alert, Modal, ListRenderItem, FlatList, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  BackButton,
  SearchBarContainer,
  SearchInput,
  CollaboratorList,
  CardContainer,
  ProfileImage,
  CardContent,
  CollaboratorName,
  CollaboratorInfo,
  ActionButtonsContainer,
  ActionButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButtonsContainer,
  ModalButton,
  ModalButtonText,
} from './VerColaboradores';
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
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Dados fictícios
  const [collaborators, setCollaborators] = useState<Collaborator[]>([
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(99) 91234-5678',
      cpf: '123.456.789-01',
      cargo: 'Promotor',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      telefone: '(99) 92345-6789',
      cpf: '987.654.321-09',
      cargo: 'Gerente',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    // Replicando dados para simular rolagem
    {
      id: 3,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(99) 91234-5678',
      cpf: '123.456.789-01',
      cargo: 'Promotor',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    {
      id: 4,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      telefone: '(99) 92345-6789',
      cpf: '987.654.321-09',
      cargo: 'Gerente',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    {
      id: 5,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(99) 91234-5678',
      cpf: '123.456.789-01',
      cargo: 'Promotor',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    {
      id: 6,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      telefone: '(99) 92345-6789',
      cpf: '987.654.321-09',
      cargo: 'Gerente',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
    {
      id: 7,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(99) 91234-5678',
      cpf: '123.456.789-01',
      cargo: 'Promotor',
      cidade: 'São Luís',
      estado: 'MA',
      nivel_acesso: 'Tela Padrão Promotor',
    },
  ]);

  // Função para filtrar colaboradores
  const filteredCollaborators = collaborators.filter((collaborator) =>
    collaborator.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função para abrir os detalhes do colaborador no modal
  const openCollaboratorDetails = (collaborator: Collaborator) => {
    setSelectedCollaborator(collaborator);
    setModalVisible(true);
  };

  // Função para excluir colaborador (apenas exibe alerta por enquanto)
  const handleDelete = (collaboratorId: number) => {
    Alert.alert('Excluir', `Deseja excluir o colaborador de ID ${collaboratorId}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => Alert.alert('Colaborador excluído (simulação)') },
    ]);
  };

  // Renderizando cada card
  const renderCollaborator = ({ item }: { item: Collaborator }) => (
    <CardContainer onPress={() => openCollaboratorDetails(item)}>
      <ProfileImage source={require('../assets/images/avatar.png')} />
      <CardContent>
        <CollaboratorName>{item.nome}</CollaboratorName>
        <CollaboratorInfo>{item.cargo}</CollaboratorInfo>
      </CardContent>
      <ActionButtonsContainer>
        <ActionButton onPress={() => Alert.alert('Editar', 'Funcionalidade em desenvolvimento')}>
          <Icon name="pencil" size={26} color="#007BFF" />
        </ActionButton>
        <ActionButton onPress={() => handleDelete(item.id)}>
          <Icon name="trash-can" size={26} color="#FF0000" />
        </ActionButton>
      </ActionButtonsContainer>
    </CardContainer>
  );

  return (
    <Container>
      {/* Header com botão de voltar */}
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={33} color="#fff" />
        </BackButton>
        <HeaderTitle>Ver Colaboradores</HeaderTitle>
      </HeaderContainer>

      {/* Barra de Pesquisa */}
      <SearchBarContainer>
        <Icon name="magnify" size={24} color="#aaa" style={{ marginRight: 10 }} />
        <SearchInput
          placeholder="Pesquisar colaborador..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </SearchBarContainer>

      {/* Lista de Colaboradores */}
      <FlatList
        data={filteredCollaborators}
        renderItem={renderCollaborator}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.1} // Simulação de rolagem infinita
      />

      {/* Modal de Detalhes */}
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
    </Container>
  );
};

export default VerColaboradores;
