import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { treinamentoReducer } from './reducers/treinamentoReducer';
import { storeReducer } from './reducers/storeReducer';
import { industriaReducer } from './reducers/industriaReducer';
import { atividadeReducer }  from './reducers/BuscarAtividadeReducer';

// Configurando o Redux Store
export const store = configureStore({
  reducer: {
    user: userReducer, 
    treinamento: treinamentoReducer,
    stores: storeReducer,
    Industria: industriaReducer,
    atividades: atividadeReducer, // Adicionando o reducer de atividades
  },
});

// Tipos para usar o Redux no TypeScript
export type RootState = ReturnType<typeof store.getState>; // Define o tipo para o estado global
export type AppDispatch = typeof store.dispatch; // Define o tipo para o dispatch