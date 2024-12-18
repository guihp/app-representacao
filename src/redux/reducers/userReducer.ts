// Estado inicial do usuário
const initialState = {
  user: null, // Dados do usuário logado
  loading: false, // Indica se o login está em progresso
  error: null, // Armazena erros relacionados ao login
};

// Reducer para gerenciar o estado do usuário
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload, // Salva os dados do usuário no estado global
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error, // Salva o erro no estado global
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null, // Remove os dados do usuário ao deslogar
        loading: false,
        error: null,
      };
    case 'SET_USER': // Adiciona um novo caso para atualizar o usuário
      return {
        ...state,
        user: action.payload, // Atualiza os dados do usuário
      };
    default:
      return state; // Retorna o estado atual por padrão
  }
};
