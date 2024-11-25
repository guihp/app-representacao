import { createClient } from '@supabase/supabase-js';

// Configurando o cliente do Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co'; // Substitua pelo URL do seu projeto Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8'; // Substitua pela chave de serviço do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para buscar usuários ativos no Supabase
export async function fetchUsers(filter: { nome?: string } = {}) {
  try {
    // Configurando a consulta no Supabase
    const query = supabase.from('usuarios').select('*').eq('status', true); // Apenas usuários com status true

    // Aplicando filtro opcional (nome)
    if (filter.nome) {
      query.ilike('nome', `%${filter.nome}%`); // Busca por nome parcial, sem diferenciar maiúsculas/minúsculas
    }

    // Executando a consulta
    const { data, error } = await query;

    if (error) {
      console.error('Erro ao buscar usuários no Supabase:', error.message);
      throw new Error('Erro ao buscar usuários no banco de dados.');
    }

    console.log('Usuários ativos encontrados:', data);
    return data; // Retorna os dados encontrados
  } catch (error: any) {
    console.error('Erro:', error.message);
    return { success: false, message: error.message };
  }
}

// Função para atualizar o status de um usuário (simula exclusão)
export async function updateUserStatus(userId: number, status: boolean) {
  try {
    // Atualizando o status do usuário no Supabase
    const { data, error } = await supabase
      .from('usuarios')
      .update({ status }) // Atualiza o status para o valor fornecido (true/false)
      .eq('id', userId); // Filtra pelo ID do usuário

    if (error) {
      console.error('Erro ao atualizar status do usuário:', error.message);
      throw new Error('Erro ao atualizar status do usuário no banco de dados.');
    }

    console.log('Status do usuário atualizado:', data);
    return { success: true, data };
  } catch (error: any) {
    console.error('Erro ao atualizar status:', error.message);
    return { success: false, message: error.message };
  }
}
