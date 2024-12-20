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
  CloseButton,
} from './Styles/ModalUsuarioStyles';
import { fetchIndustriaService } from '../../services/industriaservices';

type Industrias = {
  id: number;
  Nome: string;
};

type ModalIndustriasProps = {
  visible: boolean;
  onClose: () => void;
  onSelectLoja: (Industria: Industrias) => void;
};

const ModalIndustrias: React.FC<ModalIndustriasProps> = ({
  visible,
  onClose,
  onSelectLoja,
}) => {
  const [industria, setIndustria] = useState<Industrias[]>([]);
  const [filteredIndustria, setFilteredIndustria] = useState<Industrias[]>([]);
  const [searchText, setSearchText] = useState('');

  // Buscar as industrias ao abrir o modal
  useEffect(() => {
    if (visible) {
      const loadIndustria = async () => {
        const response = await fetchIndustriaService(); // Serviço para buscar as industrias
        if (Array.isArray(response)) {
            setIndustria(response);
          setFilteredIndustria(response);
        }
      };
      loadIndustria();
    }
  }, [visible]);

  // Filtrar industrias ao digitar na barra de busca
  useEffect(() => {
    const filtered = industria.filter((industria) => {
      const nome = industria.Nome || ''; // Garante que 'nome' nunca será undefined ou null
      return nome.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredIndustria(filtered);
  }, [searchText, industria]);

  // Renderizar a industria
  const renderIndustria = ({ item }: { item: Industrias }) => (
    <CardContainer onPress={() => onSelectLoja(item)}>
      <ProfileImage
        source={require('../../assets/images/loja.png')} // Substituir imagem futuramente
      />
      <CardContent>
        <CollaboratorName>{item.Nome}</CollaboratorName>
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
                  placeholder="Pesquisar Industria..."
                  value={searchText}
                  onChangeText={setSearchText}
                />
                {/* Botão de fechar */}
                <CloseButton onPress={onClose}>
                  <Icon name="close" size={24} color="#333" />
                </CloseButton>
              </SearchBarContainer>

              {/* Lista de industria */}
              <FlatList
                data={filteredIndustria}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderIndustria}
              />
            </ModalContent>
          </TouchableWithoutFeedback>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalIndustrias;
