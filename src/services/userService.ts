import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

// Configurando o cliente do Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co'; // Substitua pelo URL do seu projeto Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8'; // Substitua pela chave de serviço do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

const WEBHOOK_URL = 'https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/EnviarMensagemSenhaUsuario'; // Substitua pelo URL do seu webhook

// Função para salvar usuário no Supabase
export async function saveUser(data: {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  senha: string;
  cargo: string;
}) {
  // Dados padrão
  const defaultEstado = 'MA'; // Estado padrão
  const defaultCidade = 'São Luís'; // Cidade padrão
  const nivelAcesso = 'Tela Padrão Promotor'; // Nível de acesso padrão

  try {
    // Inserindo no Supabase
    const { data: supabaseData, error } = await supabase
      .from('usuarios') // Nome da tabela no Supabase
      .insert([
        {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          cpf: data.cpf,
          senha: data.senha,
          cargo: data.cargo,
          estado_id: defaultEstado, // Estado padrão
          cidade: defaultCidade, // Cidade padrão
          nivel_acesso: nivelAcesso, // Nível de acesso
          status: true, // Status ativo por padrão
        },
      ]);

    if (error) {
      console.error('Erro ao salvar no Supabase:', error.message);
      throw new Error('Erro ao salvar no banco de dados.');
    }

    console.log('Dados salvos no Supabase:', supabaseData);

    // Enviando para o webhook
    const webhookPayload = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      cpf: data.cpf,
      senha: data.senha,
      cargo: data.cargo,
      cidade: defaultCidade,
      estado: defaultEstado,
      nivel_acesso: nivelAcesso,
    };

    await axios.post(WEBHOOK_URL, webhookPayload);
    console.log('Dados enviados ao webhook:', webhookPayload);

    return { success: true, message: 'Usuário salvo com sucesso!' };
  } catch (error: any) {
    console.error('Erro:', error.message);
    return { success: false, message: error.message };
  }
}
