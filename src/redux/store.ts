import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

// Configurando o Redux Store
export const store = configureStore({
  reducer: {
    user: userReducer, // Combina o userReducer ao estado global
  },
});

// Tipos para usar o Redux no TypeScript
export type RootState = ReturnType<typeof store.getState>; // Define o tipo para o estado global
export type AppDispatch = typeof store.dispatch; // Define o tipo para o dispatch
