import React, { useState, useEffect } from 'react';
import { Alert, Platform, Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  FormContainer,
  Input,
  ActionButtonContainer,
  ActionButtonContainer2,
  ActionButton,
  ActionButtonText,
  DateButton,
  DateButtonText,
  Container2,
  Text1,
  SubText1,
} from './styles';
import { RootState, AppDispatch } from '../redux/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAtividades } from '../redux/actions/AtividadesActionsAll';

type Props = NativeStackScreenProps<RootStackParamList, 'Validade'>;

const Validade: React.FC<Props> = ({ navigation }) => {
  // Pegando dados do Redux
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user); // Usuário logado
  const atividades = useSelector((state: RootState) => state.atividades.atividades); // Atividades do Redux

  const [codigo, setCodigo] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [estado, setEstado] = useState('MA'); // Estado inicial definido
  const [lojaAtual, setLojaAtual] = useState<{ nome: string }>({ nome: '' });

  const [showDatePicker, setShowDatePicker] = useState(false); // Estado para exibir o DateTimePicker
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para exibir o popup de confirmação

  useEffect(() => {
    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado. Faça login para continuar.');
      navigation.replace('Login');
    }
  }, [user]);

  useEffect(() => {
    // Busca as atividades ao carregar a página
    dispatch(fetchAtividades());
  }, [dispatch]);

  useEffect(() => {
    if (atividades.length > 0) {
      const hoje = new Date().toISOString().split('T')[0]; // Data atual no formato ISO
      const atividadeAtual = atividades.find(
        (atividade) =>
          atividade.usuario_responsavel === user?.id &&
          atividade.data_inicio <= hoje &&
          atividade.data_fim >= hoje
      );

      if (atividadeAtual && atividadeAtual.loja) {
        setLojaAtual({ nome: atividadeAtual.loja });
      }
    }
  }, [atividades, user]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false); // Oculta o DateTimePicker
    if (selectedDate) {
      // Formata a data no formato dd/MM/yyyy
      const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      setDataVencimento(formattedDate); // Atualiza o estado da data de vencimento
    }
  };

  const handleSave = async () => {
    if (!codigo || !dataVencimento || !descricao || !quantidade || !lote || !estado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Dados do formulário
    const formData = {
      nomePromotor: user?.nome || 'Não especificado',
      loja: lojaAtual.nome || 'Não especificado',
      codigo,
      dataVencimento,
      descricao,
      quantidade,
      lote,
      estado,
    };

    // Confirmação final antes de enviar para o webhook
    setShowConfirmation(true);
  };

  const confirmAndSend = async () => {
    const formData = {
      nomePromotor: user?.nome || 'Não especificado',
      loja: lojaAtual.nome || 'Não especificado',
      codigo,
      dataVencimento,
      descricao,
      quantidade,
      lote,
      estado,
    };

    try {
      const response = await fetch(
        'https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/Validade',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Alert.alert('Sucesso', 'Dados enviados com sucesso!');
        setShowConfirmation(false);
      } else {
        Alert.alert('Erro', 'Falha ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      Alert.alert('Erro', 'Não foi possível enviar os dados.');
    }
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={30} color="#FFF" />
        </BackButton>
        <HeaderTitle>Validade</HeaderTitle>
      </Header>
      <Container2>
        {/* Formulário */}
        <FormContainer>
          <Input placeholder="Nome do Promotor" value={user?.nome || ''} editable={false} />
          <Input placeholder="Loja" value={lojaAtual.nome || ''} editable={false} />
          <Input
            placeholder="Código Reduzido *"
            value={codigo}
            onChangeText={setCodigo}
            keyboardType="numeric"
          />
          <Input
            placeholder="Descrição *"
            value={descricao}
            onChangeText={setDescricao}
          />
          <Input
            placeholder="Quantidade *"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
          <Input
            placeholder="Lote *"
            value={lote}
            onChangeText={setLote}
          />
          <Input
            placeholder="Estado *"
            value={estado}
            onChangeText={setEstado} // Permite ao usuário alterar o estado
          />
          {/* Botão para abrir o calendário */}
          <DateButton onPress={() => setShowDatePicker(true)}>
            <DateButtonText>
              {dataVencimento || 'Selecionar Data de Vencimento'}
            </DateButtonText>
          </DateButton>
        </FormContainer>

        {/* Botões */}
        <ActionButtonContainer>
          <ActionButton color="#05e32e" onPress={handleSave}>
            <ActionButtonText>Salvar</ActionButtonText>
          </ActionButton>
        </ActionButtonContainer>

        {/* DateTimePicker */}
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            locale="pt-BR" // Exibe o calendário em português
            onChange={handleDateChange}
          />
        )}

        {/* Popup de Confirmação */}
        <Modal visible={showConfirmation} transparent animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 10,
                width: '80%',
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                Confirmar Dados
              </Text>
              <Text1>Promotor: <SubText1>{user?.nome || 'Não especificado'}</SubText1> </Text1>
              <Text1>Loja: <SubText1>{lojaAtual.nome || 'Não especificado'}</SubText1> </Text1>
              <Text1>Código: <SubText1>{codigo}</SubText1></Text1>
              <Text1>Descrição: <SubText1>{descricao}</SubText1></Text1>
              <Text1>Quantidade: <SubText1>{quantidade}</SubText1></Text1>
              <Text1>Lote: <SubText1>{lote}</SubText1></Text1>
              <Text1>Estado: <SubText1>{estado}</SubText1></Text1>
              <Text1>Data de Vencimento: <SubText1>{dataVencimento}</SubText1></Text1>
              <ActionButtonContainer2>
                <ActionButton color="#05e32e" onPress={confirmAndSend}>
                  <ActionButtonText>Confirmar</ActionButtonText>
                </ActionButton>
                <ActionButton
                  color="#f40202"
                  onPress={() => setShowConfirmation(false)}
                >
                  <ActionButtonText>Cancelar</ActionButtonText>
                </ActionButton>
              </ActionButtonContainer2>
            </View>
          </View>
        </Modal>
      </Container2>
    </Container>
  );
};

export default Validade;
