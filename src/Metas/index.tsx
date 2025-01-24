import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ProgressBar } from 'react-native-paper';
import {
  Container,
  Header,
  HeaderTitle,
  FormContainer,
  Input,
  ActionButton,
  ActionButtonText,
  IndustryCard,
  IndustryName,
  ProgressContainer,
  ProgressText,
  BackButton,
  Container2,
} from './styles'; // Importe seus estilos personalizados
import { fetchIndustriaService } from '../services/industriaservices';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Industria = {
  id: number;
  Nome: string;
  meta?: number;
  vendas?: number;
};

type Props = NativeStackScreenProps<RootStackParamList, 'MetasPage'>;

const MetasPage: React.FC<Props> = ({ navigation }) => {
  const [industrias, setIndustrias] = useState<Industria[]>([]);
  const [metaEmpresa, setMetaEmpresa] = useState<number>(0);
  const [vendasTotais, setVendasTotais] = useState<number>(0);

  // Carregar indústrias do banco de dados
  useEffect(() => {
    const loadIndustria = async () => {
      const response = await fetchIndustriaService(); // Serviço para buscar as indústrias
      if (Array.isArray(response)) {
        // Inicializa metas e vendas para cada indústria
        const industriasComMetas = response.map((industria) => ({
          ...industria,
          meta: 0,
          vendas: 0,
        }));
        setIndustrias(industriasComMetas);
      }
    };
    loadIndustria();
  }, []);

  // Atualizar vendas totais com base nas vendas das indústrias
  useEffect(() => {
    const totalVendas = industrias.reduce((total, industria) => total + (industria.vendas || 0), 0);
    setVendasTotais(totalVendas);
  }, [industrias]);

  // Atualizar a meta de uma indústria
  const handleUpdateMeta = (id: number, meta: number) => {
    setIndustrias((prevIndustrias) =>
      prevIndustrias.map((industria) =>
        industria.id === id ? { ...industria, meta } : industria
      )
    );
  };

  // Atualizar as vendas de uma indústria
  const handleUpdateVendas = (id: number, vendas: number) => {
    setIndustrias((prevIndustrias) =>
      prevIndustrias.map((industria) =>
        industria.id === id ? { ...industria, vendas } : industria
      )
    );
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // Renderizar uma indústria
  const renderIndustria = ({ item }: { item: Industria }) => {
    const progresso = item.meta ? (item.vendas || 0) / item.meta : 0;

    return (
      <IndustryCard>
        <IndustryName>{item.Nome}</IndustryName>
        <ProgressContainer>
          <ProgressText>Meta: R$ {item.meta || 0}</ProgressText>
          <ProgressText>Vendas: R$ {item.vendas || 0}</ProgressText>
          <ProgressBar progress={progresso} color="#05e32e" style={{ height: 10, borderRadius: 5 }} />
          <ProgressText>{Math.min(progresso * 100, 100).toFixed(1)}%</ProgressText>
        </ProgressContainer>
        <Input
          placeholder="Atualizar Meta"
          keyboardType="numeric"
          onSubmitEditing={(e) => handleUpdateMeta(item.id, Number(e.nativeEvent.text))}
        />
        <Input
          placeholder="Atualizar Vendas"
          keyboardType="numeric"
          onSubmitEditing={(e) => handleUpdateVendas(item.id, Number(e.nativeEvent.text))}
        />
      </IndustryCard>
    );
  };

  const progressoEmpresa = metaEmpresa ? vendasTotais / metaEmpresa : 0;

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={handleBack}>
          <Icon name="arrow-left" size={30} color="#FFF" />
        </BackButton>
        <HeaderTitle>Metas e Vendas</HeaderTitle>
      </Header>
<Container2>
      {/* Meta Total da Empresa */}
      <FormContainer>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Meta Total da Empresa
        </Text>
        <Input
          placeholder="Definir Meta Total"
          keyboardType="numeric"
          value={metaEmpresa ? metaEmpresa.toString() : ''}
          onChangeText={(text) => setMetaEmpresa(Number(text))}
        />
        <Text style={{ fontSize: 16 }}>Vendas Totais: R$ {vendasTotais}</Text>
        <ProgressBar
          progress={progressoEmpresa}
          color="#0056d2"
          style={{ height: 15, borderRadius: 5, marginVertical: 10 }}
        />
        <Text style={{ fontSize: 16 }}>
          Progresso Total: {Math.min(progressoEmpresa * 100, 100).toFixed(1)}%
        </Text>
      </FormContainer>

      {/* Lista de Indústrias */}
      <FlatList
        data={industrias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderIndustria}
        ListHeaderComponent={
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
            Metas por Indústria
          </Text>
        }
      />

      {/* Botão para Salvar */}
      <ActionButton color="#05e32e" onPress={() => Alert.alert('Sucesso', 'Metas atualizadas!')}>
        <ActionButtonText>Salvar Metas</ActionButtonText>
      </ActionButton>
      </Container2>  
    </Container>
  );
};

export default MetasPage;
