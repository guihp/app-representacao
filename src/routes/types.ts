import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  LoginCerto: undefined;
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
  ActivityPage: { industryName: string; industryId: string };
  HomeGerente: undefined;
  DegustacaoPage: { industryName: string; industryId: string };
  Validade: undefined;
  MetasPage: undefined;
  StoreRegister: undefined;
  Training: undefined;
  Queries: undefined;
  TelaHome: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
