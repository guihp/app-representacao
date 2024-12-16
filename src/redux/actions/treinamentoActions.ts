import { createClient } from '@supabase/supabase-js';
import { AppDispatch } from '../store';

// Configuração do Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Ação para buscar treinamentos
export const fetchTrainings = () => async (dispatch: AppDispatch) => {
  dispatch({ type: 'FETCH_TRAININGS_REQUEST' });

  try {
    const { data, error } = await supabase
      .from('treinamento') // Nome da tabela no Supabase
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    dispatch({
      type: 'FETCH_TRAININGS_SUCCESS',
      payload: data, // Dados dos treinamentos
    });
  } catch (error: any) {
    dispatch({
      type: 'FETCH_TRAININGS_FAILURE',
      payload: error.message,
    });
  }
};
