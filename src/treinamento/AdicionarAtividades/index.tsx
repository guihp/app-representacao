import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {
  PopupContainer,
  PopupHeader,
  PopupTitle,
  PopupCloseButton,
  PopupContent,
  Input,
  ButtonRow,
  CancelButton,
  ConfirmButton,
  ButtonText,
  TypeSelector,
  TypeOption,
  FileSelectorButton,
} from './Styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

type AddActivityPopupProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (data: { title: string; type: string; link: string }) => void;
  user: any; // Usuário passado via props
};

const AddActivityPopup: React.FC<AddActivityPopupProps> = ({ visible, onClose, onConfirm, user }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'Arquivo' | 'Link'>('Arquivo');
  const [link, setLink] = useState('');
  const [fileUri, setFileUri] = useState<string | null>(null);

  const handleFileSelect = async () => {
    try {
      const result: any = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      if (result.type === 'success' && result.uri) {
        const fileInfo = await FileSystem.getInfoAsync(result.uri);
        if (!fileInfo.exists) throw new Error('Arquivo não encontrado.');
        setFileUri(result.uri);
        setLink(result.uri);
        Alert.alert('Arquivo selecionado', result.name || 'Sem nome');
      } else {
        Alert.alert('Operação cancelada', 'Nenhum arquivo foi selecionado.');
      }
    } catch (error) {
      console.error('Erro ao selecionar o arquivo:', error);
      Alert.alert('Erro', 'Não foi possível selecionar o arquivo.');
    }
  };

  const handleConfirm = async () => {
    if (!title || (!link && type === 'Link') || (type === 'Arquivo' && !fileUri)) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    let fileUrl = link;

    if (type === 'Arquivo' && fileUri) {
      try {
        const fileName = fileUri.split('/').pop();
        const fileContent = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const { data, error } = await supabase.storage
          .from('pdf_treinamento')
          .upload(`atividades/${Date.now()}_${fileName}`, Buffer.from(fileContent, 'base64'), {
            contentType: 'application/octet-stream',
          });

        if (error) throw error;

        fileUrl = data?.path
          ? supabase.storage.from('pdf_treinamento').getPublicUrl(data.path).data.publicUrl
          : '';
      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        Alert.alert('Erro', 'Falha ao fazer upload do arquivo.');
        return;
      }
    }

    try {
      const { error } = await supabase.from('treinamento').insert({
        titulo: title,
        tipo: type,
        link_material: fileUrl,
        criado_por: user.id, // Utiliza o ID do usuário passado via props
      });

      if (error) throw error;

      Alert.alert('Sucesso', 'Atividade adicionada com sucesso!');
      onConfirm({ title, type, link: fileUrl });
      onClose();
    } catch (error) {
      console.error('Erro ao salvar no banco:', error);
      Alert.alert('Erro', 'Não foi possível salvar no banco de dados.');
    }
  };

  if (!visible) return null;

  return (
    <PopupContainer>
      <PopupHeader>
        <PopupTitle>Adicionar Atividade</PopupTitle>
        <PopupCloseButton onPress={onClose}>
          <Icon name="close" size={24} color="#fff" />
        </PopupCloseButton>
      </PopupHeader>
      <PopupContent>
        <Input placeholder="Título da Atividade" value={title} onChangeText={setTitle} />
        <TypeSelector>
          <TypeOption selected={type === 'Arquivo'} onPress={() => setType('Arquivo')}>
            <Text>Arquivo</Text>
          </TypeOption>
          <TypeOption selected={type === 'Link'} onPress={() => setType('Link')}>
            <Text>Link do YouTube</Text>
          </TypeOption>
        </TypeSelector>
        {type === 'Arquivo' ? (
          <FileSelectorButton onPress={handleFileSelect}>
            <Text>Selecionar Arquivo</Text>
          </FileSelectorButton>
        ) : (
          <Input placeholder="Link do YouTube" value={link} onChangeText={setLink} />
        )}
        <ButtonRow>
          <CancelButton onPress={onClose}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
          <ConfirmButton onPress={handleConfirm}>
            <ButtonText>Confirmar</ButtonText>
          </ConfirmButton>
        </ButtonRow>
      </PopupContent>
    </PopupContainer>
  );
};

export default AddActivityPopup;
