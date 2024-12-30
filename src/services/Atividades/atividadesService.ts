import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8'; 
const supabase = createClient(supabaseUrl, supabaseKey);

// Interface para atividades
export interface Atividade {
  id: number;
  tipo: string;
  usuario_responsavel: number;
  loja: string;
  industria: string;
  data_inicio: string;
  data_fim: string;
  status?: string;
  sincronizado: boolean;
  criado_por: number;
}

export async function fetchAtividadesService(): Promise<Atividade[]> {
    const { data, error } = await supabase.from('atividades').select('*');
  
    console.log('Supabase response - Data:', data);
    console.log('Supabase response - Error:', error);
  

    if (error) {
      throw new Error('Erro ao buscar atividades');
    }
    if (!data) {
      throw new Error('Nenhuma atividade encontrada');
    }
  
    return data as Atividade[];
  }
  
  // Serviço para adicionar uma nova atividade
  export async function addAtividadeService(atividadeData: Partial<Atividade>): Promise<Atividade> {
    const { data, error } = await supabase
      .from('atividades')
      .insert(atividadeData)
      .select('*');
  
    if (error || !data || data.length === 0) {
      console.error('Erro no Supabase:', error); // Log detalhado do erro
      throw new Error('Erro ao adicionar atividade ou nenhuma atividade retornada.');
    }
  
    return data[0] as Atividade;
  }
  
  // Serviço para atualizar uma atividade existente
  export async function updateAtividadeService(atividadeId: number, atividadeData: Partial<Atividade>): Promise<Atividade> {
    const { data, error } = await supabase
      .from('atividades')
      .update(atividadeData)
      .eq('id', atividadeId)
      .select('*');
  
    if (error || !data || data.length === 0) {
      throw new Error('Atualização falhou ou atividade não encontrada');
    }
  
    return data[0] as Atividade;
  }
  
  // Serviço para excluir uma atividade existente
  export async function deleteAtividadeService(atividadeId: number): Promise<void> {
    const { error } = await supabase.from('atividades').delete().eq('id', atividadeId);
    if (error) throw new Error('Erro ao excluir atividade');
  }