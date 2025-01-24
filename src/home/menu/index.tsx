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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';

type MenuProps = {
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  // Obtém o cargo do usuário logado
  const userRole = useSelector((state: RootState) => state.user.user?.cargo);

  const navigateToCollaborators = () => {
    onClose();
    navigation.navigate('Collaborators');
  };

  const handleSearch = () => {
    onClose();
    navigation.navigate('FazerPesquisa');
  };

  const handleTrainer = () => {
    onClose();
    navigation.navigate('TreinamentoScreen');
  };

  const handleMark = () => {
    onClose();
    navigation.navigate('CadastrarLoja');
  };

  const handleActivy = () => {
    onClose();
    navigation.navigate('AdicionarAtividades');
  };

  const handlValidade = () => {
    onClose();
    navigation.navigate('Validade');
  };


  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <Overlay>
      <MenuContainer>
        <MenuHeader>
          <MenuTitle>Menu</MenuTitle>
          <MenuIcon onPress={onClose}>
            <Icon name="close" size={24} color="#FF7E5F" />
          </MenuIcon>
        </MenuHeader>

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

        <MenuItem onPress={handleTrainer}>
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

        <MenuItem onPress={handleMark}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="cart" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Cadastrar Loja</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>

        {/* Exibe apenas para usuários que não são promotores */}
        {userRole !== 'Promotor' && (
          <>
            <MenuItem onPress={handleActivy}>
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
          </>
        )}

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

        <MenuItem onPress={handlValidade}>
          <MenuItemLeft>
            <MenuItemIcon>
              <Icon name="calendar-alert" size={24} color="#FF7E5F" />
            </MenuItemIcon>
            <MenuText>Validade</MenuText>
          </MenuItemLeft>
          <MenuItemRight>
            <Icon name="chevron-right" size={24} color="#333" />
          </MenuItemRight>
        </MenuItem>



        <MenuItem onPress={handleLogout}>
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
