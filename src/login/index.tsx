import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import {
  Container,
  Title,
  LogoContainer,
  Input,
  WordOfTheDayTitle,
  BibleMessageContainer,
  BibleMessageText,
  Header,
  HeaderText,
  SubTitle,
  InputContainer,
  LabelFloat,
  ContainerInputs,
  LoginButton,
  LoginButtonText,
  CheckboxContainer,
  CheckboxText,
} from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { AppDispatch } from '../redux/store';
import { getRandomVerse } from '../services/bibleService';

type UserType = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
};

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'LoginCerto'>>();
  const dispatch: AppDispatch = useDispatch();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [versiculo, setVersiculo] = useState('');
  const [referencia, setReferencia] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const formatCpf = (text: string) => {
    const onlyNumbers = text.replace(/\D/g, '').slice(0, 11); // Limita a 11 números
    const cpfFormatted = onlyNumbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfFormatted);
  };

  const handleLogin = async () => {
    try {
      // Validação de CPF e senha
      if (!cpf || !password) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
      }

      const user: UserType | undefined = await dispatch(login(cpf, password));

      if (!user) {
        Alert.alert('Erro', 'Usuário não encontrado.');
        return;
      }

      if (user.cargo === 'Promotor') {
        navigation.navigate('Home'); 
      } else {
        navigation.navigate('HomeGerente');
      }

      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } catch (error: any) {
      console.error('Erro no login:', error.message);
      Alert.alert('Erro', 'Ocorreu um problema ao realizar o login.');
    }
  };

  // Obtém o versículo do dia ao carregar a página
  useEffect(() => {
    const fetchVerse = async () => {
      const verse = await getRandomVerse();
      if (verse) {
        setVersiculo(verse.texto);
        setReferencia(verse.referencia);
      } else {
        setVersiculo('Erro ao carregar o versículo.');
        setReferencia('');
      }
    };

    fetchVerse();
  }, []);
  

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <StatusBar style="auto" />

        {/* Header com Logo */}
        <Header>
          <HeaderText>
            <Title>Fé Merchandising</Title>
            <SubTitle>Insira suas informações para entrar na plataforma</SubTitle>
          </HeaderText>
          <LogoContainer>
            <Image
              source={require('../assets/images/logo-branca.jpg')}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </LogoContainer>
        </Header>

        {/* Inputs */}
        <ContainerInputs>
          <InputContainer>
            <LabelFloat>CPF</LabelFloat>
            <Input
              placeholder="Digite seu CPF"
              value={cpf}
              onChangeText={formatCpf}
              keyboardType="numeric"
            />
          </InputContainer>

          <InputContainer>
            <LabelFloat>Senha</LabelFloat>
              <Input
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={{ flex: 1 }}
              />
              <TouchableOpacity style={{ position: 'absolute', right: 15, bottom: '24%' }} onPress={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#FE8460" />
              </TouchableOpacity>
          </InputContainer>
          <Icon></Icon>
          <CheckboxContainer onPress={() => setIsChecked(!isChecked)}>
      <Icon 
        name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
        size={24} 
        color="#000"
      />
      <CheckboxText>Lembrar minha senha</CheckboxText>
    </CheckboxContainer>
        </ContainerInputs>

        {/* Botão de Login */}
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>

        <View style={{flexDirection:'row', top:12}}>
            <Text style={{fontSize: 16, fontFamily: 'Poppins', fontWeight: 500, color:'#313131'}}>
                Esqueceu a senha? 
            </Text>
            <Text style={{fontSize: 16, fontFamily: 'Poppins', fontWeight: 500, color:'#313131'}}>
                
            </Text>
            <TouchableOpacity >
                <Text style={{fontSize: 16, fontFamily: 'Poppins', fontWeight: 500, color:'#FE8460'}}> 
                      Clique Aqui.
                </Text>
            </TouchableOpacity>
        </View>
        {/* Palavra do dia */}
        <WordOfTheDayTitle>{referencia}</WordOfTheDayTitle>
        <BibleMessageContainer>
          <BibleMessageText>{versiculo}</BibleMessageText>
        </BibleMessageContainer>
      </ScrollView>
    </Container>
  );
};

export default Login;
