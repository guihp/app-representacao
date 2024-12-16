import React, { useState } from 'react';
import { Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  Header,
  BackButton,
  Title,
  Label,
  SelectButton,
  ButtonText,
  Button,
  DropdownContainer,
  DropdownItem,
  Container2,
} from './CriarAtividadesStyles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const tiposAtividade = ['Antes e Depois', 'Auditoria', 'Promoção'];
const usuarios = ['Usuário 1', 'Usuário 2', 'Usuário 3'];
const industriasLojas = ['Indústria 1', 'Loja 1', 'Indústria 2'];

const AdicionarAtividades: React.FC = ({ navigation }: any) => {
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [currentDateType, setCurrentDateType] = useState<'inicio' | 'fim'>('inicio');

  const [industriaSelecionada, setIndustriaSelecionada] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState('');
  const [showTipoDropdown, setShowTipoDropdown] = useState(false);
  const [showIndustriaLojaDropdown, setShowIndustriaLojaDropdown] = useState(false);
  const [showUsuarioDropdown, setShowUsuarioDropdown] = useState(false);

  // Mostrar seletor de data
  const showDatePicker = (type: 'inicio' | 'fim') => {
    setCurrentDateType(type);
    setDatePickerVisible(true);
  };

  // Formatar data para português
  const handleConfirmDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString('pt-BR');
    if (currentDateType === 'inicio') setDataInicio(formattedDate);
    else setDataFim(formattedDate);
    setDatePickerVisible(false);
  };

  // Função de adicionar atividade
  const handleAddActivity = () => {
    if (!tipoAtividade || !dataInicio || !dataFim || !industriaSelecionada || !usuarioSelecionado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', 'Atividade adicionada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </BackButton>
        <Title>Adicionar Atividade</Title>
      </Header>

      <Container2>
        {/* Tipo de Atividade */}
        <Label>Tipo de Atividade</Label>
        <SelectButton onPress={() => setShowTipoDropdown(!showTipoDropdown)}>
          <ButtonText>{tipoAtividade || 'Selecionar Tipo de Atividade'}</ButtonText>
          <Icon name="chevron-down" size={20} color="#777" />
        </SelectButton>
        {showTipoDropdown && (
          <DropdownContainer>
            {tiposAtividade.map((tipo, index) => (
              <DropdownItem
                key={index}
                onPress={() => {
                  setTipoAtividade(tipo);
                  setShowTipoDropdown(false);
                }}
              >
                <ButtonText>{tipo}</ButtonText>
              </DropdownItem>
            ))}
          </DropdownContainer>
        )}

        {/* Indústria ou Loja */}
        <Label>Indústria ou Loja</Label>
        <SelectButton onPress={() => setShowIndustriaLojaDropdown(!showIndustriaLojaDropdown)}>
          <ButtonText>{industriaSelecionada || 'Selecionar Indústria ou Loja'}</ButtonText>
          <Icon name="chevron-down" size={20} color="#777" />
        </SelectButton>
        {showIndustriaLojaDropdown && (
          <DropdownContainer>
            {industriasLojas.map((item, index) => (
              <DropdownItem
                key={index}
                onPress={() => {
                  setIndustriaSelecionada(item);
                  setShowIndustriaLojaDropdown(false);
                }}
              >
                <ButtonText>{item}</ButtonText>
              </DropdownItem>
            ))}
          </DropdownContainer>
        )}

        {/* Selecionar Usuário */}
        <Label>Usuário</Label>
        <SelectButton onPress={() => setShowUsuarioDropdown(!showUsuarioDropdown)}>
          <ButtonText>{usuarioSelecionado || 'Selecionar Usuário'}</ButtonText>
          <Icon name="chevron-down" size={20} color="#777" />
        </SelectButton>
        {showUsuarioDropdown && (
          <DropdownContainer>
            {usuarios.map((user, index) => (
              <DropdownItem
                key={index}
                onPress={() => {
                  setUsuarioSelecionado(user);
                  setShowUsuarioDropdown(false);
                }}
              >
                <ButtonText>{user}</ButtonText>
              </DropdownItem>
            ))}
          </DropdownContainer>
        )}

        {/* Data de Início */}
        <Label>Data de Início</Label>
        <SelectButton onPress={() => showDatePicker('inicio')}>
          <ButtonText>{dataInicio || 'Selecionar Data de Início'}</ButtonText>
        </SelectButton>

        {/* Data de Fim */}
        <Label>Data de Fim</Label>
        <SelectButton onPress={() => showDatePicker('fim')}>
          <ButtonText>{dataFim || 'Selecionar Data de Fim'}</ButtonText>
        </SelectButton>

        {/* Botão de Adicionar */}
        <Button onPress={handleAddActivity}>
          <ButtonText>Adicionar Atividade</ButtonText>
        </Button>

        {/* DateTime Picker */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="pt-BR"
          onConfirm={handleConfirmDate}
          onCancel={() => setDatePickerVisible(false)}
        />
      </Container2>
    </Container>
  );
};

export default AdicionarAtividades;
