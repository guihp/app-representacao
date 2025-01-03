import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import {
  LogoContainer,
  WelcomeText,
  DateSubText,
  OptionsContainer,
  OptionCard,
  OptionText,
  OptionIcon,
} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeGerente'>;

const HomeGerente: React.FC<Props> = ({ navigation }) => {
  const userName = useSelector((state: RootState) => state.user.user?.nome || 'Usuário');

  const getFirstAndLastName = (fullName: string) => {
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0];
    }
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar style="auto" />

      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: '100%',
          height: '40%',
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <LogoContainer>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
        </LogoContainer>
        <WelcomeText>Olá, {getFirstAndLastName(userName)}</WelcomeText>
        <DateSubText>Seja bem-vindo(a)</DateSubText>
      </LinearGradient>

      {/* Container das opções */}
      <OptionsContainer>

        <OptionCard onPress={() => navigation.navigate('AdicionarAtividades')}>
          <OptionIcon name="plus-circle-outline" />
          <OptionText>Adicionar Atividades</OptionText>
        </OptionCard>

        <OptionCard onPress={() => navigation.navigate('FazerPesquisa')}>
          <OptionIcon name="magnify" />
          <OptionText>Fazer Pesquisa</OptionText>
        </OptionCard>

        <OptionCard onPress={() => navigation.navigate('CadastrarLoja')}>
          <OptionIcon name="cart" />
          <OptionText>Cadastrar Loja</OptionText>
        </OptionCard>

        <OptionCard onPress={() => navigation.navigate('Collaborators')}>
          <OptionIcon name="account-multiple" />
          <OptionText>Colaboradores</OptionText>
        </OptionCard>

        <OptionCard onPress={() => navigation.navigate('TreinamentoScreen')}>
          <OptionIcon name="book-open-outline" />
          <OptionText>Treinamento</OptionText>
        </OptionCard>

      </OptionsContainer>
    </View>
  );
};

export default HomeGerente;
