
import { createClient } from '@supabase/supabase-js';
import * as Crypto from 'expo-crypto'; // Substituímos a importação dinâmica pelo import estático

// Configuração do cliente Supabase
const supabaseUrl = 'https://ntufpfbsdqxgncasarkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dWZwZmJzZHF4Z25jYXNhcmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTc4NjEsImV4cCI6MjA0NzA3Mzg2MX0.EeIWbSAgJ5NmtDA3Pi85uiwt3w8noPwQnLsn7wK-sJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para validar o login do usuário
export async function loginUser(cpf: string, senha: string) {
  try {
    // Busca o usuário pelo CPF
    const { data: user, error } = await supabase
      .from('usuarios') // Nome da tabela no Supabase
      .select('*')
      .eq('cpf', cpf)
      .single();

    if (error) {
      console.error('Erro ao buscar usuário:', error.message);
      throw new Error('Usuário não encontrado. Verifique o CPF.');
    }

    // Validando a senha
    const [salt, hashedPassword] = user.senha.split('$');
    const newHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      senha + salt
    );

    if (newHash !== hashedPassword) {
      throw new Error('Senha incorreta.');
    }

    console.log('Usuário retornado do Supabase:', user);

    return {
      success: true,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        cargo: user.cargo,
      },
    };
  } catch (error: any) {
    console.error('Erro no login:', error.message);
    return { success: false, message: error.message };
  }
}
