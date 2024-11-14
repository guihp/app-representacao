import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeScreen />
    </NavigationContainer>
  );
}
