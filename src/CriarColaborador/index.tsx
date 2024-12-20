import React, { useState } from 'react';
import {
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  FormContainer,
  Input,
  ActionButtonContainer,
  ActionButton,
  ActionButtonText,
  ModalButton,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButtonsContainer,
  ModalButtonConfirm,
  ModalButtonTextConfirm,
  ModalOption,
  ModalOptionText,
  CloseModalButton,
  CloseModalButtonText,
} from './CriarColaborador';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { saveUser } from '../services/userService';




type Props = NativeStackScreenProps<RootStackParamList, 'CriarColaboradores'>;

const AdicionarColaborador: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCargo, setSelectedCargo] = useState('');
  const [selectedTelas, setSelectedTelas] = useState<string[]>([]);
  const [isCargoModalVisible, setCargoModalVisible] = useState(false);
  const [isTelasModalVisible, setTelasModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  const generatePassword = () => {
    const newPassword = Math.random().toString(36).substring(2, 10); // Gera uma senha de 8 caracteres
    setPassword(newPassword);
  };

  const handleSave = () => {
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }
    setConfirmModalVisible(true); // Abre o modal de confirmação
  };

  const handleConfirmSave = async () => {
    try {

      // Dados do colaborador
      const userData = {
        nome: name,
        email,
        telefone: phone,
        cpf,
        senha: password,
        cargo: selectedCargo,
      };
  
      // Chamar a função saveUser para salvar no banco e enviar ao webhook
      const response = await saveUser(userData);
  
      if (response.success) {
        setConfirmModalVisible(false);
        Alert.alert(
          'Sucesso',
          'Cadastro realizado com sucesso! Deseja realizar outro cadastro?',
          [
            {
              text: 'Não',
              onPress: () => navigation.goBack(), // Retorna à página anterior
            },
            {
              text: 'Sim',
              onPress: () => {
                // Limpa os campos
                setName('');
                setEmail('');
                setPhone('');
                setCpf('');
                setAddress('');
                setPassword('');
                setSelectedCargo('');
                setSelectedTelas([]);
              },
            },
          ]
        );
      } else {
        Alert.alert('Erro', response.message || 'Erro ao salvar os dados.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Erro', 'Ocorreu um problema ao cadastrar o colaborador.');
    }
  };
  

  const handleCancel = () => {
    Alert.alert(
      'Cancelar',
      'Tem certeza que deseja cancelar?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => navigation.goBack() }, // Retorna à página anterior
      ],
    );
  };

  const handleCargoSelect = (cargo: string) => {
    setSelectedCargo(cargo);
    setCargoModalVisible(false);
  };

  const handleTelasSelect = (tela: string) => {
    setSelectedTelas((prev) =>
      prev.includes(tela) ? prev.filter((item) => item !== tela) : [...prev, tela]
    );
  };

  const formatCpf = (text: string) => {
    const onlyNumbers = text.replace(/\D/g, '').slice(0, 11); // Limita a 11 números
    const cpfFormatted = onlyNumbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfFormatted);
  };

  const formatPhone = (text: string) => {
    let onlyNumbers = text.replace(/\D/g, '').slice(0, 11); // Limita a 11 números
    if (onlyNumbers.length > 2 && onlyNumbers[2] !== '9') {
      onlyNumbers = onlyNumbers.slice(0, 2) + '9' + onlyNumbers.slice(2); // Adiciona o '9' após o DDD se necessário
    }
    const phoneFormatted = onlyNumbers
      .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses em torno do DDD
      .replace(/(\d{5})(\d{4})$/, '$1-$2'); // Adiciona o hífen no final
    setPhone(phoneFormatted);
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderContainer>
        <HeaderTitle>Adicionar Colaborador</HeaderTitle>
      </HeaderContainer>

      {/* Formulário */}
      <FormContainer>
        <Input
          placeholder="Nome Completo*"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Telefone"
          value={phone}
          onChangeText={formatPhone}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="CPF*"
          value={cpf}
          onChangeText={formatCpf}
          keyboardType="numeric"
        />
        <Input
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />

        {/* Botão para adicionar Cargos */}
        <ModalButton onPress={() => setCargoModalVisible(true)}>
          <ModalButtonText>
            {selectedCargo || 'Selecionar Cargo*'}
          </ModalButtonText>
          <Icon name="chevron-down" size={24} color="#333" />
        </ModalButton>

        {/* Botão para adicionar Telas */}
        <ModalButton onPress={() => setTelasModalVisible(true)}>
          <ModalButtonText>
            {selectedTelas.length > 0
              ? `Telas Selecionadas (${selectedTelas.length})`
              : 'Selecionar Telas'}
          </ModalButtonText>
          <Icon name="chevron-down" size={24} color="#333" />
        </ModalButton>

        {/* Gerar Senha */}
        <ModalButton disabled>
          <ModalButtonText>Senha Gerada*: {password || 'Clique para gerar'}</ModalButtonText>
          <TouchableOpacity onPress={generatePassword}>
            <Icon name="refresh" size={24} color="#FF7E5F" />
          </TouchableOpacity>
        </ModalButton>
      </FormContainer>

      {/* Botões de ação */}
      <ActionButtonContainer>
        <ActionButton color="#05e32e" onPress={handleSave}>
          <ActionButtonText>Salvar</ActionButtonText>
        </ActionButton>
        <ActionButton color="#f40202" onPress={handleCancel}>
          <ActionButtonText>Cancelar</ActionButtonText>
        </ActionButton>
      </ActionButtonContainer>

      {/* Modal de Cargos */}
      <Modal visible={isCargoModalVisible} transparent animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Selecionar Cargo</ModalTitle>
            {['Dono', 'Gerente', 'Promotor'].map((cargo) => (
              <ModalOption key={cargo} onPress={() => handleCargoSelect(cargo)}>
                <ModalOptionText>{cargo}</ModalOptionText>
              </ModalOption>
            ))}
            <CloseModalButton onPress={() => setCargoModalVisible(false)}>
              <CloseModalButtonText>Fechar</CloseModalButtonText>
            </CloseModalButton>
          </ModalContent>
        </ModalContainer>
      </Modal>

      {/* Modal de Telas */}
      <Modal visible={isTelasModalVisible} transparent animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Selecionar Telas</ModalTitle>
            {['Tela Padrão Promotor', 'Tela Padrão Gerente'].map((tela) => (
              <ModalOption
                key={tela}
                onPress={() => handleTelasSelect(tela)}
              >
                <ModalOptionText>
                  {selectedTelas.includes(tela) ? `✔ ${tela}` : tela}
                </ModalOptionText>
              </ModalOption>
            ))}
            <CloseModalButton onPress={() => setTelasModalVisible(false)}>
              <CloseModalButtonText>Fechar</CloseModalButtonText>
            </CloseModalButton>
          </ModalContent>
        </ModalContainer>
      </Modal>

      {/* Modal de Confirmação */}
      <Modal visible={isConfirmModalVisible} transparent animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Confirmar Dados</ModalTitle>
            <ModalText>Nome: {name}</ModalText> 
            <ModalText>E-mail: {email}</ModalText>
            <ModalText>Telefone: {phone}</ModalText>
            <ModalText>CPF: {cpf}</ModalText>
            <ModalText>Endereço: {address}</ModalText>
            <ModalText>Cargo: {selectedCargo}</ModalText>
            <ModalText>Telas: {selectedTelas.join(', ')}</ModalText>
            <ModalButtonsContainer>
              <ModalButtonConfirm backgroundColor="#05e32e" onPress={handleConfirmSave}>
                <ModalButtonTextConfirm>Confirmar</ModalButtonTextConfirm>
              </ModalButtonConfirm>
              <ModalButtonConfirm backgroundColor="#f40202" onPress={() => setConfirmModalVisible(false)}>
                <ModalButtonTextConfirm>Cancelar</ModalButtonTextConfirm>
              </ModalButtonConfirm>
            </ModalButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AdicionarColaborador;
