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
import { fetchStoresService } from '../../services/storeservices';

type store = {
  id: number;
  Nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
  criado_em: string;
};

type ModalSupermercadosProps = {
  visible: boolean;
  onClose: () => void;
  onSelectLoja: (loja: store) => void;
};

const ModalSupermercados: React.FC<ModalSupermercadosProps> = ({
  visible,
  onClose,
  onSelectLoja,
}) => {
  const [supermarkets, setSupermarkets] = useState<store[]>([]);
  const [filteredSupermarkets, setFilteredSupermarkets] = useState<store[]>([]);
  const [searchText, setSearchText] = useState('');

  // Buscar os supermercados ao abrir o modal
  useEffect(() => {
    if (visible) {
      const loadSupermarkets = async () => {
        const response = await fetchStoresService(); // Serviço para buscar os supermercados
        if (Array.isArray(response)) {
          setSupermarkets(response);
          setFilteredSupermarkets(response);
        }
      };
      loadSupermarkets();
    }
  }, [visible]);

  // Filtrar supermercados ao digitar na barra de busca
  useEffect(() => {
    const filtered = supermarkets.filter((supermarket) => {
      const nome = supermarket.Nome || ''; // Garante que 'nome' nunca será undefined ou null
      return nome.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredSupermarkets(filtered);
  }, [searchText, supermarkets]);

  // Renderizar o supermercado
  const renderSupermarket = ({ item }: { item: store }) => (
    <CardContainer onPress={() => onSelectLoja(item)}>
      <ProfileImage
        source={require('../../assets/images/loja.png')}
      />
      <CardContent>
        <CollaboratorName>{item.Nome}</CollaboratorName>
        <CollaboratorInfo>{item.endereco}</CollaboratorInfo>
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
                  placeholder="Pesquisar supermercado..."
                  value={searchText}
                  onChangeText={setSearchText}
                />
                {/* Botão de fechar */}
                <CloseButton onPress={onClose}>
                  <Icon name="close" size={24} color="#333" />
                </CloseButton>
              </SearchBarContainer>

              {/* Lista de supermercados */}
              <FlatList
                data={filteredSupermarkets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderSupermarket}
              />
            </ModalContent>
          </TouchableWithoutFeedback>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalSupermercados;
