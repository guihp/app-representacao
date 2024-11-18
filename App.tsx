import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/routes/index';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRoutes />
    </>
  );
}
