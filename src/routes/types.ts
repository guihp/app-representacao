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
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
