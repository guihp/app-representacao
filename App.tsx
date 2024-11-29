import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'; // Importa o Provider do Redux
import { store } from './src/redux/store'; // Importa a store configurada
import AppRoutes from './src/routes/index';

export default function App() {
  return (
    <Provider store={store}> 
      <StatusBar style="auto" />
      <AppRoutes />
    </Provider>
  );
}
