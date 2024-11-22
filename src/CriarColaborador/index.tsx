import React, { useState } from 'react';
import {
  Alert,
  View,
  Modal,
  Text,
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
  ModalOption,
  ModalOptionText,
  CloseModalButton,
  CloseModalButtonText,
} from './CriarColaborador';

const AdicionarColaborador: React.FC = () => {
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

  const generatePassword = () => {
    const newPassword = Math.random().toString(36).slice(-8);
    setPassword(newPassword);
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancelar',
      'Tem certeza que deseja cancelar?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => console.log('Voltar para a página anterior') },
      ],
    );
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log({
      name,
      email,
      phone,
      cpf,
      address,
      selectedCargo,
      selectedTelas,
      password,
    });
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
          onChangeText={setPhone}
        />
        <Input
          placeholder="CPF*"
          value={cpf}
          onChangeText={setCpf}
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
        <ActionButton color="#FF7E5F" onPress={handleSave}>
          <ActionButtonText>Salvar</ActionButtonText>
        </ActionButton>
        <ActionButton color="#333" onPress={handleCancel}>
          <ActionButtonText>Cancelar</ActionButtonText>
        </ActionButton>
      </ActionButtonContainer>

      {/* Modal de Cargos */}
      <Modal visible={isCargoModalVisible} transparent animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Selecionar Cargo</ModalTitle>
            {['RH', 'Promotor', 'Gerente'].map((cargo) => (
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
            {['Tela 1', 'Tela 2', 'Tela 3'].map((tela) => (
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
    </Container>
  );
};

export default AdicionarColaborador;
