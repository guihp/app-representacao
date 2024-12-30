import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalUsuarios from '../componentes/ModalUsuarios';
import ModalSupermercados from '../componentes/ModalSupermercados';
import ModalIndustrias from '../componentes/ModalIndustrias';
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
  ButtonActivyText,
} from './CriarAtividadesStyles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addAtividade } from '../../redux/actions/AtividadesActionsAll';

const tiposAtividade = ['Antes e Depois', 'Degustação'];

const AdicionarAtividades: React.FC = ({ navigation }: any) => {
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [currentDateType, setCurrentDateType] = useState<'inicio' | 'fim'>('inicio');
  const [usuarioSelecionadoId, setUsuarioSelecionadoId] = useState<number | null>(null);


  const [industriaSelecionada, setIndustriaSelecionada] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState('');
  const [showTipoDropdown, setShowTipoDropdown] = useState(false);
  const [lojaSelecionada, setLojaSelecionada] = useState('');

  const [isModalUsuariosVisible, setModalUsuariosVisible] = useState(false); 
  const [isModalSupermercadosVisible, setModalSupermercadosVisible] = useState(false);
  const [isModalIndustriaVisible, setModalIndustriaVisible] = useState(false);

  const user = useSelector((state: RootState) => state.user.user); // Obtém o usuário logado do Redux
  const dispatch = useDispatch<AppDispatch>();
  // Verifica se o usuário está logado
  useEffect(() => {
    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado. Faça login para continuar.');
      navigation.replace('Login'); // Redireciona para a página de login
    }
  }, [user]);

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
  const handleAddActivity = async () => {
    if (!tipoAtividade || !dataInicio || !dataFim || !industriaSelecionada || !usuarioSelecionado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const formatDate = (date: string): string => {
      const [day, month, year] = date.split('/'); // Divide a data em dia, mês e ano
      return `${year}-${month}-${day}`; // Retorna no formato esperado pelo Supabase
    };

    const atividadeData = {
      tipo: tipoAtividade,
      usuario_responsavel: usuarioSelecionadoId,
      loja: lojaSelecionada,
      industria: industriaSelecionada,
      data_inicio: formatDate(dataInicio),
      data_fim: formatDate(dataFim),
      status: 'Pendente',
      sincronizado: true,
      criado_por: user.id,
    };

    try {
      await dispatch(addAtividade(atividadeData));
      Alert.alert('Sucesso', 'Atividade adicionada com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um problema ao adicionar a atividade.');
    }
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
        <Label>Tipo de Atividade:</Label>
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
        <Label>Supermercado:</Label>
        <SelectButton onPress={() => setModalSupermercadosVisible(true)}>
          <ButtonText>{lojaSelecionada || 'Selecionar Loja'}</ButtonText>
          <Icon name="chevron-right" size={20} color="#777" />
        </SelectButton>

        <Label>Industria:</Label>
        <SelectButton onPress={() => setModalIndustriaVisible(true)}>
          <ButtonText>{industriaSelecionada || 'Selecionar Indústria'}</ButtonText>
          <Icon name="chevron-right" size={20} color="#777" />
        </SelectButton>

        {/* Selecionar Usuário */}
        <Label>Usuário:</Label>
        <SelectButton onPress={() => setModalUsuariosVisible(true)}>
          <ButtonText>{usuarioSelecionado || 'Selecionar Usuário'}</ButtonText>
          <Icon name="chevron-right" size={20} color="#777" />
        </SelectButton>

        {/* Data de Início */}
        <Label>Início da rota:</Label>
        <SelectButton onPress={() => showDatePicker('inicio')}>
          <ButtonText>{dataInicio || 'Selecionar Data de Início'}</ButtonText>
        </SelectButton>

        {/* Data de Fim */}
        <Label>Fim da rota:</Label>
        <SelectButton onPress={() => showDatePicker('fim')}>
          <ButtonText>{dataFim || 'Selecionar Data de Fim'}</ButtonText>
        </SelectButton>

        {/* Botão de Adicionar */}
        <Button onPress={handleAddActivity}>
          <ButtonActivyText>Adicionar Atividade</ButtonActivyText>
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

      {/* Modal de Usuários */}
      <ModalUsuarios
        visible={isModalUsuariosVisible}
        onClose={() => setModalUsuariosVisible(false)}
        onSelectUser={(user) => {
          setUsuarioSelecionado(user.nome);
          setModalUsuariosVisible(false);
          setUsuarioSelecionadoId(user.id)
        }}
      />

      {/* Modal de Lojas/Indústrias */}
      <ModalSupermercados
        visible={isModalSupermercadosVisible}
        onClose={() => setModalSupermercadosVisible(false)}
        onSelectLoja={(loja) => {
          setLojaSelecionada(loja.Nome); // Pega o nome da loja
          setModalSupermercadosVisible(false); // Fecha o modal
        }}
      />

      <ModalIndustrias
        visible={isModalIndustriaVisible}
        onClose={() => setModalIndustriaVisible(false)}
        onSelectLoja={(Industria) => {
          setIndustriaSelecionada(Industria.Nome); // Pega o nome da loja
          setModalIndustriaVisible(false); // Fecha o modal
        }}
      />

    </Container>
  );
};

export default AdicionarAtividades;
