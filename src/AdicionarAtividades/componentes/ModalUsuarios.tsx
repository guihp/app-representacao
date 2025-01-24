import React, { useState, useEffect } from 'react';
import { Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  ModalContainer,
  ModalContent,
  SearchBarContainer,
  SearchInput,
  CardContainer,
  ProfileImage,
  CardContent,
  CollaboratorName,
  CollaboratorInfo,
  CloseButton,
} from './Styles/ModalUsuarioStyles';
import { fetchUsers } from '../../services/userFetchService';

type User = {
  id: number;
  nome: string;
  cargo: string;
  email: string;
};

type ModalUsuariosProps = {
  visible: boolean;
  onClose: () => void;
  onSelectUser: (user: User) => void;
};

const ModalUsuarios: React.FC<ModalUsuariosProps> = ({
  visible,
  onClose,
  onSelectUser,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState('');

  // Buscar os usuários ao abrir o modal
  useEffect(() => {
    if (visible) {
      const loadUsers = async () => {
        const response = await fetchUsers();
        if (Array.isArray(response)) {
          setUsers(response);
          setFilteredUsers(response);
        }
      };
      loadUsers();
    }
  }, [visible]);

  // Filtrar usuários ao digitar na barra de busca
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchText, users]);

  // Renderizar o usuário
  const renderUser = ({ item }: { item: User }) => (
    <CardContainer onPress={() => onSelectUser(item)}>
      <ProfileImage
        source={require('../../assets/images/avatar.png')
        }
      />
      <CardContent>
        <CollaboratorName>{item.nome}</CollaboratorName>
        <CollaboratorInfo>{item.cargo}</CollaboratorInfo>
      </CardContent>
    </CardContainer>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalContainer>
          <TouchableWithoutFeedback>
            <ModalContent>

              {/* Barra de pesquisa */}
              <SearchBarContainer>
                <Icon
                  name="magnify"
                  size={24}
                  color="#aaa"
                  style={{ marginRight: 10 }}
                />
                <SearchInput
                  placeholder="Pesquisar usuário..."
                  value={searchText}
                  onChangeText={setSearchText}
                />
              {/* Botão de fechar */}
              <CloseButton onPress={onClose}>
                <Icon name="close" size={24} color="#333" />
              </CloseButton>
              </SearchBarContainer>

              {/* Lista de usuários */}
              <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUser}
              />
            </ModalContent>
          </TouchableWithoutFeedback>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalUsuarios;
