import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Route: undefined;
  CheckIn: undefined;
  Justification: undefined;
  MainIndustries: undefined;
  Collaborators: undefined; 
  CriarColaboradores: undefined;
  VerColaboradores: undefined;
  FazerPesquisa: undefined;
  CadastrarLoja: undefined;
  TreinamentoScreen: undefined;
  AdicionarAtividades: undefined;
  ActivityPage: undefined;
  HomeGerente: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
