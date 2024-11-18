import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, TouchableOpacity, View, Dimensions } from 'react-native';
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

const { height } = Dimensions.get('window'); // Obter a altura da tela

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();// Usando o tipo NavigationProps para definir a navegação

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Home'); // Navegar para a tela Home
  };

  const formatCpf = (text: string) => {
    const cpfFormatted = text
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfFormatted);
  };

  return (
    <Container>
      <StatusBar style="auto" />

      {/* Header com o LinearGradient diretamente */}
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
          <Image source={require('../assets/images/logo.png')} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        </LogoContainer>
        <Title>Login</Title>
      </LinearGradient>

      {/* Área de conteúdo abaixo do cabeçalho */}
      <View style={{ width: '100%', alignItems: 'center', marginTop: -20 }}>
        <View style={[styles.inputShadow, { width: '85%', marginBottom: 20, marginTop: 50 }]}>
          <Input placeholder="CPF" value={cpf} onChangeText={formatCpf} keyboardType="numeric" />
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
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#333" />
          </TouchableOpacity>
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

        <WordOfTheDayTitle>Palavra do dia:</WordOfTheDayTitle>
        <BibleMessageContainer>
          <BibleMessageText>"O Senhor é meu pastor e nada me faltará." - Salmos 23:1</BibleMessageText>
        </BibleMessageContainer>
      </View>
    </Container>
  );
};

export default LoginScreen;
