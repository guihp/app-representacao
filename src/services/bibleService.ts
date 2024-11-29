import axios from 'axios';

const BIBLE_API_BASE_URL = 'https://bible-api.com/';

// Função para obter um versículo aleatório
export const getRandomVerse = async () => {
  try {
    const { data } = await axios.get(`${BIBLE_API_BASE_URL}?random=verse&translation=almeida`);
    return {
      texto: data.text, // Texto do versículo
      referencia: data.reference, // Referência do versículo
    };
  } catch (error) {
    console.error('Erro ao buscar o versículo:', error);
    return null; // Retorna null em caso de erro
  }
};
