import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers as fetchUsersFromSupabase } from '../../services/userFetchService';

// Definição da action para buscar usuários
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await fetchUsersFromSupabase();
      if (!users) {
        return rejectWithValue('Nenhum usuário encontrado.');
      }
      return users; // Retorna os usuários encontrados
    } catch (error: any) {
      console.error('Erro ao buscar usuários:', error.message);
      return rejectWithValue(error.message); // Retorna erro, se ocorrer
    }
  }
);
