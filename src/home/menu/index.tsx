import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  MenuContainer,
  MenuHeader,
  MenuTitle,
  MenuIcon,
  MenuItem,
  MenuText,
  MenuItemLeft,
  MenuItemRight,
  MenuItemIcon,
  Overlay,
} from './menuStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types'; 

type MenuProps = {
  onClose: () => void; // Função para fechar o menu
};

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use NavigationProp para garantir os tipos corretos

  const navigateToCollaborators = () => {
    onClose(); // Fecha o menu
    navigation.navigate('Collaborators'); // Navega para a tela de Colaboradores
  };

  const handleSearch = () => {
    navigation.navigate('FazerPesquisa');
  };

  return (
    <Overlay>
      {/* Menu lateral */}
      <MenuContainer>
        {/* Header do menu */}
        <MenuHeader>
          <MenuTitle>Menu</MenuTitle>
          <MenuIcon onPress={onClose}>
            <Icon name="close" size={24} color="#FF7E5F" />
          </MenuIcon>
        </MenuHeader>

        {/* Opções do menu */}
        <MenuItem onPress={() => alert('Sincronização')}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="sync" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Sincronização</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        <MenuItem onPress={() => alert('Treinamento')}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="book-open-outline" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Treinamento</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        <MenuItem onPress={() => alert('Adicionar Atividades')}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="plus-circle-outline" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Adicionar Atividades</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        <MenuItem onPress={navigateToCollaborators}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="account-plus-outline" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Adicionar Colaborador</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        <MenuItem onPress={handleSearch}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="magnify" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Fazer Pesquisa</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        {/* Opção de sair */}
        <MenuItem onPress={() => alert('Sair')}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="logout" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Sair</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>
      </MenuContainer>
    </Overlay>
  );
};

export default Menu;
