import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

export interface industrias {
  id: number;
  Nome: string;
  Criado_por: string;
  Data_Criacao: string;
}


// Buscar todas as lojas
export async function fetchIndustriaService(): Promise<industrias[]> {
  const { data, error } = await supabase.from('industrias').select('*');

  if (error) {
    throw new Error('Erro ao buscar Industrias');
  }
  if (!data) {
    throw new Error('Nenhuma Industria encontrada');
  }

  return data as industrias[];
}
  

// Adicionar uma nova loja
export async function addIndustriaService(industriasData: Partial<industrias>): Promise<industrias> {
  const { data, error } = await supabase.from('industrias').insert(industriasData).select('*');

  if (error || !data || data.length === 0) {
    throw new Error('Erro ao adicionar industria ou nenhuma industria retornada.');
  }

  return data[0] as industrias; // Garantimos que `data[0]` seja do tipo industrias
}

// Atualizar uma loja existente
export async function updateindustriasService(industriasId: number, industriasData: Partial<industrias>): Promise<industrias> {
  const { data, error } = await supabase
    .from('industrias')
    .update(industriasData)
    .eq('id', industriasId)
    .select('*');

  if (error || !data || data.length === 0) {
    throw new Error('Atualização falhou ou industria não encontrada');
  }

  return data[0] as industrias;
}

export async function deleteindustriasService(industriasId: number): Promise<void> {
  const { error } = await supabase.from('industrias').delete().eq('id', industriasId);
  if (error) throw new Error('Erro ao excluir industria');
}
