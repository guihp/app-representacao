import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { styles } from './sombras';
import {
  Container,
  Title,
  LogoContainer,
  Input,
  ButtonText,
  WordOfTheDayTitle,
  BibleMessageContainer,
  BibleMessageText,
} from './LoginStyles';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { AppDispatch } from '../redux/store';
import { getRandomVerse } from '../services/bibleService';
import { ScrollView } from 'react-native';

type UserType = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
};

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
  const dispatch: AppDispatch = useDispatch(); // Obtendo o dispatch do Redux

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [versiculo, setVersiculo] = useState('');
  const [referencia, setReferencia] = useState('');

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
        navigation.navigate('Home'); // Tela para promotores
      } else {
        navigation.navigate('HomeGerente'); // Tela para gerentes
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
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: '100%',
          alignItems: 'center',
          paddingVertical: 60,
          borderBottomLeftRadius: 125,
        }}
      >
        <LogoContainer>
          <Image
            source={require('../assets/images/testee.jpg')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </LogoContainer>
        <Title>Login</Title>
      </LinearGradient>

      <View style={{ width: '100%', alignItems: 'center', marginTop: -20 }}>
        <View style={[styles.inputShadow, { width: '85%', marginBottom: 20, marginTop: 50 }]}>
          <Input
            placeholder="CPF"
            value={cpf}
            onChangeText={formatCpf}
            keyboardType="numeric"
          />
          <Icon
            name="account-outline"
            size={24}
            color="#333"
            style={{ position: 'absolute', left: 15, top: 12 }}
          />
        </View>

        <View style={[styles.inputShadow, { width: '85%', flexDirection: 'row', alignItems: 'center', position: 'relative' }]}>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={{ flex: 1, paddingRight: 45 }}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 15, bottom: '45%' }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="#333" />
          </TouchableOpacity>
          <Icon
            name="lock-outline"
            size={24}
            color="#333"
            style={{ position: 'absolute', left: 15, top: 12 }}
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={{ width: '85%', marginTop: 20 }}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              padding: 15,
              borderRadius: 30,
              alignItems: 'center',
            }}
          >
            <ButtonText>Entrar</ButtonText>
          </LinearGradient>
        </TouchableOpacity>

        <WordOfTheDayTitle>Palavra do dia: {referencia}</WordOfTheDayTitle>
        <BibleMessageContainer>
          <BibleMessageText>
            {versiculo}
          </BibleMessageText>
        </BibleMessageContainer>
      </View>
      </ScrollView> 
    </Container>
  );
};

export default LoginScreen;
