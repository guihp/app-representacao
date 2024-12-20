import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

export interface Store {
  id: number;
  Nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
  criado_em: string;
}


// Buscar todas as lojas
export async function fetchStoresService(): Promise<Store[]> {
  const { data, error } = await supabase.from('lojas').select('*');

  if (error) {
    throw new Error('Erro ao buscar lojas');
  }
  if (!data) {
    throw new Error('Nenhuma loja encontrada');
  }

  return data as Store[];
}
  

// Adicionar uma nova loja
export async function addStoreService(storeData: Partial<Store>): Promise<Store> {
  const { data, error } = await supabase.from('lojas').insert(storeData).select('*');

  if (error || !data || data.length === 0) {
    throw new Error('Erro ao adicionar loja ou nenhuma loja retornada.');
  }

  return data[0] as Store; // Garantimos que `data[0]` seja do tipo Store
}

// Atualizar uma loja existente
export async function updateStoreService(storeId: number, storeData: Partial<Store>): Promise<Store> {
  const { data, error } = await supabase
    .from('lojas')
    .update(storeData)
    .eq('id', storeId)
    .select('*');

  if (error || !data || data.length === 0) {
    throw new Error('Atualização falhou ou loja não encontrada');
  }

  return data[0] as Store;
}

export async function deleteStoreService(storeId: number): Promise<void> {
  const { error } = await supabase.from('lojas').delete().eq('id', storeId);
  if (error) throw new Error('Erro ao excluir loja');
}
